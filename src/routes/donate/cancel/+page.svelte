<script>
  import Hero from '$lib/components/Hero.svelte'

  const hero = {
    src: 'img/hero/under_construction.jpg',
    alt: 'Under Construction',
    title: 'Contact Us',
    subtitle: 'Leave a message, and we will try to answer within a week',
  }
</script>

<svelte:head>
  <title>Elevatus | Conctact Us</title>
  <html lang="en-GB" />
</svelte:head>

<Hero {...hero} />

