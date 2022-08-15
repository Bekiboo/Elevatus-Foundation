<!-- <script context="module">
  export const load = ({stuff}) => {
    console.log('stuff: ',stuff);
    return {}
  }
</script> -->
<script>
  import { supabase } from '$lib/auth/supabase'
  import '../app.css'
  import Navbar from '$lib/modules/Header/Navbar.svelte'
  import Footer from '$lib/modules/Footer/Footer.svelte'
  import { user, isAdmin } from '$lib/stores/auth'
  import { page } from '$app/stores'
  import { checkIfAdmin } from '$lib/auth/isAuth'
  import PageTransition from '$lib/modules/PageTransition.svelte'

  $: currentPage = $page.url.pathname

  user.set(supabase.auth.user())

  supabase.auth.onAuthStateChange( async (_, session) => {
    user.set(session?.user)
    if (session?.user) {
      console.log('session.user IN: ', session.user)
    } else {
      console.log('session.user OUT: ', session.user)
    }
    isAdmin.set(await checkIfAdmin())
  })


</script>

<Navbar />
<!-- <main class="pt-[72px]"> -->
  <PageTransition refresh={currentPage}>
    <main>
      <slot />
    </main>
  </PageTransition>

<Footer />

<style>
  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #fab900;
    border-radius: 1rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #e6a801;
  }
</style>
