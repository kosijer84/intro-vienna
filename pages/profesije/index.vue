<template>
  <div class="p-professions">
    <div class="row">
      <div class="col">
        <MHeadline
          title="Profesije"
          title-bold
          title-size="h3"
          subtitle="Izaberite profesiju o kojoj želite da saznate više informacija"
          link-back
          class="mt-5 mb-2"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-xl-8">
        <div class="row row-cols-1 row-cols-xl-2 g-4">
          <div
            v-for="(single, index) in cardProfession"
            :key="index"
            class="col"
          >
            <MCustomCard
              :card-title="single.title"
              :card-content="single.content"
              :card-link="single.link"
              :card-link-name="single.linkName"
              h100
            >
              <template #icon>
                <fa-icon :icon="`fa-solid ${single.icon}`" class="fs-2 d-block text-dark-emphasis mb-2"/>
              </template>
            </MCustomCard>
          </div>
        </div>
      </div>
      <div class="col-md-6 col-xl-4 mt-3 mt-md-0">
        <div v-if="processEnv" class="a-g-placeholder h-auto">G placeholder</div>
        <div v-else class="a-g-placeholder h-auto">Prod G placeholder</div>
        <MCustomCard
          card-title="Ja sam profesionalac"
          card-content="Ukoliko se bavite nekom profesijom a želeli bi da budete prepoznati na našem sajtu, molimo Vas da nas kontaktirate."
          card-link="/profesije/ja-sam-profesionalac/"
          card-link-name="Kontakt"
          card-image="/general/professions.svg"
          secondary
          class="my-4"
        />
        <OLastTopicsCard :stories="allStories.slice(0,3)" stacked/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {onMounted, ref} from "#imports";
  import {allStoriesByNewestDate} from '~/helpers/allStoriesHelper'
  import {allProfessionTags} from "~/helpers/allProfessionsHelper";
  import {PROFESSION_CARDS} from "~/constants/professions/cards";

  const allStories = ref([] as any)
  const professionTags = ref([] as any)
  const processEnv = ref(false)
  const cardProfession = ref([] as any)

  onMounted(() => {
    getAllStories()
    getAllTags()
    checkENV()
    getAllProfessionCards()
  })

  function checkENV() {
    if(process.env.NODE_ENV === 'development') {
      processEnv.value = true
    }
  }
  function getAllTags() {
    professionTags.value = allProfessionTags()
  }
  function getAllStories() {
    allStories.value = allStoriesByNewestDate()
  }
  function getAllProfessionCards() {
    cardProfession.value = PROFESSION_CARDS
  }
</script>
