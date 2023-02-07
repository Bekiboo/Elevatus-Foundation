<script>
  import { page } from '$app/stores'
  import { supabaseClient } from '$lib/db/supabase'
  import { goto } from '$app/navigation'
  import toast from 'svelte-french-toast'
  import Svg from '$lib/svg/Svg.svelte'
  import { chevronSvg, userSvg } from '$lib/svg/svgPathList'

  export let role

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
      { icon: '👏' }
    )
    goto('/signin')
  }

  let showUserNav = false
  let box
  let toggle

  function test(event) {
    if (toggle.contains(event.target)) {
      showUserNav = !showUserNav
      return
    }
    if (!box.contains(event.target)) {
      showUserNav = false
    }
  }
</script>

<nav class="bg-honey px-2 sm:px-4 py-2.5 text-slate-700">
  <div class="flex items-center justify-end mx-auto">

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div
      bind:this={toggle}
      class="flex items-center gap-1 cursor-pointer select-none mr-8"
    >
      <Svg path={userSvg} size=2.5 />
      <div class="text-sm">{role}</div>
      <Svg path={chevronSvg} size={1} />
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div
    bind:this={box}
    class="absolute right-8 bg-gray-100 mt-2 shadow rounded z-20 {showUserNav
      ? 'block'
      : 'hidden'}"
  >
      <div class="px-4 py-2">
        <div>Connected with:</div>
        <div>{$page.data.session.user.email}</div>
      </div>

      <br>
  
    <div class="bg-orange-200 hover:bg-orange-300 px-4 py-2 cursor-pointer text-center rounded" on:click={handleSignOut}>Logout</div>
  </div>
</nav>

<svelte:window on:click={test} />
