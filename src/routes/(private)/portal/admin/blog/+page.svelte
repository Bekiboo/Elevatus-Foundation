<script>
  import { blogPosts } from '$lib/stores/blog'

</script>

<svelte:head>
  <title>Admin | Manage Posts</title>
</svelte:head>

<section class="">
  <table class="w-full text-sm text-left text-gray-500">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50">
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
      {#each $blogPosts as post}
        <tr class="bg-white border-b">
          <th
            scope="row"
            class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
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
          <td>
            <button
              class="bg-red-500 py-1 px-2 rounded-md text-white hover:bg-red-400 duration-100"
              on:click={() => deletePost(post.id)}
              >Delete
            </button>
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
