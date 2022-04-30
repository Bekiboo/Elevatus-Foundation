<script>
  import { goto } from '$app/navigation'
  import { supabase } from '$lib/auth/supabase'

  let loading = false
  let email
  let password
  let absolute = false
  export let message

  const handleSignIn = async () => {
    try {
      loading = true
      const { user, error } = await supabase.auth.signIn({
        email,
        password,
      })
      if (error) throw error
    } catch (error) {
      console.error(error)
      message = error.error_description || error.message
    } finally {
      loading = false
      console.log(supabase.auth.user())
      goto('/')
    }
  }
</script>

<form class:absolute on:submit|preventDefault={handleSignIn}>
  <div class="mb-4">
    <label class="block mb-1 text-sm font-medium text-gray-900" for="email"
      >Email</label
    >
    <input
      class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
      name="email"
      type="email"
      placeholder="Your Email"
      bind:value={email}
    />
  </div>
  <div class="mb-4">
    <label class="block mb-1 text-sm font-medium text-gray-900" for="password"
      >Password</label
    >
    <input
      class="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      name="password"
      type="password"
      placeholder="Your Password"
      bind:value={password}
    />
  </div>

  <button
    class="text-white bg-orange-500 hover:bg-orange-600 border-2 border-white shadow-md active:shadow-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center duration-100"
    type="submit">Log In</button
  >
</form>
