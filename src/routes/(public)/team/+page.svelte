<script>
    import Hero from '$lib/components/Public/Hero.svelte'
  
    export let data
  
    const hero = {
      src: 'img/hero/hero_team.jpg',
      alt: 'Under Construction',
      title: 'Our Team',
      subtitle: 'Dedicated and Passionate',
    }
  </script>
  
  <svelte:head>
    <title>Elevatus | Team</title>
  </svelte:head>
  
  <Hero {...hero} />
  
  <!-- Our Team -->
  <section class="container flex flex-col gap-8 my-8">
    {#each data.divisions as division}
      <h2
        class="text-4xl uppercase font-light border-b-2 border-blue-500 text-blue-500 w-fit m-auto"
      >
        {division.divisionName}
      </h2>
      <div class="sm:flex">
        {#each division.members as member}
          <div
            class="flex max-w-xs justify-between m-auto sm:flex-col items-center mb-4"
          >
            <div class="board__picture">
              <div class="border-yellow-500 border-4 rounded-full">
                <img
                  class="rounded-full border-transparent border-4 w-36 h-36 object-cover"
                  src={member.src}
                  alt="Picture of {member.firstName} {member.lastName}"
                />
              </div>
            </div>
            <div class="text-center smm:w-1/2">
              <h3 class="text-xl uppercase font-black text-blue-900 leading-5">
                {member.firstName}<br />{member.lastName}
              </h3>
              <h4 class="font-bold text-yellow-500">{member.role}</h4>
              <h5>{member.interests[0]}<br />{member.interests[1]}</h5>
            </div>
          </div>
        {/each}
      </div>
    {/each}
  </section>
  