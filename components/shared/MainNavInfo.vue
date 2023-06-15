<template>
  <div class="nav-info">
    <h3>{{ pageName }}</h3>
    <div class="nav-info__extra">
      <nuxt-link style="text-decoration: none" to="/">Home</nuxt-link>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#002559"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-right"
      >
        <polyline points="9 18 15 12 9 6"></polyline>
      </svg>

      {{ routeName }}

      <slot> </slot>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  pageName: { type: String, required: true },
  routeName: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.nav-info {
  margin: 6rem 0 5% 0;
  width: 100%;
  text-align: center;
  @media screen and (min-width: 800px) {
    margin: 20% 0 5% 0;
  }
  @media screen and (min-width: 1000px) {
    text-align: left;
    margin: 16% 0 2% 0;
  }

  @media screen and (min-width: 1500px) {
    margin: 13% 0 1% 0;
  }

  h3 {
    font-family: $c-medium;
  }
  a {
    color: #002559;
  }
  color: #002559;
  font-family: $c-regular;
  display: grid;
  gap: 0.1rem;
  grid-template-rows: 1fr 1fr;
  &__extra {
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (min-width: 1000px) {
      justify-content: unset;
    }
  }
}
</style>
