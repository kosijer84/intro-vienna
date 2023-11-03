<template>
  <div
    class="o-profession-card bg-white"
    style="border-radius: 10px"
  >
    <h4 class="mt-3 fw-bolder">{{ professionJob?.title }}</h4>
    <p class="small">
      <fa-icon icon="fa-solid fa-calendar-days" class="me-2 text-black-50"/>
      <span class="text-primary fw-bold">
        {{new Date(professionJob?.date).toLocaleDateString()}}
      </span>
    </p>
    <p v-html="professionJob?.requirements"></p>
    <p v-html="professionJob?.yourProfile"></p>
  </div>
</template>
<script setup lang="ts">
defineProps({
  professionJob: {
    type: Object,
    required: true
  } as any,
})
</script>
