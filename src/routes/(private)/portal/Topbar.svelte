<script>
  import { page } from '$app/stores'
  import { supabaseClient } from '$lib/db/supabase'
  import { goto } from '$app/navigation'
  import toast from 'svelte-french-toast'
  import UserSvg from '$lib/svg/icons/UserSvg.svelte'
  import DownArrowSvg from '$lib/SVG/symbols/DownArrowSvg.svelte'

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
  function openUserNav() {
    showUserNav = !showUserNav
  }

  function isClickOutsideElement(clickEvent, element) {
  // Get the parent node of the element
  const parent = element.parentNode;

  // Check if the parent node contains the element
  const isInside = parent.contains(element);

  console.log(isInside);

  // Return the opposite of isInside, since we want to know if the click occurred outside of the element
  return !isInside;
}

  let box
  function test(event) {
    isClickOutsideElement(event, box)
  }
</script>

<nav class="bg-honey px-2 sm:px-4 py-2.5 text-slate-700">
  <div class="container flex flex-wrap items-center justify-between mx-auto">
    <button on:click={handleSignOut}>Logout</button>

    <h1>{$page.data.session.user.email}</h1>

    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <div on:click={openUserNav} class="flex items-center gap-1 cursor-pointer select-none">
      <UserSvg size="2" />
      <div class="text-sm">{role}</div>
      <DownArrowSvg size={1} />
    </div>
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <div bind:this={box} on:click={test}
    class="absolute right-0 bg-black mt-2 shadow rounded max-h-60 overflow-y-scroll {showUserNav
      ? 'block'
      : 'hidden'}"
  >Prout</div>
</nav>
