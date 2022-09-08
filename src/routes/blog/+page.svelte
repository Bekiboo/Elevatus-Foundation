<script>
  import Hero from '$lib/components/Hero.svelte'

  export let data = []

  const hero = {
    src: 'img/group_picture_zoo.jpg',
    alt: 'Under Construction',
    title: 'Blog',
    subtitle: 'In the village of Ambohidranomanga',
  }
</script>

<svelte:head>
  <title>Elevatus | Blog</title>
  <html lang="en-GB" />
</svelte:head>

<Hero {...hero} />

<section class="min-h-[50vh]">
  {#each data.data as blogPost}
    <div class="container py-8">
      <ul>
        <li class="pt-2"><p>{blogPost.title}</p></li>
        <li class="pt-2"><p>{blogPost.caption}</p></li>
        <li class="pt-2"><p>{blogPost.body}</p></li>
        <li class="pt-2"><img src={blogPost.img} alt={blogPost.title} /></li>
        <li class="pt-2"><p>{blogPost.archived}</p></li>
        <li class="pt-2"><p>{blogPost.created_at}</p></li>
      </ul>
    </div>
  {/each}
</section>
