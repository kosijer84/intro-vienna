<template>
  <div class="m-custom-card" :class="[bgStyle, heightStyle]">
    <h5 class="m-custom-card-title">
      <span>
        <slot name="icon"></slot>
      </span>
      {{cardTitle}}
    </h5>
    <p class="small">{{cardSubtitle}}</p>
    <img
      v-if="cardImage"
      :src="cardImage"
      alt="card image"
      class="img-fluid my-2"
    >
    <p v-if="cardContent">{{cardContent}}</p>
    <nuxt-link
      v-if="cardLinkName"
      :to="cardLink"
      class="a-link ms-auto"
      :class="{'text-white' : info || primary || secondary}"
    >
      {{cardLinkName}}
      <fa-icon
        icon="fa-solid fa-circle-chevron-right"
        class="text-primary ms-1"
        :class="{'text-white' : info || primary || secondary}"
      />
    </nuxt-link>
    <a class="a-link ms-auto" v-if="externalLink" :href="externalLink" target="_blank">
      {{externalLinkName}}
      <fa-icon icon="fa-solid fa-circle-chevron-right" class="text-primary ms-1"/>
    </a>
  </div>
</template>
<script setup lang="ts">
  import {computed} from "#imports";

  const props = defineProps({
    primary: Boolean,
    secondary: Boolean,
    danger: Boolean,
    success: Boolean,
    warning: Boolean,
    warningSubtle: Boolean,
    info: Boolean,
    infoSubtle: Boolean,
    h100: Boolean,
    externalLink: String,
    externalLinkName: String,
    cardTitle: {
      type: String,
    } as any,
    cardSubtitle: {
      type: String,
    } as any,
    cardContent: {
      type: String
    } as any,
    cardLink: {
      type: String
    } as any,
    cardLinkName: {
      type: String
    } as any,
    cardImage: {
      type: String
    } as any
  })
  const heightStyle = computed(() => {
    return {
      'h-100': props.h100
    }
  })
  const bgStyle = computed(() => {
    return {
      'bg-primary text-white': props.primary,
      'bg-secondary text-white': props.secondary,
      'bg-success text-white': props.success,
      'bg-danger': props.danger,
      'bg-warning': props.warning,
      'bg-warning-subtle': props.warningSubtle,
      'bg-info text-white': props.info,
      'bg-info-subtle': props.infoSubtle,
    };
  })
</script>
