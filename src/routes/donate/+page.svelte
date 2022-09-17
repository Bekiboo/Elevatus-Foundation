<script>
  import Hero from '$lib/components/Hero.svelte'
  import PaymentButton from './PaymentButton.svelte'

  const hero = {
    src: 'img/hero/donate.jpg',
    alt: 'Photo by Katt Yukawa onUnsplash',
    title: 'Donate',
    subtitle: 'Under Construction',
  }

  let selectedPlan

  const plans = {
    sponsor25: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=KAC88B2QR7UEL',
      buttonText: 'Sponsor for $25/month',
    },
    sponsor50: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=J6NP7D9JU64CN',
      buttonText: 'Sponsor for $50/month',
    },
    sponsor100: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BP6QD3CLJKRY8',
      buttonText: 'Sponsor for $100/month',
    },
    donate50: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BP6QD3CLJKRY8',
      buttonText: 'Donate $50',
    },
    donate100: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BP6QD3CLJKRY8',
      buttonText: 'Donate $100',
    },
    donate200: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BP6QD3CLJKRY8',
      buttonText: 'Donate $200',
    },
    sponsorOther: {
      url: '',
      buttonText: 'Choose how much you sponsor',
    },
    donateOther: {
      url: '',
      buttonText: 'Choose how much you donate',
    },
  }
</script>

<svelte:head>
  <title>Elevatus | Donate</title>
  <html lang="en-GB" />
</svelte:head>

<Hero {...hero} />

<button class="px-4 py-2 text-white bg-orange-500 rounded font-bold" 
  on:click={() => {selectedPlan = plans.sponsor25}}>$25
</button>
<button class="px-4 py-2 text-white bg-orange-500 rounded font-bold" 
  on:click={() => {selectedPlan = plans.sponsor50}}>$50
</button>
<button class="px-4 py-2 text-white bg-orange-500 rounded font-bold" 
  on:click={() => {selectedPlan = plans.sponsor100}}>$100
</button>
<button class="px-4 py-2 text-white bg-orange-500 rounded font-bold" 
  on:click={() => {selectedPlan = plans.sponsorOther}}>Other
</button>

<button class="px-4 py-2 text-white bg-orange-500 rounded font-bold" 
  on:click={() => {selectedPlan = plans.donate50}}>$50
</button>
<button class="px-4 py-2 text-white bg-orange-500 rounded font-bold" 
  on:click={() => {selectedPlan = plans.donate100}}>$100
</button>
<button class="px-4 py-2 text-white bg-orange-500 rounded font-bold" 
  on:click={() => {selectedPlan = plans.donate200}}>$200
</button>
<button class="px-4 py-2 text-white bg-orange-500 rounded font-bold" 
  on:click={() => {selectedPlan = plans.donateOther}}>Other
</button>

{#if selectedPlan}
  <PaymentButton url={selectedPlan?.url} text={selectedPlan?.buttonText} />
{/if}

<!-- Unsubscribe -->
<!-- https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=3CRDDM2YCKNEN -->
