export const CARD_PRICES = [
  {
    title: 'Besplatno',
    monthlyPrice: 0,
    yearlyPrice: 0,
    websitePrice: 0,
    hostingPrice: 0,
    description: '',
    items: ['Kartica na stranici', 'Informacije o profesiji', 'Link ka vašem sajtu'],
    options: [],
    image: 'free.svg',
    popular: false
  },{
    title: 'Standard',
    monthlyPrice: 10,
    yearlyPrice: 110,
    websitePrice: 0,
    hostingPrice: 0,
    description: '',
    items: ['Kartica na stranici', 'Informacije o profesiji', 'Link ka vašem sajtu', 'Stranica kod nas na sajtu'],
    options: ['Istaknuta kartica - 2 eur/mes', 'Poslovi kao opcija - 2 eur/mes'],
    image: 'standard.svg',
    popular: true
  },{
    title: 'Premium',
    monthlyPrice: 15,
    yearlyPrice: 165,
    websitePrice: 200,
    hostingPrice: 30,
    description: '',
    items: ['Kartica na stranici', 'Informacije o profesiji', 'Link ka vašem sajtu', 'Stranica kod nas na sajtu', 'Istaknuta kartica', 'Opcija za dodavanje posla', 'Hosting'],
    oneTimePayment: {
      title: 'Jednokratno plaćanje',
      website: '200 eur za jednu stranicu',
      pages: '50 eur po dodatnoj stranici',
    },
    options: ['Kontaktirajte nas'],
    image: 'premium.svg',
    popular: false
  }
]
