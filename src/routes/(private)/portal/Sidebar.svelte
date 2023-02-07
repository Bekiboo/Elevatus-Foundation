<script>
  import Svg from '$lib/svg/Svg.svelte'
  import { adminMode } from '$lib/stores'
  import { blogSvg, chevronSvg, childrenSvg, dashboardSvg, donorsSvg } from '$lib/svg/svgPathList'

  export let role
  let menuItem = 'dashboard'

  function selectMenuItem(name) {
    menuItem == name ? (menuItem = '') : (menuItem = name)
  }
</script>

<aside aria-label="Sidebar">
  <div class="overflow-y-auto w-56 py-4 px-3 bg-slate-800 h-screen">
    <!-- Logo -->
    <a href="/home"
      ><img
        class="h-10 mx-auto mt-2 mb-4 -translate-y-1"
        src="../../../img/icons/white_logo.png"
        alt="Elevatus Logo"
      />
    </a>

    <!-- Toggle Admin Mode -->
    {#if role === 'admin'}
      <label class="flex items-center p-2 relative mr-5 mb-8 cursor-pointer">
        <input
          bind:checked={$adminMode}
          type="checkbox"
          value=""
          class="sr-only peer"
        />
        <div
          class="w-11 h-6 rounded-full peer bg-slate-500 peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-2.5 after:left-2.5 after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all border-slate-600 peer-checked:bg-orange-500"
        />
        <span
          class="ml-3 text-sm font-medium text-slate-500 peer-checked:text-white"
          >Admin Mode</span
        >
      </label>
    {/if}

    <!-- Links -->
    <ul class="space-y-2 text-slate-500 select-none">
      <!-- for ADMIN -->
      {#if $adminMode && role === 'admin'}
        <li class="cursor-not-allowed">
          <a
            href="/portal/admin/dashboard"
            class="flex items-center p-2 text-base hover:text-white transition-all pointer-events-none"
          >
            <Svg path={dashboardSvg} />
            <span class="ml-3">Dashboard</span>
          </a>
        </li>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          class="flex flex-col mx-2 pt-4"
        >
          <div class="flex justify-between hover:text-white duration-100 cursor-pointer"
          class:white-text={menuItem == 'blog'}
          on:click={() => selectMenuItem('blog')}>
            <div class="flex">
              <Svg path={blogSvg} />
              <div class="w-min mx-2 uppercase font-medium">Blog</div>
            </div>
            <Svg path={chevronSvg} rotation={menuItem == 'blog' ? 180 : 0} />
          </div>
          <ul style="display: {menuItem == 'blog' ? 'block' : 'none'}">
            <li class="mt-2">
              <a
                href="/portal/admin/blog"
                class="flex items-center ml-2 text-base hover:text-white transition-all"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Manage</span>
              </a>
            </li>
            <li class="mt-2">
              <a
                href="/portal/admin/blog/create-or-update"
                class="flex items-center ml-2 text-base hover:text-white transition-all"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Create New Post</span>
              </a>
            </li>
          </ul>
        </li>



        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          class="flex flex-col mx-2 pt-4"
        >
          <div class="flex justify-between hover:text-white duration-100 cursor-pointer"
          class:white-text={menuItem == 'donors'}
          on:click={() => selectMenuItem('donors')}>
            <div class="flex">
              <Svg path={donorsSvg} />
              <div class="w-min mx-2 uppercase font-medium">Donors</div>
            </div>
         
         
         <Svg path={chevronSvg} rotation={menuItem == 'donors' ? 180 : 0} />
          </div>
          <ul style="display: {menuItem == 'donors' ? 'block' : 'none'}">
            <li class="mt-2">
              <a
                href="/portal/admin/donors"
                class="flex items-center ml-2 text-base hover:text-white transition-all"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Manage</span>
              </a>
            </li>
          </ul>
        </li>


        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <li
          class="flex flex-col mx-2 pt-4"
        >
          <div class="flex justify-between hover:text-white duration-100 cursor-pointer"
          class:white-text={menuItem == 'children'}
          on:click={() => selectMenuItem('children')}>
            <div class="flex">
              <Svg path={childrenSvg}/>
              <div class="w-min mx-2 uppercase font-medium">Children</div>
            </div>
            <Svg path={chevronSvg} rotation={menuItem == 'children' ? 180 : 0} />
          </div>
          <ul style="display: {menuItem == 'children' ? 'block' : 'none'}">
            <li class="mt-2">
              <a
                href="/portal/admin/children"
                class="flex items-center ml-2 text-base hover:text-white transition-all"
              >
                <span class="flex-1 ml-3 whitespace-nowrap">Manage</span>
              </a>
            </li>
          </ul>
        </li>
      {/if}

      <!-- for USERS -->
      {#if !$adminMode}
        <li class="cursor-not-allowed">
          <a
            href="/portal/admin/dashboard"
            class="flex items-center p-2 text-base hover:text-white transition-all pointer-events-none"
          >
          <Svg path={dashboardSvg} />
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
      {/if}
    </ul>
  </div>
</aside>

<style>
  .white-text {
    color: white;
  }
</style>