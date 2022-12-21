<script>
  import BlogSvg from '$lib/SVG/BlogSvg.svelte'
  import DashboardSvg from '$lib/SVG/DashboardSvg.svelte'
  import DonorsSvg from '../../../lib/SVG/DonorsSVG.svelte'
  import { adminMode } from '$lib/stores'

  export let role
</script>

<aside class="w-64" aria-label="Sidebar">
  <div class="overflow-y-auto py-4 px-3 bg-slate-800 h-screen">
    <!-- Logo -->
    <a href="/home"
      ><img
        class="h-14 mx-auto mt-2 mb-4 -translate-y-1"
        src="../img/icons/white_logo.png"
        alt="Elevatus Logo"
      /></a
    >

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
    <ul class="space-y-2 text-slate-500">
      <!-- for ADMIN -->
      {#if $adminMode}
        <li class="cursor-not-allowed">
          <a
            href="/portal/admin/dashboard"
            class="flex items-center p-2 text-base hover:text-white transition-all pointer-events-none"
          >
            <DashboardSvg />
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="/portal/admin/blog"
            class="flex items-center p-2 text-base hover:text-white transition-all"
          >
            <BlogSvg />
            <span class="flex-1 ml-3 whitespace-nowrap">Blog</span>
            <!-- <span
            class="inline-flex justify-center items-center px-2 ml-3 text-sm font-medium rounded-full bg-gray-700 text-gray-300"
            >Pro</span
          > -->
          </a>
        </li>
        <li class="cursor-not-allowed">
          <a
            href="#"
            class="flex items-center p-2 text-base hover:text-white transition-all pointer-events-none"
          >
            <DonorsSvg />
            <img src="" alt="" />
            <span class="flex-1 ml-3 whitespace-nowrap">Donors</span>
          </a>
        </li>
      {/if}

      <!-- for USERS -->
      {#if !$adminMode}
        <li class="cursor-not-allowed">
          <a
            href="/portal/admin/dashboard"
            class="flex items-center p-2 text-base hover:text-white transition-all pointer-events-none"
          >
            <DashboardSvg />
            <span class="ml-3">Dashboard</span>
          </a>
        </li>
      {/if}
    </ul>
  </div>
</aside>
