<template>
  <nuxt-link
    v-if="newStory"
    :to="`/prica/${newStory?.tag}/${newStory?.slug}`"
    class="m-header-card"
  >
    <img
      class="m-header-card-img"
      v-if="newStory?.headerImg"
      :src="`/stories/${newStory?.headerImg}`"
      :alt="newStory?.headerImg"
    />
    <div class="m-header-card-content w-75">
      <MHeadline
        :title="newStory?.title"
        :bg-title="newStory?.bgTitle"
        :teaser="newStory?.teaser"
        title-size="h1"
        shortDescription="Supercharge Your Team’s Productivity: Break Through Work Bottlenecks with These 5 Strategies"
      />
      <MWriterDetails
        :writer-name="newStory?.storyWriter.name"
        :writer-img="newStory?.storyWriter.img"
        :story-date="newStory?.date"
      />
    </div>
  </nuxt-link>
  <MHeaderCardSkeleton v-else/>
</template>
<script setup lang="ts">
  defineProps({
    newStory: {
      type: Object,
      required: true
    } as any
  })
</script>
