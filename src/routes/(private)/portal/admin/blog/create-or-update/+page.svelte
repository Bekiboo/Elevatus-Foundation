<script>
  import { enhance } from '$app/forms'
  import { supabaseClient } from '$lib/db/supabase'
  import { loadingState } from '$lib/stores'
  import Svg from '$lib/svg/Svg.svelte'
  import { plusCircleSvg, trashSvg } from '$lib/svg/svgPathList'
  import toast from 'svelte-french-toast'
  import HeroSection from './HeroSection.svelte'
  import ImageInput from './ImageInput.svelte'
  import ParagraphInput from './ParagraphInput.svelte'
  import TitleInput from './TitleInput.svelte'

  // imagesToUpload.subscribe((value) => {
  //   console.log(value)
  // })

  let errors
  let showDelete = false
  let heroImage

  let elements = [
    { type: 'title', value: '' },
    { type: 'paragraph', value: '' },
    { type: 'image', value: null },
  ]

  function addElement(type) {
    elements.push({ type, value: '' })
    elements = [...elements]
  }

  const submitForm = ({ form }) => {
    loadingState.set(true)
    return async ({ result, update }) => {

      // add hero image to the beginning of the elements array
      elements.unshift({type: 'image', value: heroImage})

      // const images = elements
      //   .filter((obj) => obj.type === 'image')
      //   .map((obj) => obj.value)

      const images = new Map()

      const readyToSendEements = elements.map((obj) => {
        if (obj.type === 'image') {
          const uuid =
            Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15)
          images.set(uuid, obj.value)
          return {
            type: obj.type,
            value:
              'https://prglggfnitlwkefkgkaa.supabase.co/storage/v1/object/public/blog/images/' +
              uuid,
          }
        }
        return obj
      })
      console.log(readyToSendEements)
      console.log(images);

      images.forEach(async (key, value) => {
        // console.log('KEY: ' +key);
        // console.log('VALUE: ' + value);
        const { data, error } = await supabaseClient.storage
          .from('blog')
          .upload('images/' + value, key)
          console.log(data)

        if (error) console.log(error)
      })


      const { data, error } = await supabaseClient.from('blog-post').insert([
        {
          elements: readyToSendEements,
        },
      ])

      loadingState.set(false)

      if (result.type === 'failure') {
        loadingState.set(false)
        errors = result.data.errors
        toast.error(result.data.message, {
          duration: 5000,
          style: 'margin-top: 4rem',
        })
        return await applyAction(result)
      }
      errors = []
      toast.success('Successfully posted', {
        duration: 5000,
        style: 'margin-top: 4rem',
      })
      update()
    }
  }
</script>

<form method="POST" use:enhance={submitForm} novalidate>
  <HeroSection bind:heroImage />

  <!-- button to increment sections -->

  <div class="flex flex-col items-center container max-w-[60ch]">
    <!-- {#each sections as section}
      <BlogSection index={section} {images} />
    {/each} -->
    {#each elements as element, i}
      <div
        class="flex w-full relative"
        on:mouseenter={() => (showDelete = i)}
        on:mouseleave={() => (showDelete = null)}
      >
        {#if element.type === 'title'}
          <TitleInput bind:element />
        {/if}
        {#if element.type === 'paragraph'}
          <ParagraphInput bind:element />
        {/if}
        {#if element.type === 'image'}
          <ImageInput {element} {i} />
        {/if}

        <!-- delete button -->
        {#if showDelete === i}
          <button
            type="button"
            class="flex absolute top-0 bottom-0 my-auto h-min right-2 rounded-full p-2 text-white bg-red-500 opacity-50 hover:opacity-100 duration-300"
            on:click={() => {
              elements = elements.filter((el) => el !== element)
            }}
          >
            <Svg path={trashSvg} />
          </button>
        {/if}
      </div>
    {/each}

    <div class="flex justify-between w-full my-4 items-center">
      <button
        type="submit"
        class="text-white bg-orange-500 hover:bg-orange-400 border-2 border-white shadow-md active:shadow-none font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-100"
        >Submit</button
      >

      <button type="button" class="flex" on:click={() => addElement('title')}>
        Add title <Svg path={plusCircleSvg} />
      </button>
      <button
        type="button"
        class="flex"
        on:click={() => addElement('paragraph')}
      >
        Add paragraph <Svg path={plusCircleSvg} />
      </button>
      <button type="button" class="flex" on:click={() => addElement('image')}>
        Add image <Svg path={plusCircleSvg} />
      </button>
    </div>
  </div>
</form>
