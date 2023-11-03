<template>
  <div class="p-single-profession">
    <div class="row">
      <div class="col-md-7">
        <div class="row">
          <div class="col">
            <Button
              @click="$router.go(-1)"
              circle-var
              class="mb-3"
            >
              <fa-icon icon="fa-solid fa-circle-chevron-left" class="text-primary"/>
            </Button>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h1>{{profession.title}}</h1>
            <p class="mb-3">
              <span class="text-primary me-1">{{profession?.workshopPlace?.address}}</span>,
              {{profession?.workshopPlace?.city}}
            </p>
            <p>{{profession?.teaser}}</p>
          </div>
        </div>
      </div>
      <div class="col-md-3 ms-md-auto">
        <MDevCommunityCard vertical class="mb-3"/>
        <MPayPalSupportCard/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {onMounted, ref} from "#imports";
  import {DOCTORS_PROFESSION} from "~/constants/professions/doctors";

  const profession = ref([] as any)
  const route = useRoute()

  onMounted(() => {
    singleProfession()
  })
  function singleProfession() {
    profession.value = DOCTORS_PROFESSION.filter(e => e.id === route.params.id)[0]
  }
  useSeoMeta({
    title: () => profession.value?.title,
    description: () => profession.value?.teaser,
    ogTitle: () => profession.value?.title,
    ogDescription: () => profession.value?.teaser,
    ogImage: () => `https://wien-86d0f.web.app/${profession.value?.headerImg}`,
    ogUrl: () => `https://wien-86d0f.web.app/profesije/automobili/${profession.value?.slug}`
  });
</script>
