<script>
  import { onMount } from 'svelte'
  import NavLinks from '$lib/modules/Header/NavLinks.svelte'
  import Button from '$lib/modules/Button.svelte'
  import Hamburger from '$lib/modules/Header/Hamburger.svelte'
  import SideNav from '$lib/modules/Header/SideNav.svelte'
  import Auth from '$lib/auth/Auth.svelte'
  import UserMobile from './UserMobile.svelte'

  export let menuOpened = false
  export let userOpened = false
  export let opaque = false
  
  let transparent = true

  const navbarOffset = 120
  let yOffset

  onMount(() => {
    if (!opaque) {
      yOffset > 120 ? (transparent = false) : (transparent = true)
      window.onscroll = () => {
        yOffset = window.pageYOffset
        yOffset > navbarOffset ? (transparent = false) : (transparent = true)
      }
    }
  })

  let links = [
    { title: 'Home', url: '/' },
    { title: 'Team', url: '/team' },
    { title: 'Blog', url: '/blog' },
  ]

  function closeNav() {
    menuOpened = false
    userOpened = false
  }

  const navBarHeight = 16
</script>

<!-- Mobile Buttons -->
<div
  class="fixed flex gap-2 right-2 z-50 h-{navBarHeight} items-center sm:hidden"
>
  <!-- Donate Button Mobile -->
  <div class="z-50 mr-2" on:click={closeNav}>
    <a href="/donate"><Button><p class="py-1 px-2">Donate</p></Button></a>
  </div>

  <!-- User Button Mobile -->
  <UserMobile
    {menuOpened}
    {userOpened}
    on:click={() => {
      if (userOpened) {
        closeNav()
      } else if (menuOpened) {
        closeNav()
        userOpened = true
      } else {
        userOpened = true
      }
    }}
  />

  <!-- Menu -->
  <button
    class="rounded-xl w-12 h-12 cursor-pointer scale-150 flex items-center overflow-hidden first-letter duration-100
  {menuOpened || userOpened ? 'text-orange-500' : 'text-white'}"
    on:click={() => {
      menuOpened || userOpened ? closeNav() : (menuOpened = true)
    }}
    aria-expanded={menuOpened}
    aria-label="Toggle Menu"><Hamburger {menuOpened} {userOpened} /></button
  >
</div>

<header class="z-30 w-full bg-grey fixed">
  <!-- SideNav Mask -->
  <div
    class="fixed top-0 left-0 w-[100vw] h-[100vh] z-10 duration-100
      {menuOpened || userOpened ? 'block bg-black/50' : 'hidden'}"
    aria-hidden="true"
    on:click={closeNav}
  />

  <div
    class="flex pl-2 h-{navBarHeight} justify-between sm:justify-around backdrop-blur duration-300
    {transparent ? 'bg-transparent backdrop-blur-none' : 'bg-honey/90'}"
  >
    <!-- Desktop Logo -->
    <a href="/" class="hidden sm:block"
      ><img
        class="h-14 mt-2 -translate-y-1"
        src="img/icons/white_logo.png"
        alt="Elevatus Logo"
      /></a
    >

    <!-- Mobile Logo -->
    <a href="/" class="sm:hidden flex items-center"
      ><img
        class="h-12 mt-2 ml-2 -translate-y-1 z-50"
        src="img/icons/Phoenix-white-stroke-thin.png"
        alt="Elevatus Logo"
        on:click={closeNav}
      />
      <p
        class="text-white font-semibold text-sm -ml-1 mt-2 text-center line leading-4"
      >
        Elevatus <br /> Foundation
      </p>
    </a>

    <div class="flex items-center gap-2 mr-12">
      <nav class="navbar-center flex">
        <ul
          class="smm:hidden flex gap-4 sm:items-center p-0
                 ease-in-out duration-100 transition-transform"
        >
          {#each links as link}
            <NavLinks {link} on:click={() => (menuOpened = false)} />
          {/each}
        </ul>
      </nav>

      <!-- Donate Button Desktop -->
      <div class="smm:hidden ml-4">
        <a href="/donate"><Button><p class="py-1 px-2">Donate</p></Button></a>
      </div>

      <!-- User Button Desktop -->
      <button
        class="z-50 w-8 h-8 rounded-xl smm:hidden ml-2  hover:fill-orange-500 duration-100"
        on:click={() => {
          userOpened ? closeNav() : userOpened = true
        }}
      >
        <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg">
          <path
            class="fill-white"
            d="M 500 250 C 500 388 388 500 250 500 C 110 500 0 388 0 250 C 0 110 110 0 250 0 C 388 0 500 110 500 250 Z M 250 73 C 200 73 150 116 150 170 C 150 222 200 265 250 265 C 300 265 344 222 344 170 C 344 116 300 73 250 73 Z M 96 330 C 96 358 123 380 156 380 L 342 380 C 375 380 400 358 400 330 C 400 305 375 283 342 283 L 156 283 C 123 283 96 305 96 330 Z"
          />
        </svg>
      </button>
    </div>
  </div>
</header>

<nav class="z-40 flex fixed">
  <div class="sm:hidden">
    <SideNav {menuOpened} {userOpened} name="menu">
      <slot>
        <ul class="smm:pl-8 mt-8">
          {#each links as link}
            <NavLinks {link} on:click={() => (menuOpened = false)} />
          {/each}
        </ul>
      </slot>
    </SideNav>
  </div>
  <SideNav {menuOpened} {userOpened} name="user">
    <slot>
      <Auth />
    </slot>
  </SideNav>
</nav>

<style>
</style>
