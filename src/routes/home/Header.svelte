<script>
  import Button from '$lib/components/Button.svelte'

  let innerWidth
</script>

<svelte:window bind:innerWidth />
<div
  class="flex flex-col justify-end items-center relative w-full text-white overflow-hidden"
>
  <!-- Desktop Hero -->
  {#if innerWidth > 640}
    <div
      class="texture smm:hidden h-[80vh] sm:min-h-[400px] w-full absolute z-10"
    />
    <video
      class="smm:hidden object-cover h-[80vh] sm:min-h-[400px] w-full brightness-50"
      loop
      muted
      autoplay
    >
      <!-- A CORRIGER, VIDEO NE CHARGE PLUS EN GRAND ECRAN, innerWidth a une valeur de 0 au chargement -->
      <source src="img/Elevatus_loop_large.mp4" type="video/mp4" />
      <div class="texture top-0 left-0 w-[100vw] h-[100vh]" />
    </video>
  {/if}

  <!-- Mobile Hero -->
  <img
    class="object-cover h-[80vh] w-full brightness-[35%] sm:hidden"
    src="img/child_redhood_breaking_rocks.jpg"
    alt="Malagasy child wearing a red hood breaking rocks"
  />
  <!-- Caption -->
  <div class="mx-auto flex flex-col justify-end absolute container z-20">
    <div class="flex flex-col mb-16">
      <h4 class="font-thin text-lg mb-1 sm:text-2xl">
        Fighting Child Labor in Madagascar
      </h4>
      <h1
        class="font-extrabold text-3xl max-w-md text-left uppercase leading-7 sm:text-5xl sm:max-w-2xl"
      >
        Because they deserve their <em
          class="text-black/0"
          style="font-style: unset; -webkit-text-stroke: 1px white;"
          >childhood</em
        > back
      </h1>
      <div class="max-w-fit mt-8">
        <a href="/donate">
          <Button>
            <p class="py-2 px-4 sm:py-4 sm:px:8 sm:text-xl sm:font-medium">
              Sponsor a child today
            </p>
          </Button>
        </a>
      </div>
    </div>
  </div>
</div>

<style>
  .texture {
    background: url('/img/misc/diagonal.png');
  }
</style>
