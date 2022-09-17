<script>
  import Hero from '$lib/components/Hero.svelte'
  import { onMount } from 'svelte'

  export let data
  
  let paragraphs = []
  let post = data
  

  const hero = {
    src: post.primary_img,
    alt: 'Under Construction',
    title: post.title,
    subtitle: post.caption,
  }
</script>

<svelte:head>
  <title>Elevatus | Blog</title>
  <html lang="en-GB" />
</svelte:head>

<Hero {...hero} />

<div class="container my-8 max-w-[60ch]">
  <a href="/blog">&larr; Back to the Blog</a>
  <p class="mt-4 whitespace-pre-line">{post.body}</p>
</div>
<img src={post.secondary_img} alt="">
<img src={post.tertiary_img} alt="">