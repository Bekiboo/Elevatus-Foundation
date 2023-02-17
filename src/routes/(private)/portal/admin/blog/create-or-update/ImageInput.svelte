<script>
  import { onMount } from 'svelte'
  //   import { createEventDispatcher } from 'svelte'
  import Svg from '$lib/svg/Svg.svelte'
  import { uploadSvg } from '$lib/svg/svgPathList'
  import { getPreview } from '$lib/utils'

  export let element
  export let preview
  export let i

  function updatePreview(e) {
    let image = e.target.files[0]
    preview = getPreview(image)
    element.value = image
  }

  onMount(() => {
    preview = ''
  })
</script>

<div class="relative flex items-center justify-center w-full">
  <label
    for="dropzone-image{i}"
    class="relative flex flex-col items-center justify-center w-full h-64 sm:h-96 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 overflow-hidden"
  >
    <div class="z-20 text-gray-500">
      <input
        id="dropzone-image{i}"
        type="file"
        name={'image' + i}
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
    <img class="object-cover absolute z-10" src={preview} alt="" />
  </label>
</div>
