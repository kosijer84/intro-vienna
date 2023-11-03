<template>
  <div class="o-latest-topics-card">
    <MHeadline title="Popularne priče" title-size="h3"/>
    <div class="row g-3" :class="[stacked ? 'row-cols-1' : 'row-cols-1 row-cols-md-2']">
      <div v-for="(story, index) in stories" :key="index">
        <nuxt-link
          v-if="story"
          :to="`/prica/${story?.tag}/${story?.slug}`"
          class="o-latest-topics-card-link col"
        >
          <img
            v-if="story?.headerImg"
            :src="`/stories/${story?.headerImg}`"
            :alt="story?.headerImg"
          />
          <div>
            <MHeadline
              :title="story?.title"
              :teaser="story?.teaser"
              title-size="h5"
            />
            <p class="text-primary fw-bold mb-0 small text-end">
              Više o temi
              <fa-icon icon="fa-solid fa-circle-chevron-right" class="text-primary"/>
            </p>
          </div>
        </nuxt-link>
      </div>
    </div>
    <NuxtLink v-if="route.name !== 'prica'" to="/prica/" class="text-secondary fw-bolder text-decoration-none mt-3 d-flex w-100 align-items-center">
      Pogledaj sve priče
      <fa-icon icon="fa-solid fa-circle-chevron-right" class="text-secondary ms-auto fs-5"/>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
  defineProps({
    stories: [] as any,
    stacked: {
      type: Boolean,
      default: false
    }
  })

  const route = useRoute()
</script>
