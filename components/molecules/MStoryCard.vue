<template>
  <div v-if="story" class="card m-story-card">
    <img
      v-if="story.headerImg"
      :src="`/stories/${story.headerImg}`"
      class="card-img-top"
      :alt="story.headerImg"
    >
    <div class="card-body d-flex flex-column align-items-start">
      <p class="mb-0">
        <span class="text-uppercase fw-bold">{{story.tag}}</span>
        <small class="text-black-50 fw-medium"> - {{readingTime}} min čitanja</small>
      </p>
      <h3 class="card-title">{{story.title}}</h3>
      <p class="card-text">{{story.teaser}}</p>
      <nuxt-link
        v-if="story"
        :to="`/prica/${story.tag}/${story.slug}`"
        class="a-link"
      >
        Pročitaj
        <fa-icon icon="fa-solid fa-circle-chevron-right" class="text-primary ms-1"/>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    story: {
      type: Object,
      required: true
    } as any,
    readingTime: {
      type: Number,
    }
  })
</script>
