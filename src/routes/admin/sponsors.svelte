<script>
  import { loadProfiles, profiles } from '$lib/stores/auth'

  loadProfiles()
  let users
  profiles.subscribe((curr) => (users = curr))
  console.log(users)
</script>

{#each users as user}
  <p class="text-white">{user.email}</p>
{/each}
