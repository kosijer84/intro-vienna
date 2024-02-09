<template>
  <div class="row">
    <div class="col">
      <MHeaderCard :new-story="latestStory.value as any"/>
    </div>
  </div>
  <div class="row">
    <div class="col-md-12">
      <MHeadline title="Popularne teme" title-bold title-size="h3"/>
      <MPopularTopics :tags="topicTags as any"/>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <MHeadline
        title="Najnovije priče"
        title-size="h3"
        class="mt-5"
        action-name="Vidi sve"
        @action="goToAllStories"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-md-9">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-if="allStories.length"
          v-for="(story, index) in allStories.slice(0, 3)"
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
          v-for="n in 3"
          :key="n"
          class="col"
        >
          <MStoryCardSkeleton/>
        </div>
      </div>
    </div>
    <div class="col-md-3">
      <MCustomCard
        info
        :card-title="cardProfessions.title"
        :card-subtitle="cardProfessions.subtitle"
        :card-image="cardProfessions.image"
        :card-link="cardProfessions.link"
        :card-link-name="cardProfessions.linkName"
        h100
        class="mt-3 mt-md-0"
      />
    </div>
  </div>
  <div class="row">
    <div class="col">
      <MHeadline
        title="Posao u Austriji"
        title-size="h3"
        class="mt-5"
        action-name="Vidi sve"
        @action="goToAllJobs"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-md-9">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-if="allJobStories.length"
          v-for="(story, index) in allJobStories.slice(0, 3)"
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
          v-for="n in 3"
          :key="n"
          class="col"
        >
          <MStoryCardSkeleton/>
        </div>
      </div>
    </div>
    <div class="col-md-3">
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
  <div class="row">
    <div class="col-12">
      <MExternalAssCard/>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <MHeadline
        title="Stan u Austriji"
        title-size="h3"
        class="mt-5"
        action-name="Vidi sve"
        @action="goToAllFlats"
      />
    </div>
  </div>
  <div class="row">
    <div class="col-md-9">
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-if="allFlatStories.length"
          v-for="(story, index) in allFlatStories.slice(0, 3)"
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
          v-for="n in 3"
          :key="n"
          class="col"
        >
          <MStoryCardSkeleton/>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col">
          <MDevCommunityCard/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <MHeadline
            title="Škole u Austriji"
            title-size="h3"
            class="mt-5"
            action-name="Vidi sve"
            @action="goToAllSchools"
          />
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-if="allSchoolStories.length"
          v-for="(story, index) in allSchoolStories.slice(0, 3)"
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
          v-for="n in 3"
          :key="n"
          class="col"
        >
          <MStoryCardSkeleton/>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <MHeadline
            title="Papiri u Austriji"
            title-size="h3"
            class="mt-5"
            action-name="Vidi sve"
            @action="goToAllPapers"
          />
        </div>
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div
          v-if="allPapersStories.length"
          v-for="(story, index) in allPapersStories.slice(0, 3)"
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
          v-for="n in 3"
          :key="n"
          class="col"
        >
          <MStoryCardSkeleton/>
        </div>
      </div>
    </div>
    <div class="col-md-3 mt-3 mt-md-0">
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
</template>
<script setup lang="ts">
  import {onMounted, ref, reactive} from "#imports"
  import {allStoriesByNewestDate} from '~/helpers/allStoriesHelper'
  import {getOneLatestStory} from "~/helpers/allStoriesHelper";
  import {allTags} from "~/helpers/allStoriesHelper";
  import {JOB_STORY} from "~/constants/blogStories/job";
  import {FLAT_STORY} from "~/constants/blogStories/flat";
  import {SCHOOL_STORY} from "~/constants/blogStories/school";
  import {PAPERS_STORY} from "~/constants/blogStories/papers";

  const allStories = ref([] as any)
  const allJobStories = ref([] as any)
  const allFlatStories = ref([] as any)
  const allPapersStories = ref([] as any)
  const allSchoolStories = ref([] as any)
  const topicTags = ref([] as any)
  const latestStory = reactive({} as any)
  const router = useRouter()
  const processEnv = ref(false)
  const cardProfessions = reactive({
    title: 'Profesije',
    subtitle: 'Možete pronaći naše ljude koji se bave raznim profesijama u Austriji',
    image: '/general/profession.png',
    link: '/profesije/',
    linkName: 'Saznaj više',
  })
  const cardPaypal = reactive({
    title: 'Pametni.rs',
    subtitle: 'Sve o pametnim uređajima',
    image: '/general/paypal-support.png',
    link: 'https://pametni.rs/',
    linkName: 'Saznaj Više',
  })

  onMounted(() => {
    getAllStories()
    getLatestStory()
    getAllTags()
    sortAndAssignStories(JOB_STORY, allJobStories);
    sortAndAssignStories(PAPERS_STORY, allPapersStories);
    sortAndAssignStories(FLAT_STORY, allFlatStories);
    sortAndAssignStories(SCHOOL_STORY, allSchoolStories);
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
  function getAllStories() {
    const allStoriesByDate = allStoriesByNewestDate()
    allStories.value = allStoriesByDate.slice(1)
  }
  function getLatestStory() {
    latestStory.value = getOneLatestStory()
  }
  function sortAndAssignStories(storyType: any, targetArray: { value: any; }) {
    const stories = storyType;
    stories.sort((a: { date: number; }, b: { date: number; }) => b.date - a.date);
    targetArray.value = stories;
  }
  function getAllTags() {
    topicTags.value = allTags()
  }
  function goToAllStories() {
    router.push('/prica')
  }
  function goToAllJobs() {
    router.push('/prica/poslovi')
  }
  function goToAllFlats() {
    router.push('/prica/stanovi')
  }
  function goToAllPapers() {
    router.push('/prica/papiri')
  }
  function goToAllSchools() {
    router.push('/prica/skole')
  }
</script>
