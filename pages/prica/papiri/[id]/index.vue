<template>
  <TSingleStory
    :single-story="story.value"
    :related-story="relatedSingleStory.value"
    :topic-tags="topicTags"
    :time-needed="readingTime as Number"
    :all-stories="allStories"
    :profession-card="professionValue"
  />
</template>
<script setup lang="ts">
  import {onMounted, reactive, ref} from "#imports"
  import {allStoriesByNewestDate, allTags} from '~/helpers/allStoriesHelper'
  import {getRandomProfession} from "~/helpers/getRandomProfession";
  import {PAPERS_STORY} from "~/constants/blogStories/papers";

  const story = reactive({} as any)
  const relatedSingleStory = reactive({} as any)
  const allStories = ref([] as any)
  const topicTags = ref([] as any)
  const readingTime = ref(Number as any)
  let professionValue = reactive({})
  const route = useRoute()

  onMounted(() => {
    getAllStories()
    singleStory()
    getRelatedSingleStory()
    getAllTags()
    getProfessionCardContent()
  })

  function singleStory() {
    const singleStory = PAPERS_STORY.filter(e => e.id === route.params.id)
    const countChar = singleStory[0].content.map(e => e.description.length)
    const timeCount = countChar.reduce((total: any, currentValue: any) => total + currentValue, 0);
    if(timeCount > 1000)
      readingTime.value = 6
    else
      readingTime.value = 4
    story.value = singleStory[0]
  }
  function getRelatedSingleStory() {
    const singleStory = PAPERS_STORY.filter(e => e.id === route.params.id)
    const singleStoryID = singleStory[0].relatedStory
    const allStories = allStoriesByNewestDate()
    const relatedStory = allStories.filter((e) => e.id === singleStoryID)
    relatedSingleStory.value = relatedStory[0]
  }
  function getAllTags() {
    topicTags.value = allTags()
  }
  function getAllStories() {
    allStories.value = allStoriesByNewestDate()
  }
  function getProfessionCardContent() {
    professionValue = getRandomProfession()
  }
  useSeoMeta({
    title: () => story.value?.title + ' - ' + story.value?.storyWriter.name,
    description: () => story.value?.teaser,
    ogTitle: () => story.value?.title,
    ogDescription: () => story.value?.teaser,
    ogImage: () => `https://wien-86d0f.web.app/stories/${story.value?.headerImg}`,
    ogUrl: () => `https://wien-86d0f.web.app/prica/poslovi/${story.value?.slug}`
  });
</script>
