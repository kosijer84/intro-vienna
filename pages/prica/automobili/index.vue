<template>
  <div class="row">
    <MHeadline
      title="Sve teme vezane za automobile u Austriji"
      bg-title="Auto"
      title-size="h1"
      title-bold
      class="mt-5"
      link-back
    />
  </div>
  <div class="row">
    <div class="col-md-9">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-if="allCarStories.length"
          v-for="(story, index) in allCarStories"
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
            card-title="Ja sam profesionalac"
            card-content="Ukoliko se bavite nekom profesijom a želeli bi da budete prepoznati na našem sajtu, molimo Vas da nas kontaktirate."
            card-link="/profesije/ja-sam-profesionalac/"
            card-link-name="Kontakt"
            card-image="/general/professions.svg"
            secondary
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
import {onMounted, ref} from "#imports";
import {allTags} from "~/helpers/allStoriesHelper";
import {CARS_STORY} from "~/constants/blogStories/cars";

const allCarStories = ref([] as any)
const topicTags = ref([] as any)
onMounted(() => {
  getCarStories()
  getAllTags()
})

function countReadingTime(time: any) {
  const timeCount = time.reduce((total: any, currentValue: any) => total + currentValue, 0);
  return timeCount > 1000 ? 6 : 4
}
function getAllTags() {
  topicTags.value = allTags()
}
function getCarStories() {
  const carStories = CARS_STORY
  carStories.sort((a, b) => b.date - a.date)
  allCarStories.value = carStories
}
</script>
