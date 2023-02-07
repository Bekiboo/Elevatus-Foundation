<script>
  // make sure the supabase instance is initialized on the client
  import { invalidate } from '$app/navigation'
  import { onMount } from 'svelte'
  import { supabaseClient } from '$lib/db/supabase'

  onMount(() => {
    const {
      data: { subscription },
    } = supabaseClient.auth.onAuthStateChange(async (event, session) => {
      // console.log(event);
      // console.log(session);
      if (event == 'PASSWORD_RECOVERY') {
        const newPassword = prompt(
          'What would you like your new password to be?'
        )
        const { data, error } = await supabaseClient.auth.update({
          password: newPassword,
        })

        if (data) alert('Password updated successfully!')
        if (error) alert('There was an error updating your password.')
      }
      invalidate('supabase:auth')
    })

    return () => {
      subscription.unsubscribe()
    }
  })
</script>

<slot />
