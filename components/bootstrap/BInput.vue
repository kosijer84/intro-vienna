<template>
  <div class="m-input mb-2">
    <label v-if="label">{{ label }}</label>
    <input
      v-bind="$attrs"
      v-model="localValue"
      :type="visiblePassword ? 'text' : typeValue"
      class="form-control"
    />
    <span class="d-inline-flex small mt-1 fw-bold text-success">{{labelBellow}}</span>
    <div v-if="typeValue === 'password'" class="slot" @click="visiblePassword = !visiblePassword">
      <fa-icon v-if="!visiblePassword" icon="fa-solid fa-eye" title="Show Password"></fa-icon>
      <fa-icon v-else icon="fa-solid fa-eye-slash" title="Hide Password"></fa-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
  import {computed, ref} from 'vue';
  const props = defineProps({
    modelValue: String,
    label: String,
    labelBellow: String,
    typeValue: {
      type: String,
      default: 'text',
    },
  });
  const emit = defineEmits();
  const visiblePassword = ref(false)

  const localValue = computed({
    get: () => props.modelValue,
    set: (value) => emit('update:modelValue', value)
  })
</script>
