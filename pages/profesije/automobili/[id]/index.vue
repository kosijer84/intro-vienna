<template>
  <div class="p-single-profession">
    <div class="row">
      <div class="col-md-8">
        <img
          v-if="profession?.headerImg"
          :src="`/general/${profession?.headerImg}`"
          class="card-img-top"
          alt="price image"
        >
        <div class="m-tag-frame">
          <div class="row">
            <div class="col">
              <Button
                @click="$router.go(-1)"
                link
                class="mb-3 text-decoration-none fw-bold ps-0"
              >
              <span class="back-action">
                <fa-icon icon="fa-solid fa-circle-chevron-left" class="text-primary me-1"/>
              </span>
                Nazad na pretragu
              </Button>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <h1>{{profession?.title}}</h1>
              <p class="mb-3">
                <span><fa-icon icon="fa-solid fa-location-dot" class="me-2 text-secondary"/></span>
                <span class="text-primary me-1 fw-bold">{{profession?.workshopPlace?.address}}</span>,
                <span>{{profession?.workshopPlace?.city}}</span>
              </p>
              <p>{{profession?.teaser}}</p>
            </div>
            <div class="col-12 mt-4">
              <nav>
                <div class="nav nav-tabs" id="nav-tab" role="tablist">
                  <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">
                    <span class="d-none d-md-inline">O nama</span>
                    <span><fa-icon icon="fa-solid fa-industry" class="me-2 text-primary d-md-none"/></span>
                  </button>
                  <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">
                    <span class="d-none d-md-inline">Zaposleni </span>
                    <span><fa-icon icon="fa-solid fa-users" class="me-2 text-primary d-md-none"/></span>
                    <b class="text-secondary">({{professionStaff.length}})</b>
                  </button>
                  <button v-if="professionJobs.length" class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">
                    <span class="d-none d-md-inline">Poslovi </span>
                    <span><fa-icon icon="fa-solid fa-briefcase" class="me-2 text-primary d-md-none"/></span>
                    <b class="text-secondary">({{professionJobs.length}})</b>
                  </button>
                </div>
              </nav>
              <div class="tab-content" id="nav-tabContent">
                <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabindex="0">
                  <div v-for="(desc, index) in profession?.content" :key="index" class="mt-4">
                    <h4>{{desc.title}}</h4>
                    <div v-html="desc.description"></div>
                  </div>
                </div>
                <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabindex="0">
                  <div class="mt-4">
                    <div class="row row-cols-1 row-cols-lg-2 g-3">
                      <div v-for="(person, index) in professionStaff" :key="index" class="m-writer mb-2 col">
                        <img v-if="person.img" :src="'/writer-profile/' + `${person.img}`" :alt="person.name">
                        <span v-else class="m-writer-icon">
                          <fa-icon icon="fa-solid fa-user-tie"></fa-icon>
                        </span>
                        <div>
                          <h5 class="fw-bold mb-0">{{person.name}}</h5>
                          <p class="mb-0">{{person.role}}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabindex="0">
                  <div class="row row-cols-1">
                    <div v-for="(job, index) in professionJobs" :key="index" class="col">
                      <OProfessionJob :profession-job="job"/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-md-9">
        <MHeaderCard :new-story="latestStory.value as any"/>
      </div>
      <div class="col-md-3">
        <MCustomCard
          :card-title="cardPaypal.title"
          :card-subtitle="cardPaypal.subtitle"
          :card-image="cardPaypal.image"
          :external-link="cardPaypal.link"
          :external-link-name="cardPaypal.linkName"
          h100
          class="m-paypal-support-card mt-3 mt-md-0"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {onMounted, reactive, ref} from "#imports";
  import {getOneLatestStory} from "~/helpers/allStoriesHelper";
  import {CARS_PROFESSION} from "~/constants/professions/cars";
  import OProfessionJob from "~/components/organisms/OProfessionJob.vue";

  const profession = ref([] as any)
  const professionStaff = ref([] as any)
  const professionJobs = ref([] as any)
  const latestStory = reactive({} as any)
  const route = useRoute()
  const processEnv = ref(false)
  const cardPaypal = reactive({
    title: 'Pametni.rs',
    subtitle: 'Sve o pametnim uređajima',
    image: '/general/paypal-support.png',
    link: 'https://pametni.rs/',
    linkName: 'Saznaj Više',
  })

  onMounted(() => {
    singleProfession()
    getLatestStory()
    checkENV()
  })
  function getLatestStory() {
    latestStory.value = getOneLatestStory()
  }
  function singleProfession() {
    const single = CARS_PROFESSION.filter((e) => e.id === route.params.id)[0]
    profession.value = single
    professionStaff.value = single.staff
    professionJobs.value = single.jobs
  }
  function checkENV() {
    if(process.env.NODE_ENV === 'development') {
      processEnv.value = true
    }
  }
  useSeoMeta({
    title: () => profession.value?.title,
    description: () => profession.value?.teaser,
    ogTitle: () => profession.value?.title,
    ogDescription: () => profession.value?.teaser,
    ogImage: () => `https://wien-86d0f.web.app/${profession.value?.headerImg}`,
    ogUrl: () => `https://wien-86d0f.web.app/profesije/automobili/${profession.value?.slug}`
  });
</script>
