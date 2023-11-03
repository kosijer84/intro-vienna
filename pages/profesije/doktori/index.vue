<template>
  <TMainProfession
    :header-static-data="headerStaticInfo"
    :sub-tags="allDoctorProfessionSubTags"
    :sub-tags-options="popularTopicsOptions"
    :professions="allDoctorProfessions"
  />
</template>
<script setup lang="ts">
import {onMounted, ref} from "#imports";
import {DOCTORS_PROFESSION} from "~/constants/professions/doctors";
import {DOCTOR_SUB_TAGS} from "~/constants/professions/subTags";

const allDoctorProfessions = ref([] as any)
const allDoctorProfessionSubTags = ref([] as any)
const headerStaticInfo = reactive({
  backImage: 'doctor-general.jpeg',
  frontTitle: 'Svi doktori na jednom mestu',
  frontBgTitle: 'Doktor',
  frontSubtitle: 'Olakšajte sebi dolazak i tranziciju.'
})
const popularTopicsOptions = reactive({
  title: 'Filter',
  variantLink: 'profesije/doktori',
})

onMounted(() => {
  getDoctorProfessions()
  getAllCarProfessionsSubTags()
})
function getDoctorProfessions() {
  allDoctorProfessions.value = DOCTORS_PROFESSION
}
function getAllCarProfessionsSubTags() {
  allDoctorProfessionSubTags.value = DOCTOR_SUB_TAGS
}
</script>
