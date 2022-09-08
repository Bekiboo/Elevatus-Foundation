<script>
  import '../app.css' //Tailwind Css
  import { navigating } from '$app/stores'
  import Nav from '$lib/components/Header/Nav.svelte'
  import PreloadingIndicator from '$lib/PreloadingIndicator.svelte'
  import Footer from '$lib/components/Footer.svelte'
</script>

{#if $navigating}
  <PreloadingIndicator />
{/if}

<Nav />

<main class="mx-auto min-h-[80vh]">
  <slot />
</main>

<Footer />
