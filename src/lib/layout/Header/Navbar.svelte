<script>
  import NavLinks from './NavLinks.svelte'
  import Button from '../../modules/Button.svelte'
  import SideNav from './SideNav.svelte'
  import { onMount } from 'svelte'

  export let menuOpened = false
  export let userOpened = false

  const navbarOffset = 120
  let yOffset
  let transparent = true

  onMount(() => {
    yOffset > 120 ? (transparent = false) : (transparent = true)
    window.onscroll = () => {
      yOffset = window.pageYOffset
      yOffset > navbarOffset ? (transparent = false) : (transparent = true)
    }
  })

  let links = [
    { title: 'Home', url: '/' },
    { title: 'Team', url: '/team' },
    { title: 'Programs', url: '/programs' },
  ]

  function closeNav() {
    menuOpened = false
    userOpened = false
  }
</script>

<header class="z-40 w-full bg-grey fixed">
  <!-- SideNav Mask -->
  <div
    class="fixed top-0 left-0 w-[100vw] h-[100vh] z-10 duration-100
      {menuOpened || userOpened ? 'block bg-black/50' : 'hidden'}"
    aria-hidden="true"
    on:click={closeNav}
  />

  <div
    class="flex pl-2 h-[72px] justify-between sm:justify-around backdrop-blur duration-300
    {transparent ? 'bg-transparent backdrop-blur-none' : 'bg-honey/90'}"
  >
    <!-- Desktop Logo -->
    <a href="/" class="hidden sm:block"
      ><img
        class="h-16 mt-2 -translate-y-1"
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

    <div class="flex items-center gap-2">
      <!-- Donate Button Mobile -->
      <div class="sm:hidden z-50">
        <a href="/donate"><Button><p class="py-1 px-2">Donate</p></Button></a>
      </div>

      <!-- User Button -->
      <button
        class="z-50 w-10 h-10 p-2 sm:hidden rounded-xl 
        {transparent ? 'bg-transparent' : 'bg-yellow-500'}"
        aria-controls="user-navigation"
        aria-expanded="false"
        on:click={() => {
          userOpened = true
        }}
      >
        <img src="img/icons/user.png" alt="user" /><span class="sr-only"
          >User</span
        ></button
      >

      <!-- Menu Button -->
      <button
        class="z-50 w-10 h-10 p-2 sm:hidden rounded-xl 
        {transparent ? 'bg-transparent duration-100' : 'bg-yellow-500'}"
        aria-controls="menu-navigation"
        aria-expanded="false"
        on:click={() => {
          menuOpened = true
        }}
      >
        <img src="img/icons/menu.png" alt="menu" />
        <span class="sr-only">Menu</span></button
      >

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

<nav class="z-50 flex fixed">
  <SideNav {menuOpened} {userOpened} name="menu" on:click={closeNav}>
    <slot>
      {#each links as link}
        <NavLinks {link} on:click={() => (menuOpened = false)} />
      {/each}
    </slot>
  </SideNav>
  <SideNav {menuOpened} {userOpened} name="user" on:click={closeNav}>
    <slot>
      <li class="text-orange-500">Under Construction</li>
    </slot>
  </SideNav>
</nav>

<style>
</style>
