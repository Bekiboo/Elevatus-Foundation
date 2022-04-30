<script>
  import { cubicInOut } from 'svelte/easing'
  import { blur } from 'svelte/transition'
  export let refresh = ''
</script>

{#key refresh}
  <div in:blur={{ delay: 0, duration: 150, easing: cubicInOut}}>
    <slot />
  </div>
{/key}
