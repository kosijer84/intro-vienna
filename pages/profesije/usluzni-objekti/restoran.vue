<template>
  <TMainProfession
    :header-static-data="headerStaticInfo"
    :sub-tags="allCafePlacesSubTags"
    :sub-tags-options="popularTopicsOptions"
    :professions="allGeneralCafes"
  />
</template>
<script setup lang="ts">
  import {onMounted, ref} from "#imports";
  import {SO_PROFESSION} from "~/constants/professions/service-objects";
  import {SERVICE_OBJECTS_SUB_TAGS} from "~/constants/professions/subTags";

  const allCafePlaces = ref([] as any)
  const allCafePlacesSubTags = ref([] as any)
  const allGeneralCafes = ref([] as any)
  const route = useRoute()
  const headerStaticInfo = reactive({
    backImage: 'SO-general.jpeg',
    frontTitle: 'Restorani',
    frontBgTitle: '',
    frontSubtitle: 'Svi restorani u Beču.'
  })
  const popularTopicsOptions = reactive({
    title: 'Filter',
    variantLink: 'profesije/usluzni-objekti',
  })

  onMounted(() => {
    getCafeProfessions()
    getAllCafesSubTags()
    filterAllCafes()
  })
  function getCafeProfessions() {
    allCafePlaces.value = SO_PROFESSION
  }
  function getAllCafesSubTags() {
    allCafePlacesSubTags.value = SERVICE_OBJECTS_SUB_TAGS
  }
  function filterAllCafes() {
    const urlSegments = route.path.split('/');
    const profession = urlSegments[urlSegments.length - 1];
    allGeneralCafes.value =  allCafePlaces.value.filter((obj: any) => {
      return obj.subTag.some((element: any) => element.includes(profession));
    });
  }
  useSeoMeta({
    title: () => 'Restorani',
    description: () => 'Svi restorani u Beču',
    ogTitle: () => 'Restorani',
    ogDescription: () => 'Svi restorani u Beču',
    ogImage: () => `https://wien-86d0f.web.app/general/SO-general.jpeg`,
    ogUrl: () => `https://wien-86d0f.web.app/general/SO-general.jpeg`
  });
</script>

