<script>
  import Hero from '$lib/modules/Hero.svelte'

  const divisions = [
    {
      divisionName: 'The Board',
      members: [
        {
          firstName: 'Lacee',
          lastName: 'Curtis',
          role: 'Chairperson',
          src: 'img/lacee_curtis.jpg',
          interests: ['Lawyer', 'Dog Lover'],
        },
        {
          firstName: 'Liam',
          lastName: 'Smith',
          role: 'Governing Member',
          src: 'img/liam_smith.jpg',
          interests: ['Law Intern', 'Bôgôsy'],
        },
        {
          firstName: 'Zachary',
          lastName: 'Knight',
          role: 'Governing Member',
          src: 'img/zachary_knight.jpg',
          interests: ['Manager', 'Lemur Magnet'],
        },
        {
          firstName: 'Nathan',
          lastName: 'Haynie',
          role: 'Governing Member',
          src: 'img/nathan_haynie.jpg',
          interests: [],
        },
        {
          firstName: 'Spencer',
          lastName: 'Lehr',
          role: 'Treasurer',
          src: 'img/spencer_lehr.jpg',
          interests: ['Accountant', 'Professional Hugger'],
        },
      ],
    },
    {
      divisionName: 'Executive team',
      members: [
        {
          firstName: 'Julien',
          lastName: 'Connault',
          role: 'Program Manager',
          src: 'img/julien_connault.jpg',
          interests: ['Web Designer', 'Chocolate Addict'],
        },
        {
          firstName: 'Nanouh',
          lastName: 'Connault',
          role: 'Secretary',
          src: 'img/nanouh_andrianaivoarivelo.jpg',
          interests: ['Photogrammeter', 'Desperate Housewife'],
        },
        {
          firstName: 'Ricardo',
          lastName: 'Andriamihaja',
          role: 'Team Manager',
          src: 'img/ricardo_andriamihaja.jpg',
          interests: ['Jack of all trades', 'Selfie Poser'],
        },
      ],
    },
    {
      divisionName: 'Education Team',
      members: [
        {
          firstName: 'Istriah',
          lastName: 'Hefarison',
          role: 'Sewing/Physics Teacher',
          src: 'img/istriah_hefarison.jpg',
          interests: ['Business Graduate', 'She Knows Better'],
        },
        {
          firstName: 'Fitahiana',
          lastName: 'Albetini',
          role: 'English Teacher',
          src: 'img/fitahiana_albetini.jpg',
          interests: ['Soccer Player', 'Best Smile Award'],
        },
        {
          firstName: 'Onja',
          lastName: 'Rahanitriniavo',
          role: 'French Teacher',
          src: 'img/onja_rahanitriniavo.jpg',
          interests: ['Educator', 'Smile Dispenser'],
        },
      ],
    },
    {
      divisionName: 'Logistics Team',
      members: [
        {
          firstName: 'Solomanampy',
          lastName: 'Andriamihaja',
          role: 'Cook',
          src: 'img/solomanampy_andriamihaja.jpg',
          interests: ['Father', 'Hiker Enthusiast'],
        },
        {
          firstName: 'Vero',
          lastName: 'Razainasolo',
          role: 'Cook',
          src: 'img/vero_razainasolo.jpg',
          interests: ['Singer', 'Gourmet'],
        },
      ],
    },
  ]

  const hero = {
    src: 'img/hero_team.jpg',
    alt: 'Under Construction',
    title: 'Our Team',
    subtitle: 'Dedicated and Passionate',
  }
</script>

<svelte:head>
  <title>Elevatus | Team</title>
  <html lang="en-GB" />
</svelte:head>

<Hero {...hero} />

<!-- Our Team -->
<section class="container flex flex-col gap-8 my-8">
  {#each divisions as division}
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
