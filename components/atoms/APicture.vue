<template>
  <div>
    <picture>
      <source v-if="smImage" :media="`(min-width: ${smWidth})`" :srcset="require(`/static/${smImage}`)" />
      <source v-if="mdImage" :media="`(min-width: ${mdWidth})`" :srcset="require(`/static/${mdImage}`)" />
      <source v-if="lgImage" :media="`(min-width: ${lgWidth})`" :srcset="require(`/static/${lgImage}`)" />
      <img :src="require(`/static/${defaultImage}`)" :alt="alt"/>
    </picture>
  </div>
</template>
<script>
import { MD_SIZE, SM_SIZE, LG_SIZE } from "~/constants/images";

export default {
  props: {
    defaultImage: String,
    alt: String,

    smImage: String,
    smWidth: {
      type: String,
      default: SM_SIZE
    },

    mdImage: String,
    mdWidth: {
      type: String,
      default: MD_SIZE
    },

    lgImage: String,
    lgWidth: {
      type: String,
      default: LG_SIZE
    }
  }
};
</script>
