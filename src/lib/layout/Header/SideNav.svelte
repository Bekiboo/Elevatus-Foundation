<script>
  export let userOpened
  export let menuOpened
  export let name
</script>

<ul
  id="user-navigation"
  class="sm:hidden flex gap-4 p-0
            flex-col fixed right-0 top-0 bottom-0 left-[30%]
            pt-[50%] pl-8 text-3xl backdrop-blur duration-150
            translate-x-[100%] ease-in-out transition-transform bg-white/90
            {name == 'menu' && menuOpened ? 'translate-x-0' : ''}
            {name == 'user' && userOpened ? 'translate-x-0' : ''}
            "
>
  <p
    class="absolute top-4 right-4 text-4xl text-orange-500"
    on:click
  >✖</p>
  <slot />
</ul>
