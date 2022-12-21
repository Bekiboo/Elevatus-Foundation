<script>
  import { page } from '$app/stores'
  import { supabaseClient } from '$lib/db/supabase'
  import { goto } from '$app/navigation'
  import toast from 'svelte-french-toast'
  import UserSvg from '$lib/SVG/UserSvg.svelte'

  async function signOut() {
    const { error } = await supabaseClient.auth.signOut()
    return error
  }

  async function handleSignOut() {
    await toast.promise(
      signOut(),
      {
        loading: 'Logging out...',
        success: 'See you soon!',
        error: 'Something went wrong',
      },
      {
        icon: '👏',
      }
    )

    goto('/signin')
  }
</script>

<nav class="bg-honey px-2 sm:px-4 py-2.5 text-slate-700">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    
    <button on:click={handleSignOut}>Logout</button>

    <h1>{JSON.stringify($page.data.session.user.email)}</h1>
    <UserSvg />
  </div>
</nav>
