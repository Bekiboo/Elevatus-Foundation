<script>
  import { page } from '$app/stores'
  $: currentPage = $page.url.pathname
  export let link
  const {url, title} = link
</script>

  <li class="smm:pt-8 ">
    <a
      class="smm:text-3xl text-orange-500 font-medium sm:text-white uppercase underline-offset-4
      before:bg-white"
      class:active={currentPage === url}
      class:smm:underline={currentPage === url}
      href={url}
      aria-current={currentPage == url}
      on:click>{title}</a
    >
  </li>

<style>
  @media only screen and (min-width: 640px) {
    a::before {
      content: '';
      display: block;
      height: 2px;
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
