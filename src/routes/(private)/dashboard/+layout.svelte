<script>
  import Topbar from '$lib/components/Private/Topbar.svelte'
  import Sidebar from '$lib/components/Private/Sidebar.svelte'
</script>

<div class="flex">
  <Sidebar />
  <div class="flex flex-col w-full bg-slate-200">
    <Topbar />
    <slot />
  </div>
</div>
