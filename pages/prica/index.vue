<template>
  <div class="row mb-4">
    <div class="col-md-6 mt-5">
      <MHeadline title="Popularne teme" title-bold title-size="h3"/>
      <MPopularTopics :tags="topicTags as any"/>
    </div>
    <div class="col-md-6 mt-5">
      <div v-if="processEnv" class="a-g-placeholder">G placeholder</div>
      <div v-else class="a-g-placeholder">Prod G placeholder</div>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-lg-8">
      <div class="row row-cols-1 row-cols-xl-3 row-cols-xxl-3 g-4">
        <div
          v-if="allStories.length"
          v-for="(story, index) in allStories"
          :key="index"
          class="col"
        >
          <MStoryCard
            :story="story"
            :reading-time="countReadingTime(story.content.map(e => e.description.length))"
          />
        </div>
        <div
          v-else
          v-for="n in 8"
          :key="n"
          class="col"
        >
          <MStoryCardSkeleton/>
        </div>
      </div>
    </div>
    <div class="col-md-6 col-lg-4 mt-3 mt-md-0">
      <OLastTopicsCard :stories="allStories.slice(0,3)" stacked/>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {onMounted, ref} from "#imports";
  import {allStoriesByNewestDate} from '~/helpers/allStoriesHelper'
  import {allTags} from "~/helpers/allStoriesHelper";

  const allStories = ref([] as any)
  const topicTags = ref([] as any)
  const processEnv = ref(false)

  onMounted(() => {
    getAllStories()
    getAllTags()
    checkENV()
  })

  function checkENV() {
    if(process.env.NODE_ENV === 'development') {
      processEnv.value = true
    }
  }
  function countReadingTime(time: any) {
    const timeCount = time.reduce((total: any, currentValue: any) => total + currentValue, 0);
    return timeCount > 1000 ? 6 : 4
  }
  function getAllTags() {
    topicTags.value = allTags()
  }
  function getAllStories() {
    allStories.value = allStoriesByNewestDate()
  }
</script>
