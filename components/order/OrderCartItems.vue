<template>
  <section class="ordered-items">
    <article v-for="product in displayedProducts" :key="product" class="ordered-items__item">
      <NuxtImg class="image" :src="`${base}${product.img}`"></NuxtImg>
      <div class="description">
        <h2 class="">{{ product.name }}</h2>
        <h3 class=""
          >{{ product.price }} $ x {{ product.quantity }} =
          {{ product.price * product.quantity }} $</h3
        >
      </div>
    </article>
    <article>Total: {{ totalPrice }}$</article>
  </section>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
const base = useRuntimeConfig().public.productsImagesBase;
const userStore = useUserStore();
const displayedProducts = computed(() => userStore.GET_CART_PRODUCTS);
const totalPrice = computed(() => userStore.GET_TOTAL_PRICE_OF_CART());
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.ordered-items {
  display: grid;
  grid-auto-rows: min-content;
  gap: 1rem;
  padding: 10px;

  article + article {
    font-family: $c-bold;
    color: #002559;
    font-size: clamp(1rem, 1rem + 1.5vw, 2rem);
  }

  &__item {
    display: grid;
    grid-template-columns: 2fr 5fr;
    gap: 1rem;
    height: fit-content;
    align-items: center;
    .image {
      object-fit: cover;
      width: 75px;
      height: 75px;
      border-radius: 1rem;
      border: 1.5px solid #002559;
      @media screen and (min-width: 700px) {
        width: 150px;
        height: 100px;
      }
    }

    .description {
      justify-self: right;

      h2 {
        font-size: clamp(1.25rem, 1rem + 2vw, 1.75rem);
        font-family: $c-bold;
        text-transform: uppercase;
        color: #002559;
        line-height: 1;
        text-align: right;
      }
      h3 {
        font-size: clamp(1rem, 0.75rem + 1vw, 1.25rem);
        font-family: $c-medium;
        color: #002559;
        line-height: 1.5;
        text-align: right;
      }
    }
  }
}
</style>
