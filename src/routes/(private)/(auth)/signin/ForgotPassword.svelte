<script>
  import Modal from '$lib/components/Modal.svelte'

  let showModal = true
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  on:click={() => (showModal = true)}
  class="text-sm font-medium text-primary-600 hover:underline cursor-pointer"
>
  Forgot password?
</div>

{#if showModal}
  <Modal on:close={() => (showModal = false)}>
    <h2 slot="header">Forgot your password?</h2>
    <p>
      Don't fret! Just type in your email and we will send you a code to reset
      your password!
    </p>

    <div>
      <label for="emailRecovery" class="block mb-2 text-sm font-medium text-gray-900"
        >Your email</label
      >
      <input
        type="email"
        name="emailRecovery"
        id="emailRecovery"
        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
        placeholder="name@company.com"
        required=""
      />
      <!-- {#if errors?.email}
        <div class="text-red-500">{errors?.email[0]}</div>
      {/if} -->
    </div>

    <div
      class="bg-orange-500 cursor-pointer text-white w-fit mx-auto rounded-xl border-2 drop-shadow-md
  active:drop-shadow-none duration-100 py-2 px-4
  hover:bg-orange-400"
    >
      Reset Password
    </div>
  </Modal>
{/if}
