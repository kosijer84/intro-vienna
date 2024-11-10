export const CARS_PROFESSION= [
  {
    id: 'grujic',
    tag: 'automobili',
    subTag: ['mehanicar', 'elektricar', 'vulkanizer'],
    slug: 'grujic',
    title: 'Auto service Grujić',
    bgTitle: 'Servis',
    teaser: 'Već 15 godina smo vaš pouzdan i kompetentan partner za sve što se tiče automobila.',
    headerImg: 'cars-general.jpeg',
    companyExternalLink: 'https://www.auto-service.co.at/',
    proPage: false,
    promo: false,
    date: new Date('2023-10-10').getTime(),
    workshopPlace: {
      district: '1170',
      city: 'Wien',
      name: 'Auto service Grujić',
      address: 'Geblergasse 20',
      number: '+43 1 9907920',
      email: 'info@auto-service.co.at',
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
        title: 'Auto service Grujić',
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
    staff: [],
    jobs: []
  },
  {
    id: 'vd_automotive',
    tag: 'automobili',
    subTag: ['mehanicar', 'elektricar', 'farbar'],
    slug: 'vd_automotive',
    title: 'VD Automehaničar',
    bgTitle: 'Servis',
    teaser: 'Zajedno imamo preko 30 godina iskustva. Imajte koristi od toga!',
    headerImg: 'cars-general.jpeg',
    companyExternalLink: 'https://www.vdautomotive.at/Startseite/',
    proPage: true,
    promo: true,
    date: new Date('2023-10-11').getTime(),
    workshopPlace: {
      district: '1100',
      city: 'Wien',
      name: 'VD Automehaničar',
      address: 'Alxingergasse 72',
      number: '01/604 48 44',
      email: 'info@vdautomotive.at',
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
        title: 'O nama',
        description: `          
          <p>
            Zajedno imamo preko 30 godina iskustva. Imajte koristi od toga!
            Ne šaljemo kupce kući - uvek imamo spremno rešenje. Vozila se i dalje popravljaju u našoj radionici. Imamo na umu interese naših kupaca i uvek nudimo najisplativiju popravku.
            <br>
            Uživamo u svom poslu. Svaki kupac može da očekuje od nas neograničenu pažnju, ljubaznost, poštovanje i visok nivo usluge svakog dana.
            <br>
            <b>Moto: Šefovi lično brinu o usluzi i kvalitetu.</b>
          </p>`,
      },
      {
        title: 'Website',
        description: `   
          <a href="https://www.vdautomotive.at/" target="_blank" class="text-decoration-none"><b>VD Automotive</b></a>`,
      },
      {
        title: 'Naše usluge',
        description: `          
          <p>Radno vreme mehaničara: 120,00 €</p>
          <p>Radni sati za krovopokrivača/slikara: 192,00 €</p>
          <p>Poravnanje šasije: 100,00 €</p>
          <p>Servis klima uređaja sa dezinfekcijom: 119,00 €</p>
          <p>Servis klima uređaja bez dezinfekcije: 99,00 €</p>
          <p>Popravka kamenčića po kamenčiću: 36,00 €</p>
          <p>Zimski pregled: 29,00 €</p>
          <p>Proljetni pregled: 29,00 €</p>
          <p>Pregled prije putovanja: 29,00 €</p>
          <p>Čitanje grešaka: 30,00 €</p>
          <p>Dnevna parking karta po danu: 5,00 €</p>
          `,
      }
    ],
    staff: [
      {
        name: 'Vojkan Novakovic',
        role: 'Vlasnik',
        img: ''
      },
      {
        name: 'Dominik Krstanovic',
        role: 'Vlasnik',
        img: ''
      },
    ],
    jobs: [
      // {
      //   id: 1,
      //   date: new Date('2023-10-19').getTime(),
      //   title: 'Automehaničar',
      //   requirements: `
      //     <h4 class="fw-bold">Uslovi</h4>
      //     <ul class="list-group list-group-flush"><li class="list-group-item">Popravke i teretnih vozila</li><li class="list-group-item">Preventivno i redovno održavanje vozila prema planu pregleda</li><li class="list-group-item">Regularno vrši pregled vozila (motor, mehaničke / električne komponente, itd.)</li><li class="list-group-item">Popravlja vozila, menja slomljene ili nefunkcionalne delove, rešava postojaće probleme</li><li class="list-group-item">Obavezan je da vrši sortiranje i čuvanje mašinskih delova, koji mogu imati upotrebnu vrednost</li><li class="list-group-item">Daje predlog za isključivanje vozila iz saobraćaja i upotrebe, ako sumnja na ispravnost vozila</li><li class="list-group-item">Odgovoran je za ispravnost vozila, vrsi nadzor vozila po dolasku u servis</li><li class="list-group-item">Stara se o blagovremenom naručivanju rezervnih delova</li><li class="list-group-item">Obavezan je održavati opremu i alate u dobrom i urednom stanju</li><li class="list-group-item">Obavljanje ostalih poslova po nalogu poslodavca</li></ul>`,
      //   yourProfile: `
      //     <h4 class="fw-bold">Vaš profil</h4>
      //     <ul class="list-group list-group-flush"><li class="list-group-item">Važeća vozačka dozvola B kategorije,<br></li><li class="list-group-item">Radno iskustvo u trajanju od najmanje 1 godine<br></li><li class="list-group-item">Poželjno iskustvo na različitim tipovima vozila<br></li></ul>`
      // }
    ]
  },
  {
    id: 'bozo',
    tag: 'automobili',
    subTag: ['mehanicar', 'elektricar', 'vulkanizer', 'limar'],
    slug: 'bozo',
    title: 'KFZ Bozo',
    bgTitle: 'Servis',
    teaser: 'Pružićemo vam dokaze da kvalitet ne mora uvek biti skup. Posle prvog posete radionici, verujemo da ćete postati naš redovan klijent.',
    headerImg: 'cars-general.jpeg',
    companyExternalLink: 'http://www.kfz-bozo.at/',
    proPage: true,
    promo: false,
    date: new Date('2023-10-12').getTime(),
    workshopPlace: {
      district: '1100',
      city: 'Wien',
      name: 'KFZ Bozo',
      address: 'Wielandplatz 11',
      number: '+43 1 7983733',
      email: 'office@kfz-bozo.at',
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
        title: 'KFZ Bozo',
        description: `          
          <p>
Sva vozila svih brendova su dobrodošla u našu master auto radionicu! Svako vozilo se održava, popravlja i servisira prema specifikacijama proizvođača - naravno, uz korišćenje najnovijih dijagnostičkih sistema i - prema želji kupca - korišćenjem originalnih rezervnih delova proizvođača ili jeftinijih zamenskih delova. Lična usluga, kratki putni pravci i stručnost prepoznatljiva širom Austrije karakterišu našu auto radionicu.
          </p>`,
      }
    ],
    staff: [],
    jobs: []
  },
  {
    id: 'autoreifencenter',
    tag: 'automobili',
    subTag: ['vulkanizer'],
    slug: 'autoreifencenter',
    title: 'Autoreifencenter Željko Veselinović',
    bgTitle: 'Servis',
    teaser: 'Profesionalna odmah dostupna usluga bez prethodne najave.',
    headerImg: 'cars-general.jpeg',
    companyExternalLink: 'http://autoreifencenter.biz/',
    proPage: false,
    promo: false,
    date: new Date('2023-10-13').getTime(),
    workshopPlace: {
      district: '1020',
      city: 'Wien',
      name: 'Autoreifencenter Željko Veselinović',
      address: 'Böcklinstraße 96',
      number: '+43 1 7280927',
      email: 'office@autoreifencenter.biz',
      workingTime: {
        mon: 'Pon: 08:00 - 18:00',
        tue: 'Uto: 08:00 - 18:00',
        wed: 'Sre: 08:00 - 18:00',
        thu: 'Čet: 08:00 - 18:00',
        fri: 'Pet: 08:00 - 18:00',
        sat: 'Sub: 09:00 - 13:00 (u sezoni)',
        sun: 'Ned: Neradna'
      }
    },
    content: [
      {
        title: 'Autoreifencenter Željko Veselinović',
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
    staff: [],
    jobs: []
  }
]
