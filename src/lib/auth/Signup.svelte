<script>
  import { supabase } from '$lib/auth/supabase'

  let loading = false
  let username
  let email
  let password
  let confirmPassword
  let absolute = false
  export let message

  const handleLogin = async () => {
    if (password !== confirmPassword) {
      message = 'Your passwords must match.'
      return
    }
    if (
      // !username ||
      !email ||
      !password
    ) {
      message = 'All fields are required.'
      return
    }
    try {
      loading = true
      const { user, error } = await supabase.auth.signUp(
        {
          email,
          password,
        },
        { data: { user_name: 'test user name', avatar_url: 'mon avatar' } }
      )
      if (error) throw error
      alert('Success')
    } catch (error) {
      console.error(error)
      alert(error.error_description || error.message)
    } finally {
      loading = false
    }
  }
</script>

<form class:absolute on:submit|preventDefault={handleLogin}>
  <!-- <div class="mb-4">
    <label class="block mb-1 text-sm font-medium text-gray-900" for="username"
      >Username</label
    >
    <input
      class="bg-gray-50 smm:w-60 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
      name="username"
      type="text"
      placeholder="Your Username"
      bind:value={username}
    />
  </div> -->
  <div class="mb-4">
    <label class="block mb-1 text-sm font-medium text-gray-900" for="email"
      >Email</label
    >
    <input
      class="bg-gray-50 smm:w-60 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 "
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
      class="bg-gray-50 smm:w-60 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      name="password"
      type="password"
      placeholder="Your Password"
      bind:value={password}
    />
  </div>
  <div class="mb-4">
    <label class="block mb-1 text-sm font-medium text-gray-900" for="password"
      >Confirm Password</label
    >
    <input
      class="bg-gray-50 smm:w-60 w-80 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
      name="password"
      type="password"
      placeholder="Your Password"
      bind:value={confirmPassword}
    />
  </div>

  <button
    class="text-white bg-orange-500 hover:bg-orange-600 border-2 border-white shadow-md active:shadow-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center duration-100"
    type="submit">Sign Up</button
  >
</form>

<!-- Rajouter Password validation pour aider l'user à créer un mot de passe sécurisé -->
