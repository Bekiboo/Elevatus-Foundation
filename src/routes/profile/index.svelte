<script>
  import { supabase } from '$lib/auth/supabase'
  import { onMount } from 'svelte'

  let profile

  const user = supabase.auth.user()

  onMount(async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select()
      .eq('id', user.id)
    if (error) return console.error('loadProfile: ', error)
    console.log('data: ' + data)
    profile = data[0]
  })

  function click() {
    console.log(profile.email)
  }
</script>

<svelte:head>
  <title>Elevatus | Profile</title>
  <html lang="en-GB" />
</svelte:head>

<div class="min-h-screen pt-20">
  <button on:click={click}>Click</button>
  <img src="" alt="" />
</div>
