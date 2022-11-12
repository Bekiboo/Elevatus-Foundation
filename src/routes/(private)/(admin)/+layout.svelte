<script>
  // // import '../../app.css'
  // // import Sidebar from '$lib/admin/Sidebar.svelte'
  // import { checkIfAdmin } from '$lib/api/auth'
  // import { onMount } from 'svelte'
  // import { goto } from '$app/navigation'
  // import { userStore } from '../../lib/api/auth'
  // import { supabase } from '$lib/api/supabase'

  // let isAdmin = true
  // let user
  // userStore.subscribe((value) => (user = value))

  // onMount(async () => {
  //   isAdmin = await checkIfAdmin()
  //   if (!isAdmin) goto('/')
  // })

  // const handleSignOut = async () => {
  //   try {
  //     // loading = true
  //     const { error } = await supabase.auth.signOut()
  //     if (error) throw error
  //   } catch (error) {
  //     console.error(error)
  //     // message = (error.error_description || error.message)
  //   } finally {
  //     // loading = false
  //   }
  // }
</script>

<!-- {#if isAdmin}
  {user.email}
  <button
    class="text-white bg-orange-500 hover:bg-orange-600 border-2 border-white shadow-md active:shadow-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center duration-100"
    type="submit"
    on:click={handleSignOut}>Log Out</button
  > -->
  <!-- <Sidebar /> -->

  <!-- <main class="min-h-screen ml-60 pt-4 bg-slate-900"> -->
  <slot />
  <!-- </main> -->
<!-- {/if} -->
