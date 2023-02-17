<script>
  import Svg from '$lib/svg/Svg.svelte'
  import { uploadSvg } from '$lib/svg/svgPathList'
  import { getPreview } from '$lib/utils'  


  let title
  let caption
  let preview
  export let heroImage

  function updatePreview(e) {
    let file = e.target.files[0]
    preview = getPreview(file)
    heroImage = file
  }
</script>

<div class="relative flex items-center justify-center w-full">
  <label
    for="dropzone-hero"
    class="relative flex flex-col items-center justify-center w-full h-64 sm:h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-800 hover:bg-gray-700 overflow-hidden"
  >
    <div class="z-10 text-gray-500">
      <input
        id="dropzone-hero"
        type="file"
        name="imageMain"
        accept="image/*"
        on:change={(e) => updatePreview(e)}
        class="hidden"
      />
      <div class="w-min mx-auto">
        <Svg path={uploadSvg} size={3} />
      </div>
      <p class="mb-2 text-sm">
        <span class="font-semibold">Click to upload</span> or drag and drop
      </p>
      <p class="text-xs mb-14">SVG, PNG, JPG or GIF (MAX. 500KB)</p>
    </div>
    <img
      class="w-full object-cover absolute brightness-[35%] z-10"
      src={preview}
      alt=""
    />
  </label>
  <label
    class="absolute z-20 bottom-8 sm:bottom-12 max-w-6xl text-white container"
  >
    <input
      type="text"
      name="title"
      id="title"
      class="text-5xl sm:text-7xl w-full uppercase font-black mb-2 bg-transparent"
      bind:value={title}
      placeholder="TITLE..."
    />
  </label>
  <label
    class="absolute z-20 bottom-8 sm:bottom-12 max-w-6xl text-white container"
  >
    <input
      type="text"
      name="caption"
      id="caption"
      class="font-thin sm:text-2xl bg-transparent"
      bind:value={caption}
      placeholder="Caption..."
    />
  </label>
</div>
