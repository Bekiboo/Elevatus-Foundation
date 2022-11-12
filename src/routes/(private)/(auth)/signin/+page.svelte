<script>
  // import { goto } from '$app/navigation'
  // import { supabase } from '$lib/api/supabase'

  import { enhance } from '$app/forms'

  // let loading = false
  // let email
  // let password
  // let absolute = false
  // export let message
</script>


  <a
    href="/"
    class="flex items-center mb-6 text-2xl font-semibold text-gray-900"
  >
    <img
      class="h-24 mt-2 ml-2 -translate-y-1 z-50"
      src="../img/icons/white_logo.png"
      alt="Elevatus Logo"
    />
  </a>
  <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
      <h1
        class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
      >
        Sign in to your account
      </h1>

      <form
        method="post"
        class="space-y-4 md:space-y-6"
        action="?/signIn"
        use:enhance
      >
        <div>
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900"
            >Your email</label
          >
          <input
            type="email"
            name="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            placeholder="name@company.com"
            required=""
          />
        </div>
        <div>
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-900">Password</label
          >
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
            required=""
          />
        </div>
        <div class="flex items-end justify-between">
          <!-- <div class="flex items-start">
              <div class="flex items-center h-5">
                <input
                  id="remember"
                  aria-describedby="remember"
                  type="checkbox"
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                  required=""
                />
              </div>
              <div class="ml-3 text-sm">
                <label for="remember" class="text-gray-500">Remember me</label>
              </div>
            </div> -->
          <!-- <a
              href="#"
              class="text-sm font-medium text-primary-600 hover:underline"
              >Forgot password?</a
            > -->
        </div>
        <button
          type="submit"
          class="text-white bg-orange-500 hover:bg-orange-400 border-2 border-white shadow-md active:shadow-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center duration-100"
          >Sign in</button
        >
        <p class="text-sm font-light text-gray-500">
          Don’t have an account yet? <a
            href="/signup"
            class="font-medium text-primary-600 hover:underline">Sign up</a
          >
        </p>
      </form>
    </div>
  </div>

<!-- 
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
</form> -->
