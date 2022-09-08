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

export async function load() {
  return { divisions }
}
