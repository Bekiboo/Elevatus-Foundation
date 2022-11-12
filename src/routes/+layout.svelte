<script>
  import '../app.css'
  import { navigating, page } from '$app/stores'
  import PreloadingIndicator from '$lib/PreloadingIndicator.svelte'
</script>

{#if $navigating}
  <PreloadingIndicator />
{/if}

<slot />
