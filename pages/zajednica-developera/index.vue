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
    <div class="row">
      <div class="col-12">
        <h2 class="mt-5">Čekajući...</h2>
        <p>Dok ne smislimo kako da se okupimo i koja će biti naša svrha pročitajte moju priču kako sam došao u Austriju ako vas ne mrzi :)</p>
        <p class="mb-5">Molim vas da me kontaktirate ukoliko imate neke ideje na
          <a href="mailto:danijel.kosijer@gmail.com" class="fw-bold text-decoration-none">Email</a>.
        </p>
      </div>
    </div>
    <div class="row">
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
    subtitle: 'Ova ideja je još u izradi i ako imate ideju za saradnju, molim vas da me kontakirate :)',
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
