<template>
  <div class="m-external-ass-card">
    <div class="row row-cols-1 row-cols-md-2">
      <div class="col">
        <div class="p-5">
          <p class="fs-2 text-secondary mb-0">
            <fa-icon icon="fa-solid fa-city"/>
          </p>
          <h2>Grad Beč - informacije</h2>
          <p>
            Ovo je stranica grada Beča gde možete pronaći jako puno informacija o životu u Beču.
            Takođe postoji prevod kroz ceo sajt na engleskom i na jezicima bivše Juge.
          </p>
          <NuxtLink
            to="/grad-bec/"
            class="btn btn-secondary btn-lg mt-3"
          >
            Saznajte više
          </NuxtLink>
        </div>
      </div>
      <div class="col">
        <div class="m-external-ass-card-img">
          <img src="/general/vienna-general.jpeg" alt="Vienna general">
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>
