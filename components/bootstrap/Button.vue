<template>
  <button
    v-bind="$attrs" :disabled="disabled"
    :type="type" :class="['btn', getCircleVariant, getTextVariant, getStyle, getSize, {'loading' : loading}]"
  >
    <slot v-if="!close"></slot>
    <span v-if="loading" class="spinner-border ms-2" role="status">
      <span class="visually-hidden">Loading...</span>
    </span>
  </button>
</template>

<script setup>
import {computed} from "#imports";

const props = defineProps({
  disabled: Boolean,
  loading: Boolean,
  primary: Boolean,
  secondary: Boolean,
  danger: Boolean,
  success: Boolean,
  warning: Boolean,
  info: Boolean,
  link: Boolean,
  close: Boolean,
  outlined: Boolean,
  small: Boolean,
  large: Boolean,
  full: Boolean,
  whiteVar: Boolean,
  circleVar: Boolean,
  type: {
    default: 'button',
    validator: (value) => ['button', 'submit'].indexOf(value) !== -1,
  },
});

const getSize = computed(() => {
  return {
    'btn-sm': props.small,
    'btn-lg': props.large,
    'w-100': props.full,
  }
})
const getTextVariant = computed(() => {
  return {
    'text-white': props.whiteVar,
  }
})
const getCircleVariant = computed(() => {
  return {
    'a-circle': props.circleVar
  }
})
const getStyle = computed(() => {
  if (props.link) return 'btn-link';
  if (props.close) return 'btn-close';
  if (props.outlined) {
    return {
      'btn-outline-primary': props.primary,
      'btn-outline-secondary': props.secondary,
      'btn-outline-success': props.success,
      'btn-outline-danger': props.danger,
      'btn-outline-warning': props.warning,
      'btn-outline-info': props.info,
    };
  }
  return {
    'btn-primary': props.primary,
    'btn-secondary': props.secondary,
    'btn-success': props.success,
    'btn-danger': props.danger,
    'btn-warning': props.warning,
    'btn-info': props.info,
  };
});
</script>
