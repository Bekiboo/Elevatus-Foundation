<script>
  import { page } from '$app/stores'
  import { supabaseClient } from '$lib/db/supabase'
  import { goto } from '$app/navigation'
  import toast from 'svelte-french-toast'

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut()
    return error
  }

  async function handleSignOut() {

    await toast.promise(signOut(), {
      loading: 'Logging out...',
      success: "See you soon!",
      error: 'Something went wrong',
    }, {
    icon: '👏'
})

    goto('/signin')
    // const { error } = await supabaseClient.auth.signOut()
    
  }
</script>

<header class="w-full h-16 bg-white flex items-center">
  <button on:click={handleSignOut}>Logout</button>

  <h1>{JSON.stringify($page.data.session.user.email)}</h1>
</header>
