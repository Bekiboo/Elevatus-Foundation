<script context="module">
// TODO find a way to check if admin in backend
</script>

<script>
  import '../../app.css'
  import Sidebar from '$lib/admin/Sidebar.svelte'
  import { checkIfAdmin } from '$lib/auth/isAuth'
  import { onMount } from 'svelte'
import { goto } from '$app/navigation';
  let isAdmin = false

  onMount(async () => {
    isAdmin = await checkIfAdmin()
    if(!isAdmin) goto('/')
  })
</script>

{#if isAdmin}
  <Sidebar />

  <main class="min-h-screen ml-60 pt-4 bg-slate-900">
    <slot />
  </main>
{/if}
