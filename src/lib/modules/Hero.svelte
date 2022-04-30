<script>
  export let src, alt, title, subtitle
</script>

<div class="relative flex justify-center">
  <img class="w-full object-cover h-80 sm:h-96 brightness-[35%]" {src} {alt} />
  <div class="container absolute bottom-8 sm:bottom-12 max-w-6xl text-white">
    <h1 class="text-5xl sm:text-7xl uppercase font-black mb-2">{title}</h1>
    <span class="font-thin sm:text-2xl">{subtitle}</span>
  </div>
</div>
