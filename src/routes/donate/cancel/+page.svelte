<script>
  import Hero from '$lib/components/Hero.svelte'

  const hero = {
    src: '../img/hero/under_construction.jpg',
    alt: 'Under Construction',
    title: 'Donation Cancelled',
    subtitle: '',
  }
</script>

<svelte:head>
  <title>Elevatus | Conctact Us</title>
  <html lang="en-GB" />
</svelte:head>

<Hero {...hero} />

<div class="container py-12">
  <p>
    If you encountered a problem, please reach out through our <a
      href="/contact"
      class="underline text-orange-800 hover:text-orange-600">Contact Form</a
    >.
  </p>
</div>
