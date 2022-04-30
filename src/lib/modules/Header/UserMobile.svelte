<script>
  export let userOpened
  export let menuOpened
</script>

<button
  class="z-50 w-8 h-8 rounded-xl"
  aria-controls="user-navigation"
  aria-expanded={userOpened}
  on:click
>
  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
    <path
      class="
      {menuOpened || userOpened ? 'fill-orange-500' : 'fill-white'}"
      d="M 500 250 C 500 388 388 500 250 500 C 110 500 0 388 0 250 C 0 110 110 0 250 0 C 388 0 500 110 500 250 Z M 250 73 C 200 73 150 116 150 170 C 150 222 200 265 250 265 C 300 265 344 222 344 170 C 344 116 300 73 250 73 Z M 96 330 C 96 358 123 380 156 380 L 342 380 C 375 380 400 358 400 330 C 400 305 375 283 342 283 L 156 283 C 123 283 96 305 96 330 Z"
    />
  </svg>
</button>
