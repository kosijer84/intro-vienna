<template>
  <div class="card o-pricing-card">
    <div class="d-flex align-items-center justify-content-between py-3 px-4">
      <img
        v-if="priceCard?.image"
        :src="`/pricing-cards/${priceCard?.image}`"
        class="card-img-top"
        alt="price image"
      >
      <p v-if="isYearlyPrice" class="badge text-bg-primary text-white text-uppercase">Godišnje</p>
      <p v-else class="badge text-bg-secondary text-white text-uppercase">Mesečno</p>
      <div v-if="isYearlyPrice" class="d-flex align-items-end ms-auto">
        <div class="d-flex flex-column align-items-start">
          <h6 class="display-1 fw-medium text-secondary mb-0 lh-1">{{priceCard?.yearlyPrice}} </h6>
        </div>
        <small class="fs-5">EUR</small>
      </div>
      <div v-else class="d-flex align-items-end">
        <h6 class="display-1 fw-medium text-secondary mb-0 lh-1">{{priceCard?.monthlyPrice}} </h6>
        <small class="fs-5">EUR</small>
      </div>
    </div>
    <div class="card-body d-flex flex-column position-relative align-items-center" style="z-index: 1">
      <span v-if="priceCard?.popular" class="badge text-bg-danger">Popularno</span>
      <h2 class="card-title text-center text-primary mb-4 fw-bold">{{priceCard?.title}}</h2>
      <div v-if="priceCard?.items.length" class="mb-4 w-100">
        <p v-for="(item, index) in priceCard.items" :key="index" class="card-text mb-0">
          <span>
            <fa-icon icon="fa-solid fa-check" class="fs-5 text-primary me-2"/>
          </span>
          {{item}}
        </p>
      </div>
      <div v-if="priceCard?.oneTimePayment" class="bg-light bg-gradient p-3 mb-3 mt-auto w-100" style="border-radius: 10px">
        <h6 class="mb-0 fw-bold">{{priceCard?.oneTimePayment?.title}}</h6>
        <p class="mb-0">{{priceCard?.oneTimePayment.website}}</p>
        <p class="mb-0">{{priceCard?.oneTimePayment.pages}}</p>
      </div>
      <div v-if="priceCard?.options.length" class="bg-warning-subtle bg-gradient p-3 mb-3 mt-auto w-100" style="border-radius: 10px">
        <h6 class="fw-bold">Dodatne opcije</h6>
        <p
          v-for="(option, index) in priceCard?.options"
          :key="index"
          class="card-text mb-0 text-uppercase fw-bold small"
        >
          {{option}}
        </p>
      </div>
      <a
        :href="`mailto:danijel.kosijer@gmail.com?subject=${priceCard?.title} Cenovni Plan`"
        class="btn btn-secondary w-100 mb-2"
        :class="[(!priceCard?.oneTimePayment && !priceCard?.options.length) ? 'mt-auto' : 'mt-2']"
      >
        Želim ovo
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    priceCard: {
      type: Object,
      required: true
    } as any,
    isYearlyPrice: {
      type: Boolean,
      default: false
    },
  })
</script>
