<script>
  import Hero from '$lib/components/Public/Hero.svelte'
  import dateFormat from 'dateformat'
  import { MetaTags } from 'svelte-meta-tags'

  export let data

  function getDate(e) {
    return dateFormat(e, 'mmmm dS, yyyy')
  }

  const hero = {
    src: data.img[0],
    alt: 'Under Construction',
    title: data.title,
    subtitle: data.caption,
  }
</script>

<svelte:head>
  <title>Elevatus | Blog</title>
</svelte:head>

<MetaTags
  title={data.title}
  description={data.caption}
  openGraph={{
    url: `https://www.elevatus-foundation.org/blog/${data.id}`,
    title: data.title,
    description: data.caption,
    images: [
      {
        url: data.img[0],
        width: 800,
        height: 600,
        alt: data.caption,
      },
    ],
    site_name: 'Elevatus',
  }}
/>

<Hero {...hero} />

<div class="container my-8 max-w-[60ch]">
  <div class="flex justify-between">
    <a href="/blog">&larr; Back to the Blog</a>
    <div class="flex flex-col">
      {#if data?.author?.firstName}
        <div>By {data.author.firstName} {data.author.lastName}</div>
        <div class="text-sm">{data.author.title}</div>
      {/if}
      <div class="text-sm">{getDate(data.created_at)}</div>
    </div>
  </div>
  {#each data.body as paragraph, i}
    {#if paragraph != null}
      <p class="mt-4 whitespace-pre-line">{paragraph}</p>
    {/if}
    {#if data?.img[i]}
      <img class="w-full mt-4" src={data.img[i]} alt="image n°{i}" />
    {/if}
  {/each}
</div>
