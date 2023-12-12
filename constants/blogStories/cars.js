export const CARS_STORY = [
  {
    id: 'voznja_bez_vinjete',
    tag: 'automobili',
    slug: 'voznja_bez_vinjete',
    title: 'Vožnja bez vinjete',
    bgTitle: 'Vinjeta',
    teaser: 'Vožnja kroz Austriju bez kupljene vinjete, kolika je kazna',
    headerImg: 'vignette-ticket.webp',
    relatedStory: 'nove_cene_vinjete',
    content: [
      {
        title: 'Kazna',
        description: `     
          <p>
            Koja je kazna ako me u Austriji uhvate bez vinjete? <br> Platićete kaznu od <b>120 eur</b> ako ne možete da dokažete da imate važeću vinjetu u Austriji
             a ako postoje dokazi da ste pokvarili nalepnicu za putarinu, moraćete da platite <b>240 eur</b>.
          </p>`,
      },
      {
        title: 'Više nalepljenih vinjeta',
        description: `          
          <p>
            Kazna će vam biti naplaćena takođe ukoliko imate više nalepljnih vinjeta na prednjoj šoverci a nisu validne. 
            Stare skidajte, nove lepite :).
          </p>`,
      },
      {
        title: 'Čitači',
        description: `          
          <p>
            Čitači vinjeta se nalaze obično na ramovima na autoputu. Pored toga postoje naravno i manuelne provere.
          </p>`,
      },
    ],
    date: new Date('2023-12-10').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
  {
    id: 'nove_cene_vinjete',
    tag: 'automobili',
    slug: 'nove_cene_vinjete',
    title: 'Nova vinjeta, nove cene',
    bgTitle: 'Vinjeta',
    teaser: 'Od 2024. godine dolazi do promene cena postojećih vinjeta i na tržištu će biti još jedna vinjeta pored postojećih',
    headerImg: 'austria-vignette.webp',
    relatedStory: 'voznja_bez_vinjete',
    content: [
      {
        title: 'Novosti',
        description: `     
          <p>
            Od 1. januara 2024. godine, uvodi se nova vinjeta, koja nudi rešenje za mnoge putnike, ali nije korisna za sve. 
            Na primer, ako idete na odmor u Austriju nedelju dana i planirate da koristite automobil samo za ulazak i izlazak iz zemlje tokom 10 dana, 
            vinjeta za 10 dana je i dalje najpovoljnija opcija.
          </p>`,
      },
      {
        title: 'Vrste vinjeta',
        description: `          
          <ol class="list-group list-group-numbered w-75">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">1 dan</div>
                <span>Nova vinjeta koja traje samo 1 dan</span>
              </div>
              <span class="badge bg-danger rounded-pill">8.60 eur</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">10 dana</div>
                <span>Stara cena za ovu vinjetu je bila 9.90 eur</span>
              </div>
              <span class="badge bg-danger rounded-pill">11.50 eur</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">2 meseca</div>
                <span>Stara cena za vinjetu je bila 29 eur</span>
              </div>
              <span class="badge bg-success rounded-pill">28.90 eur</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">Godišnja vinjeta</div>
                <span>Cena za ovu vinjetu se nije promenila i važi za kalendarsku godinu</span>
              </div>
              <span class="badge bg-primary rounded-pill">96.40 eur</span>
            </li>
          </ol>`,
      },
      {
        title: 'Može i digitalno',
        description: `          
          <p>
            Vinjete možete kupiti i online a dobra vest je da digitalna vinjeta može sada da se kupi i na mestima gde 
            se kupuje redovna vinjeta i validna je odmah.
          </p>`,
      },
    ],
    date: new Date('2023-12-05').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
  {
    id: 'zamena_vozacke',
    tag: 'automobili',
    slug: 'zamena_vozacke',
    title: 'Zamena vozačke dozvole - Srpska za Austrijsku',
    bgTitle: 'Vozačka',
    teaser: 'Ukoliko posedujete srpsku dozvolu, imate samo 6 meseci da vozite sa njom kroz Austriju.',
    headerImg: 'drivers-license.webp',
    relatedStory: '',
    content: [
      {
        title: 'Zakazivanje termina',
        description: `     
          <p>
          Sve informacije vezano za zamenu vozačke nalaze se na zvaničnom sajtu policijske uprave koji možete posetiti na ovom
            <a href="https://www.polizei.gv.at/wien/buergerservice/fuehrerschein/4/umschreibung.aspx" target="_blank" class="text-decoration-none fw-bold">Linku</a>.
          </p>     
          <p>
            Zakazivanje za termin za zamenu vozačke možete pronaći na ovom 
            <a href="https://citizen.bmi.gv.at/at.gv.bmi.fnsetvweb-p/etv/public/sva/Terminvereinbarung" target="_blank" class="text-decoration-none fw-bold">Linku</a>.
          </p>
          <p>
            Lokacija na kojoj sam ja podneo zahtev je
             <a href="https://maps.app.goo.gl/igKC5sUf1W7D5Vms9" target="_blank" class="text-decoration-none fw-bold">Dietrichgasse 27, 1030 Wien</a>.
          </p>`,
      },
      {
        title: 'Papiri koje sam morao da skupim',
        description: `          
          <p>&#10003; <span class="text-primary fw-bold">Zahtev za zamenu vozačke</span> - skinuo sam sa sajta policijske uprave međutim zastareo, tako da je preporuka da to popunite na licu mesta, par stvari se popunjava, jako brzo</p>
          <p>&#10003; <span class="text-primary fw-bold">Lekarsko uverenje</span> <b>original</b> 35eur</p>
          <p>&#10003; <span class="text-primary fw-bold">Meldezettel</span> - <b>kopija</b>, original na uvid</p>
          <p>&#10003; <span class="text-primary fw-bold">Pasoš</span> - <b>kopija</b>, original na uvid</p>
          <p>&#10003; <span class="text-primary fw-bold">Vozačka dozvola</span> - <b>kopija prve i druge strane (2 primerka)</b>, original na uvid</p>
          <p>&#10003; <span class="text-primary fw-bold">Anmeldebescheinigung</span> - <b>kopija</b>, original na uvid</p>
          <p>&#10003; <span class="text-primary fw-bold">Slike za pasoš</span> - Ne starije od 6 meseci</p>
          <p>
            <b>Lekarski pregled</b> sam obavio kod naše lekarke koja se nalazi u blizini mog prebivališta i koja je na spisku sertifikovanih lekara na sajtu policijske službe.
            <b>Spisak</b> lekara koji su sertifikovani za lekarski pregled možete videti
            <a href="https://www.polizei.gv.at/wien/files_wien/Sachverstaendigenliste_20231115.pdf" target="_blank" class="text-decoration-none fw-bold">Ovde</a>. <br>
              Ja sam izabrao ordinaciju čiji je vlasnik naša lekarka i više o ordinaciji možete da pročitate
              <a href="/profesije/doktori/jelena_zilic" class="text-decoration-none fw-bold">Ovde</a> i primaju samo keš. <br>
              Pregled je <b>35eur.</b>
          </p>`,
      },
      {
        title: 'Koliko dugo se čeka',
        description: `          
          <p>
            Ja sam podneo zahtev par dana pre isteka roka od 6 meseci. :) <br>
            Na par mesta sam pročitao da dok ste u procesu možete da vozite automobil sa trenutnom vozačkom međutim, <br>
            Prava istina je da <b class="text-uppercase text-danger">nemate pravo</b> da vozite automobil sa trenutnom dozvolom nakon 6 meseci iako ste u procesu.
          </p>
          <p>Službenica na šalteru mi je objasnila da nažalost ne mogu da vozim automobil sa srpskom dozvolom nakon 6 meseci i da sam trebao podneti zahtev čim sam se prijavio na adresu u Austriji :)</p>
          <p class="fw-bold">Proces traje 3-4 meseca i cena za zamenu vozačke na dan 21.11.2023. je 60.50eur.</p>
          <p>Srećno!!!</p>`,
      },
    ],
    date: new Date('2023-11-20').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
  {
    id: 'parking_u_becu',
    tag: 'automobili',
    slug: 'parking_u_becu',
    title: 'Kako do parkinga u Beču - NS table',
    bgTitle: 'Auto parking',
    teaser: 'Od marta 2022. godine parkiranje u Beču se naplaćuje u svim okruzima (23).',
    headerImg: 'parking-vienna.webp',
    relatedStory: 'vrste_parkinga_u_becu',
    content: [
      {
        title: 'Parking u Beču, nema besplatno :)',
        description: `          
          <p>
            Moj prvi susret sa parkingom u Beču je bio izazov <b>kako platiti parking na duže vreme</b>, 
            da je koliko toliko povoljno ( inače nema povoljno za naše standarde ) sa <b>NS tablicama</b> na automobilu.
          </p>
          <p>
            Parking se naravno plaća svuda, i to od ponedeljka do petka, od <b>09:00h do 22:00h</b>. <br>
            Parking na dan <b>20.11.2023</b>. godine košta <b>2.5eur</b> po satu gde god da se parkirate.
          </p>
          <p>Ove su kartice različitih boja i vremenskog trajanja:</p>
          <ol class="list-group list-group-numbered w-75">
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">15min</div>
                <span>Violet</span>
              </div>
              <span class="badge bg-primary rounded-pill">Besplatno</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">30min</div>
                <span>Crvena</span>
              </div>
              <span class="badge bg-primary rounded-pill">1.25 eur</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">60min</div>
                <span>Plava</span>
              </div>
              <span class="badge bg-primary rounded-pill">2.5 eur</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">90min</div>
                <span>Zelena</span>
              </div>
              <span class="badge bg-primary rounded-pill">3.75 eur</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-start">
              <div class="ms-2 me-auto">
                <div class="fw-bold">120min</div>
                <span>Žuta</span>
              </div>
              <span class="badge bg-primary rounded-pill">5 eur</span>
            </li>
          </ol>
          <p class="mt-3">Kazna je <b>36eur</b> i jako su rigorozni što se tiče kontrole tako da ispoštujte pravila.</p>
          <p>Kartice za parkiranje mogu se kupiti na sledećim prodajnim mestima:</p>
          <ul class="list-group list-group-flush w-75">
            <li class="list-group-item bg-transparent">Trafika (Tabak);</li>
            <li class="list-group-item bg-transparent">Automat za cigarete;</li>
            <li class="list-group-item bg-transparent">Benzinska pumpa;</li>
            <li class="list-group-item bg-transparent">Automat za karte javnog gradskog prevoza;</li>
            <li class="list-group-item bg-transparent">Pošta;</li>
            <li class="list-group-item bg-transparent">Auto-moto savez (Öamtc i Arbö);</li>
          </ul>
          <p class="mt-3">
            Ovo je malo skuplja varijanta ukoliko vam treba dnevni parking i na malo duže vreme tako da sam se ja odlučio za parking u garaži.
          </p>`,
      },
      {
        title: 'Parking garaža na nedelju dana',
        description: `          
          <p>
            Ovakva vrsta parkinga mnogo zavisi od lokacije na kojoj se nalazi. Obzirom da sam se ja nalazio u 10om okrugu, tražio sam parking
            što bliže svom privremenom prebivalištu (Music box) i to je bio Best parking u centru okruga. 
          </p>
          <p>
            Na njihovom sajtu možete pronaći najbližu lokaciju kao i cenovnik. Sajt pored Nemačkog nudi i Engleski jezik.
            Link do sajta <a href="https://www.bestinparking.com/en/at" target="_blank" class="text-decoration-none fw-bold">Best parking</a>.
          </p>
          <p>Ja sam konkretno iznajmio mesto na <b>nedelju</b> dana što je iznosilo <b>54eur</b> na dan 20.11.2023. godine.
          </p>
          `,
      },
    ],
    date: new Date('2023-11-20').getTime(),
    storyWriter: {
      name: 'Petar Dragić',
      img: 'pd-img.png'
    }
  },
]
