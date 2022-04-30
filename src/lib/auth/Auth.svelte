<script>
  import Signin from './Signin.svelte'
  import Signup from './Signup.svelte'
  import { fly } from 'svelte/transition'
  import { user } from '$lib/stores/auth'
  import { supabase } from './supabase'

  let loggedIn = false
  user.subscribe((logged) => (logged ? (loggedIn = true) : (loggedIn = false)))

  let signin = true
  let signupMessage = ''
  let signinMessage = ''

  const handleSignOut = async () => {
    try {
      // loading = true
      const { error } = await supabase.auth.signOut()
      if (error) throw error
    } catch (error) {
      console.error(error)
      // message = (error.error_description || error.message)
    } finally {
      // loading = false
    }
  }
</script>

{#if loggedIn}
  <div class="w-[66vw] sm:w-80 mx-auto">
    <button
      class="text-white bg-orange-500 hover:bg-orange-600 border-2 border-white shadow-md active:shadow-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center duration-100"
      type="submit"
      on:click={handleSignOut}>Log Out</button
    >
  </div>
{:else}
  <div class="w-[66vw] sm:w-80 mx-auto">
    <!-- Toggle Switch -->
    <div
      class="flex text-gray-500 mb-5 text-sm h-8 items-center w-56 mx-auto rounded-lg cursor-pointer
    outline outline-2 outline-gray-300"
    >
      <div
        class="bg-orange-500 absolute w-28 h-8 -z-10 duration-150 rounded-lg ease-in-out
      {signin ? '' : 'translate-x-28'}"
      />

      <div
        class="w-28 text-center h-full grid items-center"
        class:text-white={signin}
        on:click={() => (signin = true)}
      >
        Log In
      </div>

      <div
        class="w-28 text-center h-full grid items-center"
        class:text-white={!signin}
        on:click={() => (signin = false)}
      >
        Sign Up
      </div>
    </div>

    {#if signin}
      <div in:fly={{ x: -50, duration: 150 }}>
        <p class="h-min text-red-500">{signinMessage}</p>
        <Signin bind:message={signinMessage} />
      </div>
    {/if}

    {#if !signin}
      <div in:fly={{ x: 50, duration: 150 }}>
        <p class="h-min text-red-500">{signupMessage}</p>
        <Signup bind:message={signupMessage} />
      </div>
    {/if}
  </div>
{/if}
