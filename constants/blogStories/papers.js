export const PAPERS_STORY = [
  {
    id: 'kredit_u_banci',
    tag: 'papiri',
    slug: 'kredit_u_banci',
    title: 'Apliciranje za kredit u banci',
    bgTitle: 'Erste',
    teaser: 'Uslovi za keš kredit u banci, pravo za kredit, kako aplicirati, koliko se čeka.',
    headerImg: 'bank-loan.jpeg',
    relatedStory: 'otvaranje_racuna_u_banci',
    content: [
      {
        title: 'Naravno da je procedura kod mene bila čudna :)',
        description: `          
          <p>
            Prebacivanje automobila u Austriju je bilo malo komplikovanije nego što sam očekivao pa je odluka pala da 
            uzmem kredit i kupim novi automobil dok stari ne prodam.
          </p>
          <p>
            Procedura krajnje jednostavna, kontaktirao sam svog savetnika, minimalno 3 plate preko banke, upitnik koji mora da se popuni.
          </p>`,
      },
    ],
    date: new Date('2023-10-13').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
  {
    id: 'otvaranje_racuna_u_banci',
    tag: 'papiri',
    slug: 'otvaranje_racuna_u_banci',
    title: 'Otvaranje računa u banci',
    bgTitle: 'Erste',
    teaser: 'Za otvaranje računa u banci meni su tražili Meltezettel i Ugovor od kompanije u kojoj radim.',
    headerImg: 'bank-general.jpeg',
    relatedStory: 'kredit_u_banci',
    content: [
      {
        title: 'Prijava - mesto prebivališta',
        description: `          
          <p>
            Zakazivanje termina online ili preko mejla i nema cekanja u redu, bilo koja ekspozitura.
          </p>
          <p>
            Popunjavanje nekog upitnika i odlazak kod savetnika koji je vec odradio svu papirologiju i vas cekad samo da potpisete.
          </p>`,
      },
    ],
    date: new Date('2023-10-12').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
  {
    id: 'mesto_prebivalista',
    tag: 'papiri',
    slug: 'mesto_prebivalista',
    title: 'Rešavanje mesta prebivališta',
    bgTitle: 'Meldezettel',
    teaser: 'Prva stvar nakon pronađenog stana - mesto prijave',
    headerImg: 'papers-meldezettel.jpeg',
    relatedStory: '',
    content: [
      {
        title: 'Prijava - mesto prebivališta',
        description: `          
          <p>
            Zakzaivanje online termina ukoliko ne želite da čekate ili ako žurite i niste stigli da zakažete pojavite se tamo i uzmete broj.
          </p>
          <p>
            Čeka se nekih par sati ali sva papirologija se uredno obavi u roku od pola h.
          </p>`,
      },
    ],
    date: new Date('2023-09-25').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
  {
    id: 'e_card',
    tag: 'papiri',
    slug: 'e_card',
    title: 'Zdravstvena knjižica',
    bgTitle: 'E card',
    teaser: 'Nakon uspešne prijave mesta prebivališta sledeći korak je E-card',
    headerImg: 'e-card.jpg',
    relatedStory: '',
    content: [
      {
        title: 'Kako do E-card-a?',
        description: `          
          <p>
            Online zakazivanje, brate termin.. sve se odradjuje i policijskoj stanici. 
          </p>
          <p>
            Dok sama kartica ne dodje na adresu prebivalista, koristite papir sto dobijete u policijskoj stanici.
          </p>`,
      },
    ],
    date: new Date('2023-10-11').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
  {
    id: 'e_card_porodica',
    tag: 'papiri',
    slug: 'e_card_porodica',
    title: 'Zdravstvene knjižice za porodicu',
    bgTitle: 'E card',
    teaser: 'Nakon relativno uspešne prijave za E-card sledi podnošenje zahteva za porodicu, malo komlikovaniji deo.',
    headerImg: 'e-card-family.png',
    relatedStory: '',
    content: [
      {
        title: 'E-card - porodica',
        description: `          
          <p>
            Malo komplikovanija procedura u odnosu na mene. Odlazak u drugu zgradu da bi se popunili zahevi za celu porodicu
          </p>
          <p>
            Za decu se najmanje cekaju kartice.
          </p>`,
      },
    ],
    date: new Date('2023-10-12').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
]
