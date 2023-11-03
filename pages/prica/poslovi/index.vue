<template>
  <div class="row">
    <MHeadline
      title="Poslovi u Austriji"
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
          v-if="allJobStories.length"
          v-for="(story, index) in allJobStories"
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
            :card-title="cardPametni.title"
            warning-subtle
            h100
            :card-content="cardPametni.content"
            :external-link="cardPametni.exLink"
            :external-link-name="cardPametni.exLinkName"
          >
            <template #icon>
              <fa-icon icon="fa-solid fa-newspaper" class="fs-3 text-primary"/>
            </template>
          </MCustomCard>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <MDevCommunityCard vertical class="mt-4 mt-md-0"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref, reactive} from "#imports";
import {allTags} from "~/helpers/allStoriesHelper";
import {JOB_STORY} from "~/constants/blogStories/job";

const allJobStories = ref([] as any)
const topicTags = ref([] as any)
const cardPametni = reactive({
  title: 'Pametni.rs',
  content: 'Sve na jednom mestu - vesti o pametnim uređajima, opisi pametnih uređaja, postavljajte oglase besplatno, iskoristite benefite shop-a.',
  exLink: 'https://pametni.rs/',
  exLinkName: 'Pametni.rs',
})

onMounted(() => {
  getJobStories()
  getAllTags()
})

function countReadingTime(time: any) {
  const timeCount = time.reduce((total: any, currentValue: any) => total + currentValue, 0);
  return timeCount > 1000 ? 6 : 4
}
function getAllTags() {
  topicTags.value = allTags()
}
function getJobStories() {
  const jobStories = JOB_STORY
  jobStories.sort((a, b) => b.date - a.date)
  allJobStories.value = jobStories
}
</script>
