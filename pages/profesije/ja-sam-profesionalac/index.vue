<template>
  <div class="p-professionals-prices">
    <div class="row">
      <div class="col">
        <MHeadline
          title="Ja sam profesionalac"
          title-bold
          title-size="h3"
          subtitle="Izaberite plan koji želite i kontaktirajte nas da sarađujemo."
          link-back
          class="mt-5 mb-2"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-end">
        <p class="text-uppercase me-3 fw-bolder">Godišnji plan</p>
        <div class="form-check form-switch">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            :checked="yearlyPricePlan"
            id="yearPriceCheck"
            @change="handleYearlyPriceChange"
          >
          <label class="form-check-label" for="yearPriceCheck"></label>
        </div>
      </div>
    </div>
    <div class="row row-cols-1 row-cols-lg-3 g-4">
      <div v-for="(singleCard, index) in priceContentData" :key="index" class="col">
        <OPricingCard :price-card="singleCard" :is-yearly-price="yearlyPricePlan"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {CARD_PRICES} from "~/constants/pricing/card-prices";
  import {onMounted} from "#imports";

  const yearlyPricePlan = ref(false)
  const priceContentData = ref()

  onMounted(() => {
    getCardPrices()
  })
  function getCardPrices() {
    priceContentData.value = CARD_PRICES
  }
  function handleYearlyPriceChange() {
    yearlyPricePlan.value = !yearlyPricePlan.value
  }
</script>
