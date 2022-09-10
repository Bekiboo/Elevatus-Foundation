<script>
  import Hero from '$lib/components/Hero.svelte'

  export let data

  let post = data[0]

  const hero = {
    src: post.img,
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
  <p class="mt-4">{post.body}</p>
</div>
