<script>
    import Hero from '$lib/components/Hero.svelte'
  
    const hero = {
      src: 'img/hero/under_construction.jpg',
      alt: 'Under Construction',
      title: 'Conctact Us',
      subtitle: 'Under Construction',
    }
  </script>
  
  <svelte:head>
    <title>Elevatus | Conctact Us</title>
    <html lang="en-GB" />
  </svelte:head>
  
  <Hero {...hero} />
  
 
  
  <form class="container max-w-2xl py-16">
    <div class="grid md:grid-cols-2 md:gap-6">
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_first_name"
          id="floating_first_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_first_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >First name</label
        >
      </div>
      <div class="relative z-0 mb-6 w-full group">
        <input
          type="text"
          name="floating_last_name"
          id="floating_last_name"
          class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
          placeholder=" "
          required
        />
        <label
          for="floating_last_name"
          class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >Last name</label
        >
      </div>
    </div>
    <div class="relative z-0 mb-6 w-full group">
      <input
        type="email"
        name="floating_email"
        id="floating_email"
        class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-orange-500 peer"
        placeholder=" "
        required
      />
      <label
        for="floating_email"
        class="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Email address</label
      >
    </div>
  
    <label for="message" class="block mb-2 text-sm font-medium text-gray-900"
      >Your message</label
    >
    <textarea
      id="message"
      rows="4"
      class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-orange-500 focus:border-orange-500"
      placeholder="Leave a comment..."
    />
  
    <button
      type="submit"
      class="text-white bg-orange-500 hover:bg-orange-400 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 mt-4 py-2.5 text-center"
      >Submit</button
    >
  </form>
  