<template>
  <div
    class="o-profession-card"
    :class="[profession?.promo ? 'bg-primary-subtle': 'bg-white']"
    style="border-radius: 10px"
  >
    <div class="row">
      <div class="col">
        <span
          v-for="(subTag, index) in profession?.subTag"
          :key="index"
          class="badge rounded-pill text-bg-dark me-1"
        >
          {{ subTag }}
        </span>
      </div>
      <div v-if="profession?.jobs.length" class="col-auto">
        <span class="badge rounded-pill text-bg-danger">
          Zapošljava
        </span>
      </div>
    </div>
    <h4 class="mt-3 fw-bolder">{{ profession?.workshopPlace.name }}</h4>
    <p class="small">
      <fa-icon icon="fa-solid fa-location-dot" class="me-1 text-black-50"/>
      <span class="text-primary fw-bold">{{ profession?.workshopPlace.address }}</span>
      -
      <span class="fw-bold me-1">{{ profession?.workshopPlace.district }}</span>
      <span class="fw-bold">{{ profession?.workshopPlace.city }}</span>
    </p>
    <p>{{ profession?.teaser }}</p>
    <div class="w-100 d-flex justify-content-between align-items-center mt-auto">
      <Button primary small white-var data-bs-toggle="modal" data-bs-target="#correction">Ispravite nas</Button>
      <div class="modal fade" id="correction" tabindex="-1" aria-labelledby="correctionLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header" style="border-bottom: none">
              <h1 class="modal-title fs-5" id="exampleModalLabel">Ispravke</h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p class="text-secondary">
                Pomozite nam da podaci na stranici budu aktuelni, kako ne bi dolazio do zabune. Ako primetite neku grešku,
                pogrešno radno vreme ili broj telefona, pišite nam.
              </p>
              <div class="w-100 text-center mb-3">
                <a
                  href="mailto:danijel.kosijer@gmail.com"
                  class="text-decoration-none fw-bold text-danger text-uppercase"
                >
                  Kontakt za ispravku.
                </a>
              </div>
            </div>
            <div class="modal-footer" style="border-top: none">
              <Button primary white-var data-bs-dismiss="modal">Zatvori</Button>
            </div>
          </div>
        </div>
      </div>
      <NuxtLink
        :to="`/profesije/${profession.tag}/${profession.slug}`"
        v-if="profession.proPage"
        class="btn btn-link text-decoration-none fw-bold">
        Više detalja
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  profession: {
    type: Object,
    required: true
  } as any,
})
</script>
