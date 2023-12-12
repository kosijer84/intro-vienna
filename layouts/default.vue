<template>
  <Navigation/>
  <div class="t-main-frame" :class="getBgClass">
    <div class="container">
      <slot />
    </div>
  </div>
  <OFooter/>
</template>
<script setup lang="ts">
  import {computed} from "#imports";
  useSeoMeta({
    title: () => 'Austrija - Moj odlazak i prilagođavanje',
    description: () => 'Stranicu sam napravio da bih opisao svoje iskustvo vezano za odlazak u Austriju, pronalaženje posla, škole za klince, kako do stana prvi put i susretanje sa papirologijom i nemačkim jezikom.',
    ogTitle: () => 'Austrija - Moj odlazak i prilagođavanje',
    ogDescription: () => 'Stranicu sam napravio da bih opisao svoje iskustvo vezano za odlazak u Austriju, pronalaženje posla, škole za klince, kako do stana prvi put i susretanje sa papirologijom i nemačkim jezikom.',
    ogImage: () => `https://wien-86d0f.web.app/general/vienna-general.jpeg`,
    ogUrl: () => `https://wien-86d0f.web.app/general/stefan-platz.jpeg`
  });
  const route = useRoute()
  const getBgClass = computed(() => {
    if(route.name === 'prica-poslovi') return 'bg-primary bg-gradient bg-opacity-10'
    if(route.name === 'prica-troskovi') return 'bg-secondary bg-gradient bg-opacity-10'
    if(route.name === 'prica-papiri') return 'bg-success bg-gradient bg-opacity-10'
    if(route.name === 'prica-stanovi') return 'bg-warning bg-gradient bg-opacity-10'
    if(route.name === 'prica-skole') return 'bg-info bg-gradient bg-opacity-10'
    if(route.name === 'prica-uopsteno') return 'bg-green bg-gradient bg-opacity-10'
    if(route.name === 'zajednica-developera') return 'bg-primary bg-gradient bg-opacity-50'
  })
</script>
