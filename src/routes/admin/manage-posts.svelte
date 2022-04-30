<script>
  import { loadBlogPosts, deleteBlogPost, blogPosts } from '$lib/stores/blog'

  loadBlogPosts()
  let posts
  blogPosts.subscribe((curr) => (posts = curr))
  console.log(posts)
</script>

<svelte:head>
  <title>Admin | Manage Posts</title>
  <html lang="en-GB" />
</svelte:head>

<section class="relative overflow-x-auto shadow-md sm:rounded-lg px-4">
  <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead
      class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
    >
      <tr>
        <th scope="col" class="px-6 py-3">Title</th>
        <th scope="col" class="px-6 py-3">Created At</th>
        <th scope="col" class="px-6 py-3">Archived</th>
        <th scope="col" class="px-6 py-3">Featured</th>
        <th scope="col" class="px-6 py-3"><span class="sr-only">Edit</span></th>
        <th scope="col" class="px-6 py-3"
          ><span class="sr-only">Delete</span></th
        >
      </tr>
    </thead>
    <tbody>
      {#each posts as post}
        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
            ><p>{post.title}</p></th
          >
          <td class="px-6 py-4"><p>{post.created_at.slice(0, 10)}</p></td>
          <td class="px-6 py-4"><p>{post.archived}</p></td>
          <td class="px-6 py-4"><p>{post.featured}</p></td>
          <td
            ><button
              class="bg-yellow-500 py-1 px-2 rounded-md text-white hover:bg-yellow-400 duration-100"
              >Edit</button
            ></td
          >
          <td
            ><button
              class="bg-red-500 py-1 px-2 rounded-md text-white hover:bg-red-400 duration-100"
              on:click={() => deleteBlogPost(post.id)}>Delete</button
            ></td
          >
        </tr>
      {/each}
    </tbody>
  </table>
</section>
