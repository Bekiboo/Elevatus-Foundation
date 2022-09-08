<script>
  export let userOpened
  export let menuOpened
  export let name
</script>

<div
  id="user-navigation"
  class="fixed right-0 top-0 bottom-0 
    pt-40 backdrop-blur duration-150
    translate-x-[100%] ease-in-out transition-transform bg-white/90
    {userOpened ? 'left-[15%] sm:left-[40%] lg:left-[60%]' : menuOpened ? 'left-[30%]' : ''}
    {name == 'menu' && menuOpened ? 'translate-x-0' : ''}
    {name == 'user' && userOpened ? 'translate-x-0' : ''}
    "
>
  <div>
    <slot />
  </div>
</div>
