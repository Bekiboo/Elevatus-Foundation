<script>
  import Topbar from './Topbar.svelte'
  import Sidebar from './Sidebar.svelte'

  export let data
</script>

<div class="fixed z-[99999999]">
  <Sidebar role={data.role} />
</div>
<div class="flex flex-col ml-56">
  <Topbar role={data.role} />
  <slot />
</div>
