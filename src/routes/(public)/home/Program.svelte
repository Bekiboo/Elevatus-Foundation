<script>
  export let src, alt, title, body, index

  let odd = index % 2 == 0

  //   const progress = tweened(0, {
  //     duration: 1000,
  //     easing: cubicOut,
  //   })

  //   function getRandomArbitrary(min, max) {
  //     return (Math.random() * (max - min) + min)
  //   }

  const blobValues = [
    ['70% 30% 30% 70% / 30% 30% 70% 70%'],
    ['70% 30% 30% 70% / 70% 70% 30% 30%'],
    ['30% 70% 70% 30% / 70% 70% 30% 30%'],
    ['30% 70% 70% 30% / 30% 30% 70% 70%'],
  ]

  let random = Math.floor(Math.random() * blobValues.length)
</script>

<div class="container mt-16">
  <div
    class="flex flex-col items-center
    {odd ? 'md:flex-row' : 'md:flex-row-reverse'}"
  >
    <img
      class="h-96 w-96 object-cover md:basis-1/3"
      style="border-radius: {blobValues[random]}"
      {src}
      {alt}
    />
    <div
      class="md:basis-2/3 flex flex-col md:px-16 
      {odd ? 'md:text-left' : 'md:text-right'} 
      {odd ? 'md:items-start' : 'md:items-end'}"
    >
      <h5 class="mb-2 text-4xl text-slate-600 font-bold">{title}</h5>
      {#each body as paragraph}
        <p class="mb-3 font-normal text-gray-700 max-w-[40ch]">{paragraph}</p>
      {/each}
    </div>
  </div>
</div>
