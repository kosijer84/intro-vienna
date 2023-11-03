<template>
  <div class="m-headline" :style="`background-color:${cardBG}`">
    <div class="d-flex justify-content-between align-items-start">
      <div>
        <span v-if="bgTitle" class="bg-title" :class="[bgTitleSize, 'display-1']">{{bgTitle}}</span>
        <h1 :class="[titleSize, getTitleStyle]" class="mb-1">{{ title }}</h1>
        <p v-if="subtitle">{{ subtitle }}</p>
        <p v-if="teaser">{{teaser}}</p>
      </div>
      <Button
        v-if="actionName"
        link
        :class="[actionSize, getBtnStyle]"
        @click="$emit('action')"
      >
        {{ actionName }}
        <fa-icon icon="fa-solid fa-circle-chevron-right" class="text-primary ms-1"/>
      </Button>
      <Button
        v-if="linkBack"
        @click="$router.go(-1)"
        circle-var
        class="ms-2"
      >
        <fa-icon icon="fa-solid fa-circle-chevron-left" class="text-primary"/>
      </Button>
    </div>
  </div>
</template>

<script setup>
import {computed} from "#imports";

const props = defineProps({
  actionName: String,
  title: String,
  titleSize: String,
  titleBold: Boolean,
  subtitle: String,
  teaser: String,
  bgTitle: String,
  bgTitleSize: String,
  actionSize: String,
  secondary: Boolean,
  cardBG: String,
  shadow: Boolean,
  linkBack: Boolean
})
const getTitleStyle = computed(() => {
  return {
    'fw-bold': props.titleBold
  }
})
const getBtnStyle = computed(() => {
  return {
    'btn-secondary': props.secondary,
  }
})
</script>
