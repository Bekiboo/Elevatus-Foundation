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

<section class="container min-h-[50vh]">
  {#each data.data as blogPost}
    <a
      href="#"
      class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100"
    >
      <img
        class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={blogPost.img} alt={blogPost.title}
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5
          class="mb-2 text-2xl font-bold tracking-tight text-gray-900"
        >
        {blogPost.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700">
          {blogPost.body}
        </p>
      </div>
    </a>

    <!-- <div class="container py-8">
      <ul>
        <li class="pt-2"><p>{blogPost.title}</p></li>
        <li class="pt-2"><p>{blogPost.caption}</p></li>
        <li class="pt-2"><p>{blogPost.body}</p></li>
        <li class="pt-2"><img src={blogPost.img} alt={blogPost.title} /></li>
        <li class="pt-2"><p>{blogPost.archived}</p></li>
        <li class="pt-2"><p>{blogPost.created_at}</p></li>
      </ul>
    </div> -->
  {/each}
</section>
