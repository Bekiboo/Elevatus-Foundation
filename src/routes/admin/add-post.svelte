<script>
  import { addBlogPost } from '../../lib/stores/blog'

  function formatData(e) {
    const formData = new FormData(e.target)

    const data = {}
    // @ts-ignore
    for (let field of formData) {
      const [key, value] = field
      data[key] = value
    }
    addBlogPost(data.title, data.caption, data.body, data.img)
  }
</script>

<section class="px-4 max-w-4xl">
  <form on:submit|preventDefault={formatData}>
    <div class="mt-1 flex flex-col">
      <label class="text-white" for="title">Title</label>
      <input
        class="rounded-md py-1 px-2 w-96"
        type="text"
        id="title"
        name="title"
        value=""
      />
    </div>
    <div class="mt-1 flex flex-col">
      <label class="text-white" for="caption">Caption</label>
      <input
        class="rounded-md py-1 px-2 w-96"
        type="text"
        id="caption"
        name="caption"
        value=""
      />
    </div>
    <div class="mt-1 flex flex-col">
      <label class="text-white" for="body">Body</label>
      <textarea
        class="rounded-md py-1 px-2 h-40"
        type="text"
        id="body"
        name="body"
        value=""
      />
    </div>
    <div class="mt-1 flex flex-col">
      <label class="text-white" for="img">Image</label>
      <input
        class="rounded-md py-1 px-2"
        type="text"
        id="img"
        name="img"
        value=""
      />
    </div>
    <!-- <label
      class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      for="user_avatar">Upload file</label
    >
    <input
      class="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 cursor-pointer dark:text-gray-400 focus:outline-none focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
      aria-describedby="user_avatar_help"
      id="user_avatar"
      type="file"
    />
    <div
      class="mt-1 text-sm text-gray-500 dark:text-gray-300"
      id="user_avatar_help"
    >
      A profile picture is useful to confirm your are logged into your account
    </div> -->
    <button
      class="bg-indigo-500 mt-4 py-1 px-2 rounded-md text-white hover:bg-indigo-400 duration-100"
      type="submit">Submit</button
    >
  </form>
</section>
