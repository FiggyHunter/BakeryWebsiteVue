<template>
  <article class="grid-image">
    <nuxt-link :to="linkTo"><div class="grid-image__picture"></div></nuxt-link>
    <nuxt-link class="grid-image__link" :to="linkTo">{{ cardTitle }}</nuxt-link>
  </article>
</template>

<script setup lang="ts">
const props = defineProps({
  imageLink: { type: String, required: true },
  cardTitle: { type: String, required: true },
  linkTo: { type: String, required: true },
});
</script>

<style scoped lang="scss">
@use '../../assets/styles/abstracts/variables' as *;
.grid-image__picture {
  width: 100%;
  height: 300px;
  background: v-bind('props.imageLink');
  background-position: 30%;
  background-size: 500px;
  border-radius: 2rem;
  box-shadow: 3px 3px 3px rgba(0, 0, 0, 0.347);
  transition: all 0.5s ease-in;
}

.grid-image__picture:hover {
  background-size: 600px;
}

.grid-image__link {
  text-decoration: none;
  color: #002559;
  font-size: clamp(1rem, 1rem + 3vw, 1.3rem);
  font-family: $c-regular-i;
  text-align: center;
  display: block;
  margin-top: 1rem;
}
</style>
