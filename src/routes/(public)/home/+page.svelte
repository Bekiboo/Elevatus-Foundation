<script>
  import Header from './Header.svelte'
  import Mission from './Mission.svelte'
  import Programs from './Programs.svelte'
  import Donations from './Donations.svelte'
  import { MetaTags } from 'svelte-meta-tags'
</script>

<svelte:head>
  <title>Elevatus | Home Page</title>
</svelte:head>

<MetaTags
  title="Fighting Child Labor in Madagascar - Elevatus"
  description="We give children in Madagascar the tools they need to avoid being trafficked and to be successful in life."
  openGraph={{
    url: 'https://www.elevatus-foundation.org/home',
    title: 'Fighting Child Labor in Madagascar - Elevatus',
    description:
      'We give children in Madagascar the tools they need to avoid being trafficked and to be successful in life.',
    images: [
      {
        url: 'https://www.elevatus-foundation.org/img/hero/group_picture_zoo.jpg',
        width: 800,
        height: 600,
        alt: 'Sponsored Children',
      },
    ],
    site_name: 'Elevatus',
  }}
/>

<Header />

<Mission />

<Programs />

<Donations />
