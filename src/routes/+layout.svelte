<script>
  import '../app.css'
  import { navigating, page } from '$app/stores'
  import PreloadingIndicator from '$lib/components/PreloadingIndicator.svelte'
  import LoadingScreen from '$lib/components/LoadingScreen.svelte'
  import { loadingState } from '$lib/stores'
  import { Toaster } from 'svelte-french-toast'
  // import '@skeletonlabs/skeleton/styles/all.css'

  let loading = false
  loadingState.subscribe((state) => (loading = state))
</script>

<Toaster />

{#if $navigating}
  <PreloadingIndicator />
{/if}

{#if loading}
  <LoadingScreen />
{/if}

<!-- {#if !$page.error} -->
<slot />
<!-- {:else}
<div>An error occured</div>
{/if} -->
