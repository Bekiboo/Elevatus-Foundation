<script>
  import Hero from '$lib/components/Public/Hero.svelte'

  let showComponent = true
  
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
  
  {#if showComponent}
    <Hero {...hero} />
  {/if}
