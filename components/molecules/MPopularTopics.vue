<template>
  <div :class="{'m-tag-frame': withFrame}">
    <h6 v-if="tagsTitle">{{tagsTitle}}</h6>
    <span v-for="(tag, index) in tags" :key="index">
      <nuxt-link
        v-if="tag === profession"
        :to="`/${tagVariant}/${tag}`"
        class="btn btn-outline-primary fw-bold me-2 text-capitalize mb-2"
      >
        {{tag}}
      </nuxt-link>
      <nuxt-link
        v-else
        :to="`/${tagVariant}/${tag}`"
        class="btn btn-primary text-white fw-bold me-2 text-capitalize mb-2"
      >
       {{tag}}
      </nuxt-link>
    </span>
  </div>
</template>
<script setup lang="ts">
import {onMounted, ref} from "#imports";

const route = useRoute()
const profession = ref('')

onMounted(() => {
  const urlSegments = route.path.split('/');
  profession.value = urlSegments[urlSegments.length - 1];
})
defineProps({
  tags: {
    type: Array,
    required: true
  },
  withFrame: {
    type: Boolean,
    default: false
  },
  tagsTitle: {
    type: String,
  },
  tagVariant: {
    type: String,
    default: 'prica'
  }
})
</script>
