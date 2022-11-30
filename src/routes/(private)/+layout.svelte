<script>
  // import { page } from '$app/stores'

  // make sure the supabase instance is initialized on the client
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import { supabaseClient } from '$lib/db/supabase'

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(() => {
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<!-- 
{#if !$page.data.session}
<h1>I am not logged in</h1>
{:else}
<h1>{JSON.stringify($page.data.session)}</h1>
{/if} -->

<slot />
