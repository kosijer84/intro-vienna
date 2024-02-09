<template>
  <div class="p-dev-community">
    <div class="row">
      <div class="col">
        <MHeaderStaticCard
          :back-image="devHeaderContent.image"
          :front-title="devHeaderContent.title"
          :front-subtitle="devHeaderContent.subtitle"
        />
      </div>
    </div>
    <div class="row mt-5 mb-3">
      <div class="col">
        <h1>DEV događaji u Austriji.</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="bg-white p-3 h-100" style="border-radius: 5px">
          <h2>We are developers</h2>
          <p class="fw-bold">Europe’s #1 Developer Community</p>
          <p class="mb-5">Na jednom mestu svi događaji u Beču, sve vezano za development, kontakti, kompanije i poslovi.
            <a href="https://www.wearedevelopers.com/" class="fw-bold text-decoration-none" target="_blank">Više na linku</a>.
          </p>
        </div>
      </div>
      <div class="col-md-6">
        <div class="bg-white p-3 h-100" style="border-radius: 5px">
          <h2>Meetup.com</h2>
          <p class="fw-bold">Svi meetup-i na jednom mestu</p>
          <p class="mb-5">Pored ostalih događaja u svetu, ovde možete videti događaje koji se u nekom narednom periodu organizuju u Beču.
            <a href="https://www.meetup.com/vienna-game-dev-meetup/" class="fw-bold text-decoration-none" target="_blank">Više na linku</a>.
          </p>
        </div>
      </div>
    </div>
    <div class="row mt-5">
      <div class="col-lg-9">
        <OLastTopicsCard :stories="allStories.slice(0,6)"/>
      </div>
      <div class="col-md-3">
        <MCustomCard
          :card-title="cardProfessions.title"
          :card-subtitle="cardProfessions.subtitle"
          :card-image="cardProfessions.image"
          :card-link="cardProfessions.link"
          :card-link-name="cardProfessions.linkName"
          class="mt-3 mt-md-0"
        />
        <MCustomCard
          :card-title="cardIAmProfession.title"
          :card-content="cardIAmProfession.subtitle"
          :card-link="cardIAmProfession.link"
          :card-link-name="cardIAmProfession.linkName"
          :card-image="cardIAmProfession.image"
          secondary
          class="my-4"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
  import {reactive, ref, onMounted} from "#imports"
  import {allStoriesByNewestDate} from '~/helpers/allStoriesHelper'

  const allStories = ref([] as any)
  const devHeaderContent = reactive({
    title: 'Zajednica developera u Austriji',
    subtitle: 'Za dodatne informacije molim vas da me kontakirate :)',
    image: '/profession.png',
  })
  const cardProfessions = reactive({
    title: 'Profesije',
    subtitle: 'Možete pronaći naše ljude koji se bave raznim profesijama u Austriji',
    image: '/general/profession.png',
    link: '/profesije/',
    linkName: 'Saznaj više',
  })
  const cardIAmProfession = reactive({
    title: 'Ja sam profesionalac',
    subtitle: 'Ukoliko se bavite nekom profesijom a želeli bi da budete prepoznati na našem sajtu, molimo Vas da nas kontaktirate.',
    image: '/general/professions.svg',
    link: '/profesije/ja-sam-profesionalac/',
    linkName: 'Kontakt',
  })

  onMounted(() => {
    getAllStories()
  })

  function getAllStories() {
    allStories.value = allStoriesByNewestDate()
  }
</script>
