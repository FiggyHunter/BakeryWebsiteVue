<template>
  <div class="stepper">
    <button
      :class="[
        `step`,
        { active: firstLineColor },
        { activeborder: firstLineColor },
        { yellow: pageNumber === 1 },
      ]"
      @click="$emit('oneClicked', 1)"
    >
      1
    </button>

    <span :class="[`one-two`, { active: firstLineColor }]"></span>
    <button
      :class="[`step`, { active: secondLineColor }, { yellow: pageNumber === 2 }]"
      :disabled="pageNumber !== 2 && pageNumber !== 3"
      @click="$emit('twoClicked', 2)"
      >2</button
    >
    <span :class="[`one-two`, { active: secondLineColor }]"></span>
    <button :class="[`step`, { yellow: pageNumber === 3 }]" :disabled="pageNumber !== 3">3</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  pageNumber: { type: Number, default: 1 },
});

const firstLineColor = computed(() => {
  if (props.pageNumber === 3 || props.pageNumber === 2) return true;
  return false;
});

const secondLineColor = computed(() => {
  if (props.pageNumber === 3) return true;
  return false;
});
</script>

<style lang="scss" scoped>
.stepper {
  display: grid;
  grid-template-columns: min-content 1fr min-content 1fr min-content;
  align-items: center;
  padding: 1rem;

  span {
    background-color: white;
    height: 0.1rem;
    transition: background-color 1s;
  }
  .step {
    font-size: 1rem;
    color: white;
    border: 2px solid white;
    border-radius: 100rem;
    padding: 0.5rem 1rem;
    transition: all 0.5s;
  }

  .done {
    background-color: #f9b500;
    opacity: 1 !important;
  }
  .active {
    background-color: limegreen;
    border-color: limegreen;
  }

  .activeborder {
    border-color: limegreen;
  }
  .yellow {
    border-color: #f9b500;
  }
}
</style>
