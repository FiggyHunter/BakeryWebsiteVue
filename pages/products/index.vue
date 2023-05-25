<template>
  <ProductsPage />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'about',
});
useHead({
  title: `Products | Our Bakery`,
  meta: [
    {
      name: 'description',
      content:
        'Experience a tantalizing array of artisanal delights at [Bakery Name]. Our diverse selection of handcrafted products is a testament to our commitment to quality and taste. Indulge in the heavenly aroma of freshly baked bread, the delicate flakiness of our pastries, and the decadence of our mouthwatering cakes. From traditional favorites to innovative creations, every bite is a symphony of flavors that will transport you to a world of pure culinary bliss.',
    },
  ],
});
</script>

<style scoped></style>
