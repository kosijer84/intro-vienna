<template>
  <TSingleStory
    :single-story="story.value"
    :related-story="relatedSingleStory.value"
    :topic-tags="topicTags"
    :all-stories="allStories"
    :profession-card="professionValue"
  />
</template>
<script setup lang="ts">
  import {onMounted, reactive, ref} from "#imports"
  import {allStoriesByNewestDate, allTags} from '~/helpers/allStoriesHelper'
  import {getRandomProfession} from "~/helpers/getRandomProfession";
  import {GENERAL_STORY} from "~/constants/blogStories/general";

  const story = reactive({} as any)
  const relatedSingleStory = reactive({} as any)
  const allStories = ref([] as any)
  const topicTags = ref([] as any)
  const route = useRoute()
  let professionValue = reactive({})

  onMounted(() => {
    getAllStories()
    singleStory()
    getRelatedSingleStory()
    getAllTags()
    getProfessionCardContent()
  })

  function singleStory() {
    const singleStory = GENERAL_STORY.filter(e => e.id === route.params.id)
    story.value = singleStory[0]
  }
  function getRelatedSingleStory() {
    const singleStory = GENERAL_STORY.filter(e => e.id === route.params.id)
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
    ogImage: () => `https://odlazakuaustriju.com/stories/${story.value?.headerImg}`,
    ogUrl: () => `https://odlazakuaustriju.com/prica/poslovi/${story.value?.slug}`
  });
</script>
