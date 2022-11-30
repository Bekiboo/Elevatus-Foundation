<script>
  import Hero from '$lib/components/Public/Hero.svelte'
  import { fade } from 'svelte/transition'
  import PaymentButton from './PaymentButton.svelte'

  const hero = {
    src: 'img/hero/donate.jpg',
    alt: 'Photo by Katt Yukawa onUnsplash',
    title: 'Donate',
    subtitle: 'Contribute to saving children in Madagascar from trafficking',
  }

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
    oneTime50: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BP6QD3CLJKRY8',
      buttonText: 'Donate $50',
    },
    oneTime100: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BP6QD3CLJKRY8',
      buttonText: 'Donate $100',
    },
    oneTime200: {
      url: 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=BP6QD3CLJKRY8',
      buttonText: 'Donate $200',
    },
    sponsorOther: {
      url: 'https://www.paypal.com/donate/?hosted_button_id=A7L2N5TC4QV5E',
      buttonText: 'Customize your sponsor',
    },
    oneTimeOther: {
      url: 'https://www.paypal.com/donate/?hosted_button_id=A7L2N5TC4QV5E',
      buttonText: 'Customize your donation',
    }
  }

  let monthly = true
  let sponsorPlan = plans.sponsor25
  let oneTimePlan = plans.oneTime50

</script>

<svelte:head>
  <title>Elevatus | Donate</title>
</svelte:head>

<Hero {...hero} />

<div class="container flex gap-5 flex-col-reverse md:flex-row my-12">

  <div class="basis-1/2 flex flex-col">
    <h2 class="text-3xl md:text-5xl font-medium mb-2">GIVE THEM THEIR CHILDHOOD BACK</h2> 
    <p class="text-sm max-w-[40ch]">
      By donating today, you ensure a brighter future to the children we 
      support in Madagascar.
    </p>
    <div class="mt-10">
      <p>
        Thank you for your ongoing support
        to Elevatus. When you sponsor a child, you provide him or her with:
      </p> 
      <ul class="space-y-1 list-disc list-inside my-4 ml-4">
        <li>Two healthy healthy meals every school day</li>
        <li>School tuition and school supplies</li>
        <li>Weekly tutoring classes</li>
        <li>Sewing classes</li>
        <li>Extracurricular activities</li>
        <li>And much more !</li>
      </ul>
      <p>
        Larger donations and one-time donations are typically used for special
        projects like school renovation, or to support children who haven't 
        found a sponsor yet.
      </p>
    </div>
  </div>

  <div class="basis-1/2 flex flex-col">

    <div class="flex text-gray-500 mb-5 text-lg h-16 items-center w-64 mx-auto 
                rounded-lg cursor-pointer outline outline-2 outline-gray-300">
      <div class="bg-orange-500 absolute w-32 h-16 -z-10 duration-150 rounded-lg 
                  ease-in-out {monthly ? '' : 'translate-x-32'}" />
      <div
        class="w-32 text-center h-full grid items-center"
        class:text-white={monthly}
        on:click={() => (monthly = true)}>
        Monthly Sponsor
      </div>

      <div
        class="w-32 text-center h-full grid items-center"
        class:text-white={!monthly}
        on:click={() => (monthly = false)}>
        One Time Donation
      </div>
    </div>

    {#if monthly}
      <div class="flex flex-col w-60 mx-auto" in:fade={{duration: 150}}>
        <p class="text-center mb-4">Choose an amount to give each month</p>

        <div class="flex mb-4">
          <div class="flex items-center h-5">
              <input bind:group={sponsorPlan} value={plans.sponsor25} checked id="helper-radio-1" name="radio" aria-describedby="helper-radio-text" type="radio"
              class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
          </div>
          <div class="ml-2 text-sm">
              <label for="helper-radio-1" class="font-medium text-lg text-gray-900 cursor-pointer">$25/Month</label>
              <p id="helper-radio-text" class="text-xs font-normal text-gray-500">Sponsor One Child</p>
          </div>
        </div>

        <div class="flex mb-4">
          <div class="flex items-center h-5">
              <input bind:group={sponsorPlan} value={plans.sponsor50} id="helper-radio-2" name="radio" aria-describedby="helper-radio-text" type="radio"
              class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
          </div>
          <div class="ml-2 text-sm">
              <label for="helper-radio-2" class="font-medium text-lg text-gray-900 cursor-pointer">$50/Month</label>
              <p id="helper-radio-text" class="text-xs font-normal text-gray-500">Sponsor Two Children</p>
          </div>
        </div>
        
        <div class="flex mb-4">
          <div class="flex items-center h-5">
              <input bind:group={sponsorPlan} value={plans.sponsor100} id="helper-radio-3" name="radio" aria-describedby="helper-radio-text" type="radio"
              class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
          </div>
          <div class="ml-2 text-sm">
              <label for="helper-radio-3" class="font-medium text-lg text-gray-900 cursor-pointer">$100/Month</label>
              <p id="helper-radio-text" class="text-xs font-normal text-gray-500">Sponsor Four Children</p>
          </div>
        </div>
        
        <div class="flex mb-4">
          <div class="flex items-center h-5">
              <input bind:group={sponsorPlan} value={plans.sponsorOther} id="helper-radio-4" name="radio" aria-describedby="helper-radio-text" type="radio"
              class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
          </div>
          <div class="ml-2 text-sm">
              <label for="helper-radio-4" class="font-medium text-lg text-gray-900 cursor-pointer">Other Amount</label>
              <p id="helper-radio-text" class="text-xs font-normal text-gray-500">Choose how much you want to donate each month</p>
          </div>
        </div>
      </div>
    {/if}

    {#if !monthly}
    <div class="flex flex-col w-60 mx-auto" in:fade={{duration: 150}}>
      <p class="text-center mb-4">Choose an amount to donate today</p>

      <div class="flex mb-4">
        <div class="flex items-center h-5">
            <input bind:group={oneTimePlan} value={plans.oneTime50} checked id="helper-radio-1" name="radio" aria-describedby="helper-radio-text" type="radio"
            class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
        </div>
        <div class="ml-2 text-sm">
            <label for="helper-radio-1" class="font-medium text-lg text-gray-900 cursor-pointer">$50 Donation</label>
            <p id="helper-radio-text" class="text-xs font-normal text-gray-500">Equivalent of 50 meals</p>
        </div>
      </div>

      <div class="flex mb-4">
        <div class="flex items-center h-5">
            <input bind:group={oneTimePlan} value={plans.oneTime100} id="helper-radio-2" name="radio" aria-describedby="helper-radio-text" type="radio"
            class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
        </div>
        <div class="ml-2 text-sm">
            <label for="helper-radio-2" class="font-medium text-lg text-gray-900 cursor-pointer">$100 Donation</label>
            <p id="helper-radio-text" class="text-xs font-normal text-gray-500">One month salary for a teacher</p>
        </div>
      </div>
      
      <div class="flex mb-4">
        <div class="flex items-center h-5">
            <input bind:group={oneTimePlan} value={plans.oneTime200} id="helper-radio-3" name="radio" aria-describedby="helper-radio-text" type="radio"
            class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
        </div>
        <div class="ml-2 text-sm">
            <label for="helper-radio-3" class="font-medium text-lg text-gray-900 cursor-pointer">$200 Donation</label>
            <p id="helper-radio-text" class="text-xs font-normal text-gray-500">Equivalent to the budget for a school trip</p>
        </div>
      </div>
      
      <div class="flex mb-4">
        <div class="flex items-center h-5">
            <input bind:group={oneTimePlan} value={plans.oneTimeOther} id="helper-radio-4" name="radio" aria-describedby="helper-radio-text" type="radio"
            class="w-4 h-4 cursor-pointer text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2">
        </div>
        <div class="ml-2 text-sm">
            <label for="helper-radio-4" class="font-medium text-lg text-gray-900 cursor-pointer">Other Amount</label>
            <p id="helper-radio-text" class="text-xs font-normal text-gray-500">Custom Donation</p>
        </div>
      </div>
    </div>
    {/if}

    <div class="flex flex-col mx-auto">
      {#if monthly}
        <PaymentButton url={sponsorPlan?.url} text={sponsorPlan?.buttonText} />
      {/if}
      {#if !monthly}
        <PaymentButton url={oneTimePlan?.url} text={oneTimePlan?.buttonText} />
      {/if}
      <span class="text-xs text-center">Clicking on this button will redirect you <br> to a secured PayPal checkout page</span>
    </div>


  </div>
</div>



<!-- Unsubscribe -->
<!-- https://www.paypal.com/cgi-bin/webscr?cmd=_subscr-find&alias=3CRDDM2YCKNEN -->
