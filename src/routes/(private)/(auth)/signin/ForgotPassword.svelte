<script>
  import toast from 'svelte-french-toast'
  import Modal from '$lib/components/Modal.svelte'
  import { loadingState } from '$lib/stores'
  import { enhance, applyAction } from '$app/forms'

  let showModal = true
  function close() {
    showModal = false
  }
  let errors
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => (showModal = true)}
  class="text-sm font-medium text-primary-600 hover:underline cursor-pointer"
>
  Forgot password?
</div>

{#if showModal}
  <Modal on:close={close}>
    <div class="flex justify-between">
      <h2
        class="text-lg md:text-xl font-bold leading-tight tracking-tight text-gray-900 mb-4"
      >
        Forgot your password?
      </h2>
      <div class="cursor-pointer" on:click={close}>&#10060;</div>
    </div>
    <p>
      Don't fret! Just type in your email and we will send you a link to reset
      your password!
    </p>

    <form class="mt-4"
      method="POST"
      action="?/resetPassword"
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
          // errors = []
          toast.success('Check your email', {
            duration: 5000,
            style: 'margin-top: 4rem',
          })
          showModal = false
          update()
        }
      }}
      novalidate
    >
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900"
        >Your email</label
      >
      <input
        type="email"
        name="email"
        id="email-for-reset-password"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder="name@company.com"
        required=""
      />
      {#if errors?.email}
        <div class="text-red-500">{errors?.email[0]}</div>
      {/if}

      <button
        class="bg-orange-500 cursor-pointer mt-4 text-white w-fit mx-auto rounded-xl border-2 drop-shadow-md
    active:drop-shadow-none duration-100 py-2 px-4
    hover:bg-orange-400"
      >
        Reset Password
      </button>
    </form>
  </Modal>
{/if}
