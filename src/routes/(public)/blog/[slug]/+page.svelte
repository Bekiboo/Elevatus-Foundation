<script>
  import Hero from '$lib/components/Public/Hero.svelte'
  import dateFormat from 'dateformat'
  import { MetaTags } from 'svelte-meta-tags'

  export let data
  
  console.log(data)

  function getDate(e) {
    return dateFormat(e, 'mmmm dS, yyyy')
  }

  // s.array.forEach(element => {
  //   for (let index = 0; index < array.length; index++) {
  //     const element = array[index];
      
  //   }
  // });

  const hero = {
    src: data.elements[0].value,
    alt: data.title,
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
        url: data.elements[0].value,
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

  {#each data.elements as element, i}

    {#if element.type == 'paragraph'}
      <p class="mt-4 whitespace-pre-line">{element.value}</p>
    {/if}

    {#if element.type == 'image'}
      <img class="w-full mt-4" src={element.value} alt="image n°{i}" />
    {/if}

    {#if element.type == 'title'}
      <h2 class="mt-8 text-2xl font-bold">{element.value}</h2>
    {/if}
    
  {/each}

</div>
