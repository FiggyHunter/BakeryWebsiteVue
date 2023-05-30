<template>
  <article>
    <nuxt-link :to="`/products/${id}`">
      <nuxt-img
        :src="`${base}${img}`"
        class="products__displayed-product__image"
        format="webp"
        alt="product image"
        sizes="sm:50px md:150px lg:300px"
        width="100"
        height="100"
        quality="70"
      ></nuxt-img>
      <div class="products__displayed-product__icons">
        <div v-for="category in sub" :key="category" class="">{{ category }}</div></div
      >
      <h3 class="products__displayed-product__headline">{{ name }}</h3>
    </nuxt-link>
  </article>
</template>

<script setup lang="ts">
const base = useRuntimeConfig().public.productsImagesBase;

defineProps({
  id: { type: Number, default: 3 },
  test: { type: String },
  img: { type: String },
  name: { type: String },
  sub: { type: String },
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
article {
  border: 3px solid #002559;
  background-color: #002559;
  border-radius: 1rem;
  overflow: hidden;
  a {
    text-decoration: none;
    color: unset;
    display: grid;
    grid-template-rows: min-content min-content auto;
    gap: 0.5rem;
    grid-template-columns: 1fr;
    height: 400px;
  }
  .products__displayed-product__image {
    width: 500px;
    height: 260px;
    object-fit: cover;
  }

  .products__displayed-product__icons {
    align-self: start;
    text-align: center;
    color: white;
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    text-transform: uppercase;
    font-family: $c-medium;
    flex-direction: column;
  }
  .products__displayed-product__headline {
    font-size: clamp(1rem, 1rem + 1vw, 1.75rem);
    text-align: center;
    color: #f9b600;
    line-height: 1rem;
    align-self: end;
    margin-bottom: 1rem;
    font-family: $c-bold;
  }
}
</style>
