<script>
  import Hero from '$lib/components/Public/Hero.svelte'
  import { supabaseClient } from '$lib/db/supabase'
  import { regisrating } from '$lib/stores'
  import { onDestroy } from 'svelte'
  let isRegistrating
  regisrating.subscribe((value) => (isRegistrating = value))
  // console.log(isRegistrating);

  // onDestroy(() => {
  //   regisrating.set({ status: false, email: '' })
  // })

  // export let data

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

<p>Status: {isRegistrating.status}</p>
<p>Email: {isRegistrating.email}</p>

