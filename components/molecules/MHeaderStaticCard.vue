<template>
  <div v-if="backImage" class="m-img-frame">
    <img
      v-if="backImage"
      :src="`/general/${backImage}`"
      alt="general img"
    />
    <div class="m-img-frame-content">
      <MHeadline
        :title="frontTitle"
        :bg-title="frontBgTitle"
        :subtitle="frontSubtitle"
        title-size="h1"
      />
    </div>
  </div>
  <MHeaderCardSkeleton v-else/>
</template>
<script setup lang="ts">
  defineProps({
    backImage: null,
    frontTitle: {type: String, default: ''},
    frontBgTitle: {type: String, default: ''},
    frontSubtitle: {type: String, default: ''}
  })
</script>
