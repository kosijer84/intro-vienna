<template>
  <div class="row">
    <MHeadline
      title="Troškovi u Austriji"
      bg-title="Beč"
      title-size="h1"
      title-bold class="mt-5"
      link-back
    />
  </div>
  <div class="row">
    <div class="col-md-9">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-if="allCostStories.length"
          v-for="(story, index) in allCostStories"
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
            :external-link="cardPaypal.link"
            :external-link-name="cardPaypal.linkName"
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
import {COST_STORY} from "~/constants/blogStories/costs";

const allCostStories = ref([] as any)
const topicTags = ref([] as any)
const cardPaypal = reactive({
  title: 'Pametni.rs',
  subtitle: 'Sve o pametnim uređajima',
  image: '/general/paypal-support.png',
  link: 'https://pametni.rs/',
  linkName: 'Saznaj Više',
})

onMounted(() => {
  getCostStories()
  getAllTags()
})

function countReadingTime(time: any) {
  const timeCount = time.reduce((total: any, currentValue: any) => total + currentValue, 0);
  return timeCount > 1000 ? 6 : 4
}
function getAllTags() {
  topicTags.value = allTags()
}
function getCostStories() {
  const costStories = COST_STORY
  costStories.sort((a, b) => b.date - a.date)
  allCostStories.value = costStories
}
</script>
