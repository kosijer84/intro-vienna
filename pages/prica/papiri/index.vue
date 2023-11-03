<template>
  <div class="row">
    <MHeadline
      title="Papiri u Austriji"
      bg-title="Austrija"
      title-size="h1"
      title-bold class="mt-5"
      link-back
    />
  </div>
  <div class="row">
    <div class="col-md-9">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-if="allPaperStories.length"
          v-for="(story, index) in allPaperStories"
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
        <div class="col">
          <MCustomCard
            :card-title="cardPaypal.title"
            :card-subtitle="cardPaypal.subtitle"
            :card-image="cardPaypal.image"
            :card-link="cardPaypal.link"
            :card-link-name="cardPaypal.linkName"
            h100
            info
            class="m-paypal-support-card"
          />
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <MDevCommunityCard vertical class="mt-4 mt-md-0"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, reactive, ref} from "#imports";
  import {allTags} from "~/helpers/allStoriesHelper";
  import {PAPERS_STORY} from "~/constants/blogStories/papers";

  const allPaperStories = ref([] as any)
  const topicTags = ref([] as any)
  const cardPaypal = reactive({
    title: 'Podržite nas na paypal-u',
    subtitle: 'Častite nas pivom ili kafom :)',
    image: '/general/paypal-support.png',
    link: '/',
    linkName: 'Paypal',
  })

  onMounted(() => {
    getPapersStories()
    getAllTags()
  })

  function countReadingTime(time: any) {
    const timeCount = time.reduce((total: any, currentValue: any) => total + currentValue, 0);
    return timeCount > 1000 ? 6 : 4
  }
  function getAllTags() {
    topicTags.value = allTags()
  }
  function getPapersStories() {
    const papersStories = PAPERS_STORY
    papersStories.sort((a, b) => b.date - a.date)
    allPaperStories.value = papersStories
  }
</script>
