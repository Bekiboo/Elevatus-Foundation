<script>
  import { page } from '$app/stores'
  $: currentPage = $page.url.pathname
  export let link
</script>

<li>
  <a
    class="truc text-orange-500 font-medium sm:text-white uppercase"
    class:active={currentPage === link.url}
    href={link.url}
    aria-current={currentPage == link.url}
    on:click>{link.title}</a
  >
</li>

<style>
@media only screen and (min-width: 640px) {
  a::before {
    content: '';
    display: block;
    height: 2px;
    background: white;
    left: 0;
    right: 0;
    transform: scale(0, 1);
    transition: transform ease-in-out 100ms;
  }
  a:hover::before {
    transform: scale(1, 1);
  }
  .active::before {
    transform: scale(1, 1);
  }
}
</style>
