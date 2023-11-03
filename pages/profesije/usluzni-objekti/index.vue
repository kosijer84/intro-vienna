<template>
  <TMainProfession
    :header-static-data="headerStaticInfo"
    :sub-tags="allSOProfessionSubTags"
    :sub-tags-options="popularTopicsOptions"
    :professions="allSOProfessions"
  />
</template>
<script setup lang="ts">
import {onMounted, ref} from "#imports";
import {SO_PROFESSION} from "~/constants/professions/service-objects";
import {SERVICE_OBJECTS_SUB_TAGS} from "~/constants/professions/subTags";

const allSOProfessions = ref([] as any)
const allSOProfessionSubTags = ref([] as any)
const headerStaticInfo = reactive({
  backImage: 'SO-general.jpeg',
  frontTitle: 'Uslužni objekti u Austriji',
  frontBgTitle: 'Restorani',
  frontSubtitle: 'Dobro za početak da se ne osećate otuđeno.'
})
const popularTopicsOptions = reactive({
  title: 'Filter',
  variantLink: 'profesije/usluzni-objekti',
})

onMounted(() => {
  getSOProfessions()
  getSOProfessionsSubTags()
})
function getSOProfessions() {
  allSOProfessions.value = SO_PROFESSION
}
function getSOProfessionsSubTags() {
  allSOProfessionSubTags.value = SERVICE_OBJECTS_SUB_TAGS
}
</script>
