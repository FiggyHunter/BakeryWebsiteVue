<template>
  <article>
    <nuxt-link :to="{ path: `/products/${id}`, query: { past: 'shop' } }">
      <nuxt-img
        :src="`${base}${img}`"
        class="products__displayed-product__image"
        format="webp"
      ></nuxt-img>
      <div class="products__displayed-product__icons">
        <div v-for="category in sub" :key="category" class="">{{ category }}</div></div
      >
      <h3 class="products__displayed-product__headline">{{ name }}</h3>
      <button
        @click.prevent.stop="someFunction({ id, name })"
        class="products__displayed-product__button"
        >Add to cart</button
      >
    </nuxt-link>
  </article>
</template>

<script setup lang="ts">
const base = useRuntimeConfig().public.productsImagesBase;
const $q = useQuasar();

defineProps({
  id: { type: Number, default: 3 },
  test: { type: String },
  img: { type: String },
  name: { type: String },
  sub: { type: String },
});

const someFunction = (product) => {
  console.log(product);
  $q.notify({
    color: 'indigo-10',
    textColor: 'yellow-7',
    message: `You added ${product.name} `,
    position: 'bottom',
    actions: [
      {
        label: 'Dismiss',
        color: 'white',
        handler: () => {},
      },
    ],
    timeout: 4000,
  });
};
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
    grid-template-rows: min-content min-content auto auto;
    gap: 0.5rem;
    grid-template-columns: 1fr;
    height: 450px;
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
  .products__displayed-product__button {
    z-index: 10;
    text-transform: uppercase;
    color: white;
    border: 3px solid #f9b600;
    border-radius: 3rem;
    height: 50px;
    place-self: end center;
    width: 50%;
    margin-bottom: 10px;
    transition: transform 0.25s;
    &:hover {
      transform: scale(0.95);
    }
  }

  .q-notifications {
    background-color: #002559 !important;
    color: yellow;
  }
}
</style>