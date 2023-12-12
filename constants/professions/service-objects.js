export const SO_PROFESSION= [
  {
    id: 'cafe_prestige',
    tag: 'usluzni-objekti',
    subTag: ['kafic'],
    slug: 'cafe_prestige',
    title: 'Cafe Prestige',
    bgTitle: 'Kafić',
    teaser: 'Mesto gde možete izaći i provesti se, jelo, piće, hrana, muzika',
    headerImg: 'food-costs-vienna.jpeg',
    companyExternalLink: 'https://restaurantprestige.eatbu.com/',
    proPage: false,
    promo: false,
    date: new Date('2023-10-14').getTime(),
    workshopPlace: {
      city: '1100 Beč',
      name: 'Prestige',
      address: 'Laubeplatz 4',
      number: '+43 1 9291017',
      email: 'prestige1@gmx.net',
      workingTime: {
        mon: 'Pon: 08:00 - 18:00',
        tue: 'Uto: 08:00 - 18:00',
        wed: 'Sre: 08:00 - 18:00',
        thu: 'Čet: 08:00 - 18:00',
        fri: 'Pet: 08:00 - 18:00',
        sat: 'Sub: Neradna',
        sun: 'Ned: Neradna'
      }
    },
    content: [
      {
        title: 'Cafe Prestige',
        description: `          
          <p>
            Vehicles of all brands are welcome in our master car workshop!
            
            Each vehicle is cared for, repaired and maintained according to manufacturer specifications - of course with the latest 
            diagnostic systems and - depending on the customer's wishes - either using original equipment manufacturer/original spare 
            parts or cheaper replica spare parts. Personal service, short distances and professional, cross-brand expertise characterize our 
            car repair shop throughout Austria.
          </p>`,
      }
    ],
    staff: [
      {
        name: 'Milan Petrović',
        role: 'Owner',
        img: 'pd-img.png'
      },
      {
        name: 'Petar Petrović',
        role: 'Owner',
        img: 'pd-img.png'
      }
    ],
    jobs: []
  },
]
