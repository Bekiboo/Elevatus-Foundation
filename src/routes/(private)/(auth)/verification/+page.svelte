<script>
  import { regisrating } from '$lib/stores'
  import { onDestroy } from 'svelte'

  export let data

  // onDestroy(() => {
  //   regisrating.set({ status: false, email: '' })
  // })
</script>

<div class="text-white flex flex-col text-center">
  <h2 class=" text-4xl font-bold">Verify your email</h2>

  <p class="mt-4  text-xl">
    You will need to verify your email to complete registration
  </p>

  <img class="mx-auto my-12" src="img/SVG/mailbox.svg" width="150px" alt="" />

  <p class="max-w-[64ch] opacity-80 font-light">
    An email has been sent to <b class="font-semibold">{data?.email}</b> with a link
    to verify your account. If you have not received the email after a few minutes,
    please check your spam folder
  </p>

  <div class="flex gap-5 justify-center">
    <a href="/signin" class="mt-12"
      ><div
        class="bg-emerald-500 w-fit mx-auto rounded-xl border-2 drop-shadow-md
    active:drop-shadow-none duration-100 py-2 px-4
    hover:bg-emerald-400"
      >
        Back to Sign In
      </div></a
    >
    <a href="/contact" class="mt-12"
      ><div
        class="bg-orange-500 w-fit mx-auto rounded-xl border-2 drop-shadow-md
    active:drop-shadow-none duration-100 py-2 px-4
    hover:bg-orange-400"
      >
        Contact Support
      </div></a
    >
  </div>
</div>
