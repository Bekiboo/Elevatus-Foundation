<script>
  import { enhance } from '$app/forms'
  import { supabaseClient } from '$lib/db/supabase'
  import { loadingState } from '$lib/stores'
  import Svg from '$lib/svg/Svg.svelte'
  import { plusCircleSvg } from '$lib/svg/svgPathList'
  import toast from 'svelte-french-toast'
  import BlogSection from './BlogSection.svelte'
  import HeroSection from './HeroSection.svelte'

  // imagesToUpload.subscribe((value) => {
  //   console.log(value)
  // })

  let errors

  let sections = [1]
  const images = new Map()

  function addSection() {
    sections = [...sections, sections.length + 1]
  }

  const submitForm = ({ form }) => {

    loadingState.set(true)
    return async ({ result, update }) => {
      let imagesPaths = []

      images.forEach(async (image) => {
        const uuid =
          Math.random().toString(36).substring(2, 15) +
          Math.random().toString(36).substring(2, 15)

        imagesPaths.push('https://prglggfnitlwkefkgkaa.supabase.co/storage/v1/object/public/blog/images/' + uuid)
        console.log(imagesPaths);
        const { data, error } = await supabaseClient.storage
          .from('blog')
          .upload('images/' + uuid, image)

        if (error) console.log(error)
      })

      const body = [
        form.paragraph1?.value,
        form.paragraph2?.value,
        form.paragraph3?.value,
        form.paragraph4?.value,
        form.paragraph5?.value,
      ]

      console.log('imagesPaths: ' + imagesPaths);
      console.log('body: ' + body);
      console.log('form: ' + form);
      console.log('form.title: ' + form.title);
      console.log('form.caption: ' + form.caption);
      
      const { data, error } = await supabaseClient.from('blog-post').insert([
        {
          title: form.title.value,
          caption: form.caption.value,
          body,
          img: imagesPaths,
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
  <HeroSection {images} />

  <!-- button to increment sections -->

  <div class="flex flex-col items-center container max-w-[60ch]">
    {#each sections as section}
      <BlogSection index={section} {images} />
    {/each}
    <div class="flex justify-between w-full my-4 items-center">
      <button
        type="submit"
        class="text-white bg-orange-500 hover:bg-orange-400 border-2 border-white shadow-md active:shadow-none font-medium rounded-lg text-sm px-5 py-2.5 text-center duration-100"
        >Submit</button
      >
      {#if sections.length < 5}
        <button type="button" class="flex" on:click={addSection}>
          Add Section <Svg path={plusCircleSvg} />
        </button>
      {/if}
    </div>
  </div>
</form>
