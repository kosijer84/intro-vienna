<template>
  <div class="p-single-story">
    <div class="row">
      <div class="col-12">
        <div class="m-img-frame">
          <img
            v-if="singleStory"
            :src="'/stories/' + `${singleStory?.headerImg}`"
            :alt="singleStory?.headerImg"
          />
          <h3 class="m-img-frame-tag-name">{{singleStory?.tag}}</h3>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-8 col-lg-9">
        <MHeadline
          :title="singleStory?.title"
          :bg-title="singleStory?.bgTitle"
          :teaser="singleStory?.teaser"
          title-size="h1"
          title-bold class="mt-5"
          link-back
        />
        <MWriterDetails
          :writer-name="singleStory?.storyWriter?.name"
          :writer-img="singleStory?.storyWriter?.img"
          :story-date="singleStory?.date"
          :reading-time="readingTime"
        />
        <div v-for="(content, index) in singleStory?.content" :key="index" class="mt-5">
          <h3>{{content.title}}</h3>
          <p v-html="content.description"></p>
        </div>
        <div v-if="relatedStory" class="row row-cols-1 row-cols-md-2 g-4 mt-5">
          <div class="col">
            <h5 class="mb-2 fw-bolder">Povezana priča</h5>
            <div class="card m-story-card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    :src="'/stories/' + `${relatedStory?.headerImg}`"
                    class="img-fluid rounded-start object-fit-cover w-100"
                    style="height: 200px"
                    alt="related story image"
                  >
                </div>
                <div class="col-md-8">
                  <div class="card-body d-flex flex-column h-100">
                    <h5 class="card-title">{{relatedStory?.title}}</h5>
                    <p class="card-text small mb-2">{{relatedStory?.teaser}}</p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                      <small class="text-body-secondary">
                        {{new Date(relatedStory?.date).toLocaleDateString()}}
                      </small>
                      <NuxtLink
                        :to="`/prica/${relatedStory?.tag}/${relatedStory?.id}`"
                        class="a-link ms-auto"
                      >
                        Pročitaj
                        <fa-icon
                          icon="fa-solid fa-circle-chevron-right"
                          class="text-primary ms-1"
                        />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <h5 class="mb-2 fw-bolder">Profesija</h5>
            <div class="card m-story-card mb-3">
              <div class="row g-0">
                <div class="col-md-4">
                  <img
                    :src="'/general/' + `${professionCard?.image}`"
                    class="img-fluid rounded-start object-fit-cover w-100"
                    style="height: 200px"
                    alt="related story image"
                  >
                </div>
                <div class="col-md-8">
                  <div class="card-body d-flex flex-column h-100">
                    <h5 class="card-title text-capitalize">{{professionCard?.title}}</h5>
                    <p class="card-text small mb-5">
                      {{professionCard?.description}}
                    </p>
                    <div class="d-flex justify-content-between align-items-center mt-auto">
                      <NuxtLink
                        :to="`/profesije/${professionCard?.link}/`"
                        class="a-link ms-auto"
                      >
                        Pogledaj
                        <fa-icon
                          icon="fa-solid fa-circle-chevron-right"
                          class="text-primary ms-1"
                        />
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-lg-3 mt-5">
        <div v-if="processEnv" class="a-g-placeholder h-25">G placeholder</div>
        <div v-else class="a-g-placeholder h-25">Prod G placeholder</div>
        <MCustomCard
          :card-title="cardPaypal.title"
          :card-subtitle="cardPaypal.subtitle"
          :card-image="cardPaypal.image"
          :card-link="cardPaypal.link"
          :card-link-name="cardPaypal.linkName"
          class="m-paypal-support-card mt-3"
        />
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-8">
        <ANote/>
      </div>
      <div class="col-md-4">
        <MPopularTopics :tags="topicTags as any" tags-title="Teme" with-frame class="h-100 mt-3 mt-md-0"/>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col-lg-8">
      <OLastTopicsCard :stories="allStories.slice(0,4)" class="mt-3"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import {onMounted, reactive, ref} from "#imports";

  const props = defineProps({
    singleStory: {} as any,
    relatedStory: {} as any,
    allStories: [] as  any,
    topicTags: [] as any,
    professionCard: '' as any
  })
  const cardPaypal = reactive({
    title: 'Podržite nas na paypal-u',
    subtitle: 'Častite nas pivom ili kafom :)',
    image: '/general/paypal-support.png',
    link: '/',
    linkName: 'Paypal',
  })

  const processEnv = ref(false)
  const readingTime = ref(0)

  onMounted(() => {
    checkENV()
    readingTimeCount()
  })
  function readingTimeCount() {
    const timeCount = props.singleStory?.reduce((total: any, currentValue: any) => total + currentValue, 0);
    readingTime.value = timeCount > 1000 ? 6 : 4
  }
  function checkENV() {
    if(process.env.NODE_ENV === 'development') {
      processEnv.value = true
    }
  }
</script>
