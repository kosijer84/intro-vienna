<template>
  <div class="row pt-4 position-relative" style="z-index: 1">
    <div class="col-12">
      <MHeaderStaticCard
        :back-image="headerStaticData?.backImage"
        :front-title="headerStaticData?.frontTitle"
        :front-bg-title="headerStaticData?.frontBgTitle"
        :front-subtitle="headerStaticData?.frontSubtitle"
      />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <MPopularTopics
        :tags="subTags as any"
        :tags-title="subTagsOptions?.title"
        :tag-variant="subTagsOptions?.variantLink"
        with-frame class="my-3"
      />
    </div>
  </div>
  <p class="mt-3 fw-bold">Ukupno: {{professions?.length}}</p>
  <div class="row row-cols-1 row-cols-md-2 g-3">
    <div v-if="!professions?.length" class="col">
      <p>Trenutno nema korisnika u ovoj kategoriji.</p>
    </div>
    <div v-else v-for="(profession, index) in professions" :key="index" class="col">
      <OProfessionCard :profession="profession"/>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    headerStaticData: {} as any,
    subTags: [] as any,
    subTagsOptions: {} as any,
    professions: [] as any
  })
</script>
