<template>
  <main class="product-content">
    <nuxt-img class="product-content__image" src="fdfdfd"></nuxt-img>
    <section class="product-content__description">
      <h1>{{ displayedProduct.productName }}</h1>
    </section>
  </main>
</template>

<script setup lang="ts">
import { copyFile } from 'fs';
import { getProductById } from '../../api/getProductById';
const fetchedProduct = ref();
const displayedProduct = computed(() => {
  return new Object(fetchedProduct.value);
});
const route = useRoute();
onBeforeMount(async () => {
  fetchedProduct.value = await getProductById(Number(route.params.id));
});
</script>

<style lang="scss" scoped></style>
