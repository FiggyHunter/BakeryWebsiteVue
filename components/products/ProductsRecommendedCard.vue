<template>
  <nuxt-link :to="`/products/${id}`">
    <article class="product-card"
      ><NuxtImg height="250px" format="webp" :src="`${base}${img}`"></NuxtImg>
      <h3>{{ name }}</h3></article
    >
  </nuxt-link>
</template>

<script setup lang="ts">
const base = useRuntimeConfig().public.productsImagesBase;
const props = defineProps({ id: { type: Number }, img: { type: String }, name: { type: String } });
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.product-card {
  display: grid;
  height: fit-content;
  border: 3px solid #f9b600;
  overflow: hidden;
  position: relative;
  @media screen and (min-width: 1300px) {
    &:hover > h3 {
      width: 80%;
    }
    &:hover img {
      filter: brightness(85%);
    }
  }

  img {
    object-fit: cover;
    object-position: 50% 50%;
    width: 100%;
    position: relative;
    filter: brightness(50%);
    transition: filter 0.3s;
  }
  h3 {
    height: fit-content;
    position: absolute;
    color: white;
    place-self: center;
    font-family: $c-medium-i;
    background-color: #f9b600;
    color: white;
    padding: 0.5rem 2rem;
    font-size: clamp(1.3rem, 1rem + 2vw, 2.5rem);
    @media screen and (min-width: 1300px) {
      width: 100px;
    }
    transition: all 1s;
    white-space: nowrap;
    text-align: center;
  }
}
</style>
