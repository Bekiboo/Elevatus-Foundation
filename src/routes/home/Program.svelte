<script>
  export let src, alt, title, subtitle, body, index

  let textAlign = 'text-left'
  let alignItem = 'items-start'
  let flexDirection = ''

  if (index % 2 == 0) {
    textAlign = 'text-right'
    alignItem = 'items-end'
    flexDirection = 'flex-row-reverse'
  }

  //   const progress = tweened(0, {
  //     duration: 1000,
  //     easing: cubicOut,
  //   })

  //   function getRandomArbitrary(min, max) {
  //     return (Math.random() * (max - min) + min)
  //   }

  const blobValues = [
    [70, 30, 30, 70, 30, 30, 70, 70],
    [70, 30, 30, 70, 70, 70, 30, 30],
    [30, 70, 70, 30, 70, 70, 30, 30],
    [30, 70, 70, 30, 30, 30, 70, 70],
  ]

  let random = Math.floor(Math.random() * blobValues.length)
</script>

<div class="container mt-16">
  <div class="flex flex-col md:flex-row md:{flexDirection} items-center">
    <img
      class="h-96 w-96 object-cover md:basis-1/3"
      style="border-radius:
                {blobValues[random][0]}% {blobValues[random][1]}% {blobValues[
        random
      ][2]}% {blobValues[random][3]}% /
                {blobValues[random][4]}% {blobValues[random][5]}% {blobValues[
        random
      ][6]}% {blobValues[random][7]}%"
      {src}
      {alt}
    />
    <div
      class="md:basis-2/3 flex flex-col md:px-16 md:{textAlign} md:{alignItem}"
    >
      <h5 class="mb-2 text-4xl text-slate-600 font-bold">{title}</h5>
      <!-- <div>{subtitle}</div> -->
      {#each body as paragraph}
        <p class="mb-3 font-normal text-gray-700 max-w-[40ch]">{paragraph}</p>
      {/each}
    </div>
  </div>
</div>
