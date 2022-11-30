<script>
  import Hero from '$lib/components/Public/Hero.svelte'
  import { supabaseClient } from '$lib/db/supabase'

  export let data

  const hero = {
    src: 'img/hero/hero_team.jpg',
    alt: 'Under Construction',
    title: 'Our Test',
    subtitle: 'Dedicated and Passionate',
  }

  async function handleSignUp() {
    try {
      const { data, error } = await supabaseClient.auth.signUp({
        email: 'example@email.com',
        password: 'example-password',
      })
      
      if (error) console.log(error);
    } catch (error) {
      console.log(error);
    }
  }
</script>

<svelte:head>
  <title>Elevatus | Test</title>
</svelte:head>

<Hero {...hero} />

<button on:click={handleSignUp}>Sign Up</button>
