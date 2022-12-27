<script>
  import Nav from '$lib/components/Public/Header/Nav.svelte'
  import Footer from '$lib/components/Public/Footer.svelte'
  import { page } from '$app/stores'
</script>

<Nav />


<main class="mx-auto min-h-[80vh]">
  {#if !$page.error}
    <slot />
  {:else}
    <div>An error occured</div>
  {/if}
</main>

<Footer />
