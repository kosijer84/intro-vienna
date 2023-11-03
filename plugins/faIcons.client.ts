import { defineNuxtPlugin } from '#app';

import {library, config} from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import {
    faChevronCircleRight,
    faCircleChevronLeft,
    faHouse,
    faLocationDot,
    faCity,
    faNewspaper,
    faCarBurst,
    faStethoscope,
    faMartiniGlassCitrus,
    faCheck,
    faUserTie,
    faCalendarDays,
    faUsers,
    faBriefcase,
    faIndustry
} from '@fortawesome/free-solid-svg-icons'

// This is important, we are going to let Nuxt not worry or worry about the CSS
config.autoAddCss = true

library.add(
    faChevronCircleRight,
    faCircleChevronLeft,
    faHouse,
    faLocationDot,
    faCity,
    faNewspaper,
    faCarBurst,
    faStethoscope,
    faMartiniGlassCitrus,
    faCheck,
    faUserTie,
    faCalendarDays,
    faUsers,
    faBriefcase,
    faIndustry
)

export default defineNuxtPlugin(({vueApp}) => {
    vueApp.component('fa-icon', FontAwesomeIcon)
})
