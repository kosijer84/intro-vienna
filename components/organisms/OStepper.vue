<template>
  <div>
    <div class="stepper mt-5">
      <div
        v-for="(step, index) in steps"
        :key="index"
        :class="['step', { active: index === currentStep }]"
        @click="goToStep(index)"
      >
        {{ index + 1 }}
      </div>
    </div>

    <div class="button-container">
      <button @click="previousStep" :disabled="currentStep === 0">Back</button>
      <button @click="nextStep" :disabled="currentStep === steps - 1">Next</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  data() {
    return {
      currentStep: ref(0),
      steps: 5, // Set the number of steps
    };
  },
  methods: {
    nextStep() {
      if (this.currentStep < this.steps - 1) {
        this.currentStep++;
      }
    },
    previousStep() {
      if (this.currentStep > 0) {
        this.currentStep--;
      }
    },
    goToStep(index: number) {
      this.currentStep = index;
    },
  },
});
</script>

<style scoped>
.stepper {
  display: flex;
  justify-content: space-between;
  cursor: pointer; /* Add a pointer cursor to indicate clickability */
}

.step {
  width: 30px;
  height: 30px;
  background-color: #ddd;
  border: 2px solid #aaa;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.step.active {
  background-color: #007bff;
  color: #fff;
}

.button-container {
  display: flex;
  justify-content: space-between;
}
</style>
