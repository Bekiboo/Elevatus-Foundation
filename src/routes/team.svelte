<svelte:head>
  <title>Elevatus | Team</title>
  <html lang="en-GB" />
</svelte:head>

<script>
  import Hero from "$lib/layout/Hero.svelte";
import Button from "$lib/modules/Button.svelte";
import Donations from "$lib/pages/index/Donations.svelte";
import Donate from "./donate.svelte";

  const board = [
    {
      firstName: 'Lacee',
      lastName: 'Curtis',
      role: 'Chairperson',
      picturePath: 'img/lacee_curtis.jpg',
      interests: ['Lawyer', 'Dog Lover'],
    },
    {
      firstName: 'Liam',
      lastName: 'Smith',
      role: 'Governing<br>Member',
      picturePath: 'img/liam_smith.jpg',
      interests: ['Law Intern', 'Bôgôsy'],
    },
    {
      firstName: 'Zachary',
      lastName: 'Knight',
      role: 'Governing<br>Member',
      picturePath: 'img/zachary_knight.jpg',
      interests: ['Manager', 'Lemur Magnet'],
    },
    {
      firstName: 'Nathan',
      lastName: 'Haynie',
      role: 'Governing<br>Member',
      picturePath: 'img/nathan_haynie.jpg',
      interests: [],
    },
    {
      firstName: 'Spencer',
      lastName: 'Lehr',
      role: 'Treasurer',
      picturePath: 'img/spencer_lehr.jpg',
      interests: ['Accountant', 'Professional Hugger'],
    },
  ]

  const executiveTeam = [
    {
      firstName: 'Julien',
      lastName: 'Connault',
      role: 'Program Manager',
      picturePath: 'img/julien_connault.jpg',
      interests: ['Web Designer', 'Chocolate Addict'],
    },
    {
      firstName: 'Nanouh',
      lastName: 'Connault',
      role: 'Secretary',
      picturePath: 'img/nanouh_andrianaivoarivelo.jpg',
      interests: ['Photogrammeter', 'Desperate Housewife'],
    },
    {
      firstName: 'Ricardo',
      lastName: 'Andriamihaja',
      role: 'Team Manager',
      picturePath: 'img/ricardo_andriamihaja.jpg',
      interests: ['Jack of all trades', 'Selfie Poser'],
    },
  ]

  const educationTeam = [
    {
      firstName: 'Istriah',
      lastName: 'Hefarison',
      role: 'Sewing/Physics Teacher',
      picturePath: 'img/istriah_hefarison.jpg',
      interests: ['Business Graduate', 'She Knows Better'],
    },
    {
      firstName: 'Fitahiana',
      lastName: 'Albetini',
      role: 'English Teacher',
      picturePath: 'img/fitahiana_albetini.jpg',
      interests: ['Soccer Player', 'Best Smile Award'],
    },
    {
      firstName: 'Onja',
      lastName: 'Rahanitriniavo',
      role: 'French Teacher',
      picturePath: 'img/onja_rahanitriniavo.jpg',
      interests: ['Educator', 'Smile Dispenser'],
    },
  ]

  const logisticsTeam = [
    {
      firstName: 'Solomanampy',
      lastName: 'Andriamihaja',
      role: 'Cook',
      picturePath: 'img/solomanampy_andriamihaja.jpg',
      interests: ['Father', 'Hiker Enthusiast'],
    },
    {
      firstName: 'Vero',
      lastName: 'Razainasolo',
      role: 'Cook',
      picturePath: 'img/vero_razainasolo.jpg',
      interests: ['Singer', 'Gourmet'],
    },
  ]

  // let boardContainer = document.getElementById('boardContainer')

  // function renderCard(team, title) {
  //   let boardCategory = document.createElement('div')
  //   boardCategory.classList.add('board__category')
  //   let boardTitle = document.createElement('div')
  //   boardTitle.classList.add('board__title')
  //   let h2 = document.createElement('h2')
  //   h2.innerText = `${title}`
  //   let span = document.createElement('span')
  //   boardTitle.appendChild(h2)
  //   boardTitle.appendChild(span)
  //   boardCategory.appendChild(boardTitle)
  //   let boardList = document.createElement('div')
  //   boardList.classList.add('board__list')

  //   team.forEach((member) => {
  //     let boardCard = document.createElement('div')
  //     boardCard.innerHTML = `
  //         <div class="board__card">
  //             <div class="board__picture">
  //                 <div class="board__picture__inside-border">
  //                     <img src="${member.picturePath}" alt="Picture of ${member.firstName} ${member.lastName}">
  //                 </div>
  //             </div>
  //             <div class="board__caption">
  //                   <h3>${member.firstName}<br>${member.lastName}</h3>
  //                   <h4>${member.role}</h4>
  //                   <h5>${member.interests[0]}<br>${member.interests[1]}</h5>
  //             </div>
  //         </div>
  //       `
  //     boardList.appendChild(boardCard)
  //     boardCategory.appendChild(boardList)
  //   })
  //   boardContainer.appendChild(boardCategory)
  // }

  // renderCard(board, 'The Board')
  // renderCard(executiveTeam, 'Executive Team')
  // renderCard(educationTeam, 'Education Team')
  // renderCard(logisticsTeam, 'Logistics Team')
  const hero = {
    src: 'img/hero_team.jpg',
    alt: 'Under Construction',
    title: 'Our Team',
    subtitle: 'Dedicated and Passionate'
  }
</script>

<Hero {...hero}/>

<!-- Our Team -->
<section class="h-[100vh]">
  <div class="container-section board" id="boardContainer" />
  <!-- rendered through team.js -->
</section>
