<script>
  import Hero from '$lib/components/Hero.svelte'

  export let data

  const hero = {
    src: 'img/hero/hero_team.jpg',
    alt: 'Under Construction',
    title: 'Our Test',
    subtitle: 'Dedicated and Passionate',
  }
</script>

<svelte:head>
  <title>Elevatus | Test</title>
</svelte:head>

<Hero {...hero} />
