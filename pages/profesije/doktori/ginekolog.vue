<template>
  <TMainProfession
    :header-static-data="headerStaticInfo"
    :sub-tags="allDoctorProfessionSubTags"
    :sub-tags-options="popularTopicsOptions"
    :professions="allGeneralDoctors"
  />
</template>
<script setup lang="ts">
import {onMounted, ref} from "#imports";
import {DOCTORS_PROFESSION} from "~/constants/professions/doctors";
import {DOCTOR_SUB_TAGS} from "~/constants/professions/subTags";

const allDoctorProfessions = ref([] as any)
const allDoctorProfessionSubTags = ref([] as any)
const allGeneralDoctors = ref([] as any)
const route = useRoute()
const headerStaticInfo = reactive({
  backImage: 'doctor-general.jpeg',
  frontTitle: 'Opšta praksa',
  frontBgTitle: 'Lekar',
  frontSubtitle: 'Svi lekari opšte prakse u Beču.'
})
const popularTopicsOptions = reactive({
  title: 'Filter',
  variantLink: 'profesije/doktori',
})

onMounted(() => {
  getDoctorProfessions()
  getAllDoctorProfessionsSubTags()
  filterAllMechanics()
})
function getDoctorProfessions() {
  allDoctorProfessions.value = DOCTORS_PROFESSION
}
function getAllDoctorProfessionsSubTags() {
  allDoctorProfessionSubTags.value = DOCTOR_SUB_TAGS
}
function filterAllMechanics() {
  const urlSegments = route.path.split('/');
  const profession = urlSegments[urlSegments.length - 1];
  allGeneralDoctors.value =  allDoctorProfessions.value.filter((obj: any) => {
    return obj.subTag.some((element: any) => element.includes(profession));
  });
}
useSeoMeta({
  title: () => 'Opšta praksa',
  description: () => 'Svi lekari opšte prakse u Beču',
  ogTitle: () => 'Opšta praksa',
  ogDescription: () => 'Svi lekari opšte prakse u Beču',
  ogImage: () => `https://wien-86d0f.web.app/general/doctor-general.jpeg`,
  ogUrl: () => `https://wien-86d0f.web.app/general/doctor-general.jpeg`
});
</script>

