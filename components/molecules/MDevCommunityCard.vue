<template>
  <div class="m-dev-community-card">
    <div class="row align-items-center" :class="[vertical ? 'flex-column' : 'flex-column flex-md-row']">
      <div class="col text-center" :class="{'mb-3': vertical}">
        <img src="/general/developer-community.png" alt="dev community">
      </div>
      <div class="col">
        <h2>Zajednica developera u Austriji</h2>
        <p>
          Zajednica bi trebalo da okupi developere na jednom mestu i olakša pronalaženje posla, deljenje znanja.
        </p>
        <NuxtLink
          to="/zajednica-developera/"
          class="btn btn-primary btn-lg text-white mt-3"
        >
          Saznajte više
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  vertical: {
    type: Boolean,
    default: false
  }
})
</script>
