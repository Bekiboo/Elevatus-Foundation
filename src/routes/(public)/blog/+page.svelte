<script>
  import Hero from '$lib/components/Public/Hero.svelte'
  import dateformat from 'dateformat'
  import { blogPosts } from '$lib/stores/blog'

  const hero = {
    src: 'img/hero/group_picture_zoo.jpg',
    alt: 'Under Construction',
    title: 'Blog',
    subtitle: 'Read about our work in Madagascar',
  }

  function getDate(e) {
    return dateformat(e, 'mmmm dS, yyyy')
  }

  function makeExcerpt(blogPost, length) {
    return blogPost.elements
      .map// concatenate value in elements map when type is text
      (function (e) {
        if (e.type == 'paragraph') {
          return e.value
        }
      })
      .join(' ')
      .substring(0, length)
  }
  console.log($blogPosts)
</script>

<svelte:head>
  <title>Elevatus | Blog</title>
</svelte:head>

<Hero {...hero} />

<section class="container min-h-[50vh]">
  <div class="w-full">
    {#if $blogPosts != null}
      {#each $blogPosts as blogPost, i}
        {#if i == 0}
          <div
            class="flex flex-col mx-auto max-w-2xl md:flex-row lg:max-w-6xl my-16"
          >
            <a
              href="/blog/{blogPost.id}"
              class="basis-1/2 hover:opacity-80 duration-100 flex-none"
            >
              <img
                class="object-cover w-full h-96 md:w-full"
                src={blogPost?.elements[0].value}
                alt={blogPost?.title}
              />
            </a>
            <div class="flex flex-col p-4 leading-normal">
              <a href="/blog/{blogPost.id}"
                ><h5
                  class="mb-2 text-4xl font-bold tracking-tight text-gray-900 hover:text-orange-500"
                >
                  {blogPost.title}
                </h5></a
              >
              <p class="mb-3 font-normal text-gray-700">
                {blogPost.caption != null ? blogPost.caption : ''}
              </p>
              <div>
                {makeExcerpt(blogPost, 400)}
                <a href="/blog/{blogPost.id}" class="hover:text-orange-500"
                  >[...]</a
                >
              </div>
              <div class="pt-2"><p>{getDate(blogPost.created_at)}</p></div>
            </div>
          </div>
        {/if}
      {/each}

      <div class="flex gap-x-8 gap-y-16 flex-wrap">
        {#each $blogPosts as blogPost, i}
          {#if i != 0}
            <div class="flex flex-col mx-auto md:max-w-xs">
              <a href="/blog/{blogPost?.id}" class="hover:opacity-80 duration-100">
                <img
                  class="object-cover w-full h-96 md:h-auto md:w-full"
                  src={blogPost?.elements[0].value}
                  alt={blogPost?.title}
                />
              </a>
              <div class="flex flex-col p-4 leading-normal">
                <a href="/blog/{blogPost?.id}"
                  ><h5
                    class="mb-2 text-4xl font-bold tracking-tight text-gray-900 hover:text-orange-500"
                  >
                    {blogPost?.title}
                  </h5></a
                >
                <p class="mb-3 font-normal text-gray-700">
                  {blogPost?.caption != null ? blogPost?.caption : ''}
                </p>
                <div>
                  {makeExcerpt(blogPost, 200)}
                  <a href="/blog/{blogPost?.id}" class="hover:text-orange-500"
                    >[...]</a
                  >
                </div>
                <div class="pt-2"><p>{getDate(blogPost?.created_at)}</p></div>
              </div>
            </div>
          {/if}
        {/each}
      </div>
    {:else}
      <div class="w-[60ch] mx-auto mt-12">
        <p>Oops! We couldn't load the blog posts. Please check your internet connection and try again. If the problem persists, please contact our support team for assistance.</p>
      </div>
    {/if}
  </div>
</section>
