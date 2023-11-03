<template>
  <TMainProfession
    :header-static-data="headerStaticInfo"
    :sub-tags="allCarProfessionSubTags"
    :sub-tags-options="popularTopicsOptions"
    :professions="allCarMechanic"
  />
</template>
<script setup lang="ts">
  import {onMounted, ref} from "#imports";
  import {CARS_PROFESSION} from "~/constants/professions/cars";
  import {CAR_SUB_TAGS} from "~/constants/professions/subTags";

  const allCarProfessions = ref([] as any)
  const allCarProfessionSubTags = ref([] as any)
  const allCarMechanic = ref([] as any)
  const route = useRoute()
  const headerStaticInfo = reactive({
    backImage: 'cars-general-mechanic.webp',
    frontTitle: 'Automehaničari',
    frontBgTitle: 'Auto',
    frontSubtitle: 'Svi automehaničari u Beču.'
  })
  const popularTopicsOptions = reactive({
    title: 'Filter',
    variantLink: 'profesije/automobili',
  })

  onMounted(() => {
    getCarProfessions()
    getAllCarProfessionsSubTags()
    filterAllMechanics()
  })
  function getCarProfessions() {
    allCarProfessions.value = CARS_PROFESSION
  }
  function getAllCarProfessionsSubTags() {
    allCarProfessionSubTags.value = CAR_SUB_TAGS
  }
  function filterAllMechanics() {
    const urlSegments = route.path.split('/');
    const profession = urlSegments[urlSegments.length - 1];
    allCarMechanic.value =  allCarProfessions.value.filter((obj: any) => {
      return obj.subTag.some((element: any) => element.includes(profession));
    });
  }
  useSeoMeta({
    title: () => 'Auto Mehanicari',
    description: () => 'Svi auto mehanicari u Becu',
    ogTitle: () => 'Auto Mehanicari',
    ogDescription: () => 'Svi auto mehanicari u Becu',
    ogImage: () => `https://wien-86d0f.web.app/general/cars-general-mechanic.webp`,
    ogUrl: () => `https://wien-86d0f.web.app/general/cars-general-mechanic.webp`
  });
</script>
