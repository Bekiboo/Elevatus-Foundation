<script>
  import Program from './Program.svelte'

  const programs = [
    {
      src: 'img/program/school_supplies.jpg',
      alt: '',
      title: 'School Supplies',
      subtitle: 'Under Construction',
      body: [
        'Each year, Elevatus pays for the tuition and the school supplies of every sponsored children and distributes notebooks to all children.',
        'Throughout the year, we also make sure that their school supplies are updated and replenished',
      ],
    },
    {
      src: 'img/program/food_distribution.jpg',
      alt: '',
      title: 'Food Distribution',
      subtitle: 'Under Construction',
      body: [
        'A hungry child is a child who will have a difficult time focusing at school.',
        'In 2020, Elevatus distributed 21,600 meals at the Ambohidranomanga Junior School, preventing dozens of children from going malnourished.',
        'With your help, we hope to double this number in 2022.',
      ],
    },
    {
      src: 'img/program/sewing_classes.jpg',
      alt: '',
      title: 'Sewing Classes',
      subtitle: 'Under Construction',
      body: [
        'At Elevatus we firmly believe that children need to explore different crafts, especially when living in rural areas.',
        'Every child at the school is able to take a sewing class, throughout the year with Felana, who is also their math tutor.',
        'As Elevatus grows and gains new sponsors, we will introduce additional trade classes, such as carpentry, cooking, and others!',
      ],
    },
    {
      src: 'img/program/tutoring_classes.jpg',
      alt: '',
      title: 'Tutoring Classes',
      subtitle: 'Under Construction',
      body: [
        'Every Wednesday afternoon, students have the option to attend tutoring classes for 3 hours.',
        'Despite tutoring classes not being mandatory, almost every child from the junior school attends weekly. A few students from the nearby high school join as well!',
        'We need your help to increase the number of teachers, and even to build new classrooms to hold all those children.',
      ],
    },
    {
      src: 'img/program/school_renovations.jpg',
      alt: '',
      title: 'School Renovation',
      subtitle: 'Under Construction',
      body: [
        'Since 2016, Elevatus has completed extension projects (adding of new classrooms and libaries) at 4 schools, and has entirely renovated a 100-year old junior school.',
        'Elevatus still takes care of these historical buildings, but we would like to continue improving and expanding to host even more children.',
      ],
    },
    {
      src: 'img/program/activities.jpg',
      alt: '',
      title: 'Activities',
      subtitle: 'Under Construction',
      body: [
        'At least once a month, Elevatus organizes a special activity for the sponsored children. These activities range from a trip to the zoo to a dance class to a volleyball tournament.',
        'It’s an amazing experience for these students who don’t typically have the opportunity for such activities in their villages.',
      ],
    },
  ]
</script>

{#each programs as program, index}
  <Program {...program} {index} />
{/each}
