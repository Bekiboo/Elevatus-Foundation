<script>
  // import InputErrorMessage from '$lib/InputErrorMessage.svelte';
  // import Alert from '$lib/Alert.svelte';
  import { enhance, applyAction } from '$app/forms'
  import { loadingState } from '$lib/stores'
  import toast from 'svelte-french-toast'

  export let data
  export let form
  let errors
</script>

<a href="/" class="flex items-center mb-6 text-2xl font-semibold text-gray-900">
  <img
    class="h-24 mt-2 ml-2 -translate-y-1"
    src="../img/icons/white_logo.png"
    alt="Elevatus Logo"
  />
</a>
<div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
  <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
    <h1
      class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl"
    >
      Update Password
    </h1>

    <form
      method="POST"
      class="space-y-4 md:space-y-6"
      use:enhance={() => {
        loadingState.set(true)
        return async ({ result, update }) => {
          loadingState.set(false)

          if (result.type === 'invalid') {
            errors = result.data.errors

            toast.error(result.data.message, {
              duration: 5000,
              style: 'margin-top: 4rem',
            })
            return await applyAction(result)
          }
          errors = []
          toast.success('Welcome to the dashboard!', {
            duration: 5000,
            style: 'margin-top: 4rem',
          })
          update()
        }
      }}
      novalidate
    >
      <div>
        <label for="password" class="block mb-2 text-sm font-medium text-gray-900"
          >Password</label
        >
        <input
          type="password"
          name="password"
          id="password"
		  value={form?.password ?? ''}
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          placeholder="name@company.com"
          required=""
        />
        {#if errors?.password}
          <div class="text-red-500">{errors?.password[0]}</div>
        {/if}
      </div>
      <div>
        <label
          for="passwordConfirm"
          class="block mb-2 text-sm font-medium text-gray-900">passwordConfirm</label
        >
        <input
          type="password"
          name="passwordConfirm"
          id="passwordConfirm"
          placeholder="••••••••"
          class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
          required=""
        />
        {#if errors?.passwordConfirm}
          <div class="text-red-500">{errors?.passwordConfirm[0]}</div>
        {/if}
      </div>
      <div class="flex items-end justify-between">
      </div>

      <button
        type="submit"
        class="text-white bg-orange-500 hover:bg-orange-400 border-2 border-white shadow-md active:shadow-none font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center duration-100"
        >Update Password</button
      >
    </form>
  </div>
</div>

<div
  class="w-11/12 p-12 px-6 py-10 rounded-lg sm:w-8/12 md:w-6/12 lg:w-5/12 2xl:w-3/12 sm:px-10 sm:py-6"
>
  <!-- {#if form?.message !== undefined}
		<Alert class="{form?.success ? 'alert-info' : 'alert-error'} mb-10">{form?.message}</Alert>
	{/if} -->
  <h2 class="font-semibold text-4xl mb-4">Update Password</h2>
  <p class="font-medium mb-4">
    Hi {data.session?.user.email}, Enter your new password below and confirm it
  </p>
  <form class="" method="post" use:enhance>
    <div class="form-control">
      <label for="password" class="label">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        value={form?.password ?? ''}
        class="input input-bordered"
      />
    </div>
    <!-- {#if form?.errors?.password}
			<InputErrorMessage>{form?.errors?.password}</InputErrorMessage>
		{/if} -->
    <div class="form-control">
      <label for="passwordConfirm" class="label">Confirm Password</label>
      <input
        id="passwordConfirm"
        name="passwordConfirm"
        type="password"
        value=""
        class="input input-bordered"
      />
    </div>
    {#if form?.errors?.passwordConfirm}
      <!-- <InputErrorMessage>{form?.errors?.passwordConfirm}</InputErrorMessage> -->
    {/if}
    <div class="form-control mt-6">
      <button class="btn btn-primary no-animation">Update Password</button>
    </div>
  </form>
</div>
