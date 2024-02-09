<template>
  <div class="row mb-4">
    <div class="col-md-12 my-5">
      <div class="row row-cols-1 row-cols-md-2">
        <MHeadline title="Popularne teme" :subtitle="`Trenutno ima ${allStories.length}`" title-bold title-size="h3" class="col"/>
        <BInput
          label="Pronađite priču po naslovu"
          placeholder="Vrste parkinga u Beču"
          :label-bellow="`Pronađene ${filteredStories.length} priče`"
          class="col"
          v-model="searchStory"
        />
      </div>
      <MPopularTopics tags-title="Filter po temi" :tags="topicTags as any" class="mt-3"/>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-lg-8">
      <div class="row row-cols-1 row-cols-xl-3 row-cols-xxl-3 g-4">
        <div
          v-if="filteredStories.length"
          v-for="(story, index) in filteredStories"
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
  const searchStory = ref('');
  const filteredStories = computed(() => {
    return allStories.value.filter((story: { title: string; }) => story.title.toLowerCase().includes(searchStory.value.toLowerCase()));
  });

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
