<template>
  <TMainProfession
    :header-static-data="headerStaticInfo"
    :sub-tags="allCarProfessionSubTags"
    :sub-tags-options="popularTopicsOptions"
    :professions="allCarProfessionsSorted"
  />
</template>
<script setup lang="ts">
  import {onMounted, ref} from "#imports";
  import {CAR_SUB_TAGS} from "~/constants/professions/subTags";
  import {allCarProfessionsSortedByPromotion} from "~/helpers/allProfessionsHelper";

  const allCarProfessionsSorted = ref([] as any)
  const allCarProfessionSubTags = ref([] as any)
  const headerStaticInfo = reactive({
    backImage: 'cars-general.jpeg',
    frontTitle: 'Sve za automobile',
    frontBgTitle: 'Auto',
    frontSubtitle: 'Pretražite automehaničare, autoelektričare i druge majstore vezano za vaš automobil.'
  })
  const popularTopicsOptions = reactive({
    title: 'Filter',
    variantLink: 'profesije/automobili',
  })

  onMounted(() => {
    getAllCarProfessionsSubTags()
    getAllCarProfessionsSorted()
  })
  function getAllCarProfessionsSubTags() {
    allCarProfessionSubTags.value = CAR_SUB_TAGS
  }
  function getAllCarProfessionsSorted() {
    allCarProfessionsSorted.value = allCarProfessionsSortedByPromotion()
  }
</script>
