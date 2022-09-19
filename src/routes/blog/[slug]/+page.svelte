<script>
  import Hero from '$lib/components/Hero.svelte'
  import dateFormat from 'dateformat'

  export let data

  let paragraphs = data.body.split('\n\n')
  console.log(paragraphs.length)

  let pictures = []
  pictures.push(data.secondary_img)
  pictures.push(data.tertiary_img)

  let sections = []

  for (let i = 0; i < paragraphs.length; i++) {
    if (paragraphs.length == 1) {
      sections.push({ text: paragraphs[i] })
      sections.push({ img: pictures[0] })
      sections.push({ img: pictures[1] })
      break
    }
    sections.push({ text: paragraphs[i] })
    if (pictures[i]) {
      sections.push({ img: pictures[i] })
    }
  }

  function getDate(e) {
    return dateFormat(e, 'mmmm dS, yyyy')
  }

  const hero = {
    src: data.primary_img,
    alt: 'Under Construction',
    title: data.title,
    subtitle: data.caption,
  }
</script>

<svelte:head>
  <title>Elevatus | Blog</title>
  <html lang="en-GB" />
</svelte:head>

<Hero {...hero} />

<div class="container my-8 max-w-[60ch]">
  <div class="flex justify-between">
    <a href="/blog">&larr; Back to the Blog</a>
    <div class="flex flex-col">
      {#if data.author}
        <div>By {data?.author}</div>
      {/if}
      <div>{getDate(data.created_at)}</div>
    </div>
  </div>
  {#each sections as section, index}
    {#if section.text}
      <p class="mt-4 whitespace-pre-line">{section.text}</p>
    {:else}
      <img
        class="w-full mt-4"
        src={section.img}
        alt="Illustrative picture n°{index}"
      />
    {/if}
  {/each}
</div>
