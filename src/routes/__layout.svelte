<script>
  import '../app.css'
  import Navbar from '../lib/layout/Header/Navbar.svelte'
  import Footer from '../lib/layout/Footer/Footer.svelte'
</script>

<Navbar />
<!-- <main class="pt-[72px]"> -->
<main>
  <slot />
</main>

<Footer/>