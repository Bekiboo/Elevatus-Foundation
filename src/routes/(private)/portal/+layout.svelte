<script>
  import Topbar from './Topbar.svelte'
  import Sidebar from './Sidebar.svelte'

  export let data
</script>

<div class="flex">
  <Sidebar role={data.role} />
  <div class="flex flex-col w-full bg-slate-200">
    <Topbar />
    <slot />
  </div>
</div>