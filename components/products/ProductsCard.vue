<template>
  <article>
    <nuxt-link :to="`/products/${id}`">
      <nuxt-img
        :src="`${base}${img}`"
        class="products__displayed-product__image"
        format="webp"
      ></nuxt-img>
      <div class="products__displayed-product__icons"
        >placeholder for iconsplaceholder for iconsplaceholder for icons</div
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
});
</script>

<style lang="scss" scoped>
article {
  border: 3px solid #002559;
  background-color: #002559;
  border-radius: 1rem;
  overflow: hidden;
  a {
    text-decoration: none;
    color: unset;
    display: grid;
    grid-template-rows: 250px 100px 50px;
    grid-template-columns: 1fr;
    height: 400px;
  }
  .products__displayed-product__image {
    width: 500px;
    height: 250px;
    object-fit: cover;
  }

  .products__displayed-product__icons {
    align-self: center;
    text-align: center;
    color: white;
  }
  .products__displayed-product__headline {
    font-size: clamp(1rem, 1rem + 1vw, 1.75rem);
    text-align: center;
    color: #f9b600;
    line-height: 1rem;
    align-self: end;
    margin-bottom: 1rem;
  }
}
</style>
