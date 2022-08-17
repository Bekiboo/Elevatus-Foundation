<script>
  import { addBlogPost } from '$lib/stores/blog'

  let fileInput
  let files
  let featuredImage

  function getBase64(image) {
    const reader = new FileReader()
    reader.readAsDataURL(image)
    reader.onload = (e) => {
      featuredImage = e.target.result
    }
  }

  async function uploadFunction(imgBase64) {
    const data = {}
    const imgData = imgBase64.split(',')
    data['image'] = imgData[1]
    console.log(data)

    const filePath = await fetch('/admin/blog/imageReducer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(data),
    }).then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    
    return filePath
  }


  async function formatData(e) {
    const formData = new FormData(e.target)

    const data = {}
    // @ts-ignore
    for (let field of formData) {
      const [key, value] = field
      data[key] = value
    }

    const filePath = await uploadFunction(featuredImage)

    addBlogPost(data.title, data.caption, data.body, filePath)
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
    <div class="container">
      {#if featuredImage}
        <img id="featuredImage" src={featuredImage} alt="featuredImage" />
      {:else}
        <img id="featuredImage" src="../../img/julien_connault.jpg" alt="featuredImage" />
      {/if}
      <input
        class="hidden"
        id="file-to-upload"
        type="file"
        accept=".png,.jpg"
        bind:files
        bind:this={fileInput}
        on:change={() => getBase64(files[0])}
      />
      <button class="upload-btn" on:click={() => fileInput.click()}>Upload</button>
    </div>
    
    <button
      class="bg-indigo-500 mt-4 py-1 px-2 rounded-md text-white hover:bg-indigo-400 duration-100"
      type="submit">Submit</button
    >
  </form>
</section>

<style>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #featuredImage {
    border-radius: 99999px;
    height: 128px;
    width: 128px;
    margin-bottom: 10px;
    object-fit: cover;
  }

  .hidden {
    display: none;
  }

  .upload-btn {
    width: 128px;
    height: 32px;
    background-color: black;
    font-family: sans-serif;
    color: white;
    font-weight: bold;
    border: none;
  }

  .upload-btn:hover {
    background-color: white;
    color: black;
    outline: black solid 2px;
  }
</style>