<template>
  <nav class="o-navigation shadow-sm navbar fixed-top navbar-expand-lg">
    <div class="container">
      <a class="navbar-brand" href="/">Moj odlazak <br> <span class="text-uppercase fw-bolder" style="font-size: 14px">u Austriju</span></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-lg-auto">
          <li class="nav-item">
            <NuxtLink class="nav-link" to="/">Početna</NuxtLink>
          </li>
          <li class="nav-item dropdown" :class="activeLinkPro">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Profesije
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li v-for="(link, index) in dropdownProfessionLinks" :key="index">
                <NuxtLink class="dropdown-item text-capitalize" :to="`/profesije/${link}`">{{link.replace('-', ' ')}}</NuxtLink>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <NuxtLink class="dropdown-item text-capitalize" to='/profesije/'>Sve Profesije</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item dropdown" :class="activeLinkStory">
            <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Teme
            </a>
            <ul class="dropdown-menu dropdown-menu-end">
              <li v-for="(link, index) in dropdownLinks" :key="index">
                <NuxtLink class="dropdown-item text-capitalize" :to="`/prica/${link}`">{{link}}</NuxtLink>
              </li>
              <li><hr class="dropdown-divider"></li>
              <li>
                <NuxtLink class="dropdown-item text-capitalize" to='/prica/'>Sve priče</NuxtLink>
              </li>
            </ul>
          </li>
          <li class="nav-item d-flex align-items-center ms-2">
            <NuxtLink class="btn btn-secondary btn-sm" to='/profesije/ja-sam-profesionalac/'>Ja sam profesionalac</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup lang="ts">
  import {computed, onMounted, ref} from "#imports";
  import {allTags} from "~/helpers/allStoriesHelper";
  import {allProfessionTags} from "~/helpers/allProfessionsHelper";

  const dropdownLinks = ref([] as any)
  const dropdownProfessionLinks = ref([] as any)
  const route = useRoute()
  const activeLinkPro = computed(() => {
    if(route.name === 'profesije') return 'link-frame-active'
  })
  const activeLinkStory = computed(() => {
    if(route.name === 'prica') return 'link-frame-active'
  })

  onMounted(() => {
    getAllTags()
    getAllProfessionTags()
  })
  function getAllTags() {
    dropdownLinks.value = allTags()
  }
  function getAllProfessionTags() {
    dropdownProfessionLinks.value = allProfessionTags()
  }
</script>
