<script>
  import toast from 'svelte-french-toast'
  import Hero from '$lib/components/Hero.svelte'
  // import { invalidateAll } from '$app/navigation'

  const hero = {
    src: 'img/hero/contact.jpg',
    alt: 'Package with "You\'ve got mail" written on it',
    title: 'Contact Us',
    subtitle: 'Leave a message, and we will try to answer within a week',
  }

  export let form
  let errors

  async function fetchData(data, that) {
    return new Promise((resolve, reject) => {
      const response = fetch(that.action, {
        method: 'POST',
        body: data,
      })
      response.then(async (res) => {
        const result = await res.json()
        if (result.type === 'invalid') {
          console.log(result)
          errors = result.data.errors
          reject()
        }
        if (result.type === 'success') {
          errors = []
          that.reset()
          resolve()
        }
      })
    })
  }

  async function handleSubmit(event) {
    const data = new FormData(this)
    toast.promise(fetchData(data, this), {
      loading: 'Sending...',
      success: "Message sent successfully!\nWe'll get back to you soon",
      error: 'Something went wrong',
    })
  }
</script>

<svelte:head>
  <title>Elevatus | Conctact Us</title>
</svelte:head>

<Hero {...hero} />

<form
  method="POST"
  class="container max-w-2xl py-16"
  on:submit|preventDefault={handleSubmit}
>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name="first_name"
        id="first_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
        placeholder=" "
      />
      <label
        for="first_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
        >First name</label
      >
      {#if errors?.first_name}
        <div class="text-red-500">{errors?.first_name[0]}</div>
      {/if}
    </div>
    <div class="relative z-0 mb-6 w-full group">
      <input
        type="text"
        name="last_name"
        id="last_name"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
        placeholder=" "
      />
      <label
        for="last_name"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
        >Last name</label
      >
      {#if errors?.last_name}
        <div class="text-red-500">{errors?.last_name[0]}</div>
      {/if}
    </div>
  </div>
  <div class="relative z-0 mb-6 w-full group">
    <input
      type="company"
      name="company"
      id="company"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
      placeholder=" "
    />
    <label
      for="company"
      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
      >Company (optional)</label
    >
    {#if errors?.company}
      <div class="text-red-500">{errors?.company[0]}</div>
    {/if}
  </div>
  <div class="relative z-0 mb-6 w-full group">
    <input
      type="email"
      name="email"
      id="email"
      class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
      placeholder=" "
    />
    <label
      for="email"
      class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-7 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-7"
      >Email address</label
    >
    {#if errors?.email}
      <div class="text-red-500">{errors?.email[0]}</div>
    {/if}
  </div>

  <label for="message" class="block mb-2 text-sm font-medium text-gray-900"
    >Your message</label
  >
  <textarea
    type="message"
    name="message"
    id="message"
    rows="4"
    class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
    placeholder="Leave a comment..."
  />

  {#if errors?.message}
    <div class="text-red-500">{errors?.message[0]}</div>
  {/if}

  <button
    class="text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 mt-4 py-2.5 text-center"
    >Submit</button
  >
</form>
