import {CARS_PROFESSION} from "~/constants/professions/cars";
import {DOCTORS_PROFESSION} from "~/constants/professions/doctors";
import {SO_PROFESSION} from "~/constants/professions/service-objects";

const mergeAllProfessions = [...CARS_PROFESSION, ...DOCTORS_PROFESSION, ...SO_PROFESSION]
const sortingByPromotion = (profession) => {
  return profession.sort((a, b) => {
    if (a.promo === true && b.promo === false) {
      return -1;
    } else if (a.promo === false && b.promo === true) {
      return 1;
    } else {
      return 0;
    }
  })
}
export const allProfessions = () => {
  return mergeAllProfessions
}
export const allProfessionTags = () => {
  return [...new Set(mergeAllProfessions.map(e => e.tag))]
}
export const allCarProfessionsSortedByPromotion = () => {
  return sortingByPromotion(CARS_PROFESSION)
}
export const allDoctorsProfessionsSortedByPromotion = () => {
  return sortingByPromotion(DOCTORS_PROFESSION)
}
export const allSOProfessionsSortedByPromotion = () => {
  return sortingByPromotion(SO_PROFESSION)
}

