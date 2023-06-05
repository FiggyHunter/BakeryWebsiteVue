<template>
  <section class="product-recommended">
    <h3 class="product-recommended__headline">Explore more products:</h3>
    <div class="product-recommended__products">
      <ProductsRecommendedCard
        v-for="product in generatedProducts"
        :key="product.id"
        :id="product.id"
        :img="product.imageURL"
        :name="product.productName"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
import { generateRecommendedProducts } from '~/utils/generateRecommendedProducts.ts';

const props = defineProps({ id: Number });
const generatedProducts = ref();

onBeforeMount(async () => {
  generatedProducts.value = await generateRecommendedProducts(props.id);
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.product-recommended {
  color: white;
  display: grid;
  padding-bottom: clamp(4rem, 4rem + 7vw, 20rem);
  &__headline {
    font-family: $c-bold;
    justify-self: center;
    @media screen and (min-width: 1000px) {
      justify-self: unset;
    }
    position: relative;
    width: fit-content;
    line-height: 1.1;

    font-size: clamp(1rem, 1rem + 2vw, 2rem);
    &::after {
      display: block;
      content: '';
      background-color: #f9b600;
      height: 5px;
      width: 100%;
      margin: 0.5rem 0rem;
    }
  }

  &__products {
    display: grid;
    grid-template-columns: 1fr;
    justify-content: center;
    grid-template-rows: max-content;

    @media screen and (min-width: 1000px) {
      grid-template-columns: 1fr 1fr;
    }

    gap: 1rem;
    margin-top: 1rem;
  }
}
</style>
