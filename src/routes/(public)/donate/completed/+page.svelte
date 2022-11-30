<script>
  import Hero from '$lib/components/Public/Hero.svelte'

  const hero = {
    src: '../img/hero/completed.jpg',
    alt: 'Group of Malagasy children waving',
    title: 'Donation Completed',
    subtitle: 'Your donation went through',
  }
</script>

<svelte:head>
  <title>Elevatus | Compeleted</title>
</svelte:head>

<Hero {...hero} />

<div class="container py-12">
  <p>
    Thank you infinitely for your generous donation. Please, use our <a
    href="/contact"
    class="underline text-orange-800 hover:text-orange-600">Contact Form</a
  > if you have any question.
  </p>
</div>
