<template>
  <div class="stepper">
    <button
      @click="$emit('oneClicked')"
      :class="[`step`, { active: firstLineColor }, { activeborder: firstLineColor }, `yellow`]"
    >
      1
    </button>

    <span :class="[`one-two`, { active: firstLineColor }]"></span>
    <button :class="[`step`, { activeborder: firstLineColor }]" :disabled="!two">2</button>
    <span class="one-two"></span>
    <button class="step" :disabled="!three">3</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  one: { type: Boolean },
  two: { type: Boolean },
  three: { type: Boolean },
});

const firstLineColor = computed(() => {
  if (props.two) return true;
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
  }
  .yellow {
    border-color: #f9b500;
  }
  .activeborder {
    border-color: limegreen;
  }
}
</style>
