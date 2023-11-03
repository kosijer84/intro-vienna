<template>
  <div class="m-writer">
    <img v-if="writerImg" :src="'/writer-profile/' + `${writerImg}`" :alt="writerName">
    <div>
      <h5 class="mb-0">{{writerName}}</h5>
      <p v-if="storyDate" class="mb-0">
        {{new Date(storyDate).toLocaleDateString()}}
        <span v-if="readingTime" class="fw-bold text-primary"> - {{readingTime}} min čitanja</span>
      </p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  writerName: String,
  writerImg: String,
  storyDate: String,
  readingTime: Number
})
</script>
