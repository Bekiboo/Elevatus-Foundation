<script>
  import { onMount } from 'svelte'
  import NavLinks from '$lib/components/Header/NavLinks.svelte'
  import Button from '$lib/components/Button.svelte'
  import Hamburger from '$lib/components/Header/Hamburger.svelte'
  import SideNav from '$lib/components/Header/SideNav.svelte'
  // import Auth from '$lib/auth/Auth.svelte'
  // import UserMobile from './UserMobile.svelte'

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
    { title: 'Home', url: '/home' },
    { title: 'Team', url: '/team' },
    { title: 'Blog', url: '/blog' },
    { title: 'Contact', url: '/contact' },
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
  <div class="z-50 mr-2" on:click={closeNav} on:keydown={{closeNav}}>
    <a href="/donate"><Button><p class="py-1 px-2">Donate</p></Button></a>
  </div>

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
    <a href="/home" class="hidden sm:block"
      ><img
        class="h-14 mt-2 -translate-y-1"
        src="../img/icons/white_logo.png"
        alt="Elevatus Logo"
      /></a
    >

    <!-- Mobile Logo -->
    <a href="/home" class="sm:hidden flex items-center"
      ><img
        class="h-12 mt-2 ml-2 -translate-y-1 z-50"
        src="../img/icons/Phoenix-white-stroke-thin.png"
        alt="Elevatus Logo"
        on:click={closeNav}
        on:keydown={closeNav}
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
</nav>