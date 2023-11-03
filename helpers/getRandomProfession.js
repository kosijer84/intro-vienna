import {allProfessionTags} from "~/helpers/allProfessionsHelper";

export const getRandomProfession = () => {
  const randomIndex = Math.floor(Math.random() * allProfessionTags().length);
  const profession = allProfessionTags()[randomIndex]
  switch (profession) {
    case 'automobili':
      return {
        title: profession.replace('-', ' '),
        description: 'Pogledajte na jednom mestu majstore za automobile koji pričaju naš jezik u Austriji. Zakažite termin.',
        link: profession,
        image: 'cars-general.jpeg'
      }
    case 'usluzni-objekti':
      return {
        title: profession.replace('-', ' '),
        description: 'Pogledajte na jednom mestu uslužne objekte u kojima se priča naš jezik u Austriji. Zakažite termin.',
        link: profession,
        image: 'SO-general.jpeg'
      }
    default:
      return {
        title: profession.replace('-', ' '),
        description: 'Pogledajte na jednom mestu lekare koji pričaju naš jezik u Austriji. Zakažite pregled.',
        link: profession,
        image: 'doctor-general.jpeg',
      }
  }
}
