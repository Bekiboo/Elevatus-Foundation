<script context="module">
  import { user } from '$lib/stores/auth'
  let currentUser

  export async function load() {
    user.subscribe((user) => (currentUser = user))
    if (currentUser == false) {
      return { status: 302, redirect: '/' }
    }
    return {}
  }
</script>

<script>
  import '../../app.css'
  import Sidebar from '$lib/admin/Sidebar.svelte'

</script>

{#if currentUser}
  <Sidebar />

  <main class="min-h-screen ml-60 pt-4 bg-slate-900">
    <slot />
  </main>
{/if}
