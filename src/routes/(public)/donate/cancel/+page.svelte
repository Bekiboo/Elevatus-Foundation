<script>
  import Hero from '$lib/components/Public/Hero.svelte'

  const hero = {
    src: '../img/hero/cancel.jpg',
    alt: 'Stop Sign',
    title: 'Donation Cancelled',
    subtitle: 'Your donation did not go through',
  }
</script>

<svelte:head>
  <title>Elevatus | Canceled</title>
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
