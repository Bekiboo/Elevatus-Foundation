<script>
  import Nav from '$lib/components/Public/Header/Nav.svelte'
  import Footer from '$lib/components/Public/Footer.svelte'
  import { dev } from '$app/environment'
  import { page } from '$app/stores'
  import Hero from '$lib/components/Public/Hero.svelte'

  const hero = {
    src: './../../../img/hero/cancel.jpg',
    alt: '404',
    title: $page.status === 404 ? '404' : $page.status,
    subtitle: $page.status === 404 ? 'Page not found' : $page.error?.name,
  }
</script>

<svelte:head>
  <title>Elevatus - {$page.status}</title>
</svelte:head>

<Nav />

<Hero {...hero} />

<section class="container flex flex-col gap-8 my-8">
  <div class="min-h-[40vh] mx-auto mt-8">
    <p class="text-2xl">Sorry, we couldn't find the page you're looking for.</p>
  </div>
</section>
<div>
  {#if dev && $page.error?.stack}
    <h2>Stack Trace</h2>
    <pre>{$page.error.stack}</pre>
  {/if}
</div>

<Footer />
