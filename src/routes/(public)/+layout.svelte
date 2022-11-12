<script>
  import Nav from '$lib/components/Header/Nav.svelte'
  import Footer from '$lib/components/Footer.svelte'
  import { Toaster } from 'svelte-french-toast'

</script>

<Nav />

<Toaster />

<main class="mx-auto min-h-[80vh]">
  <slot />
</main>

<Footer />
