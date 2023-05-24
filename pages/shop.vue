<template>
  <WebshopPage />
</template>

<script setup lang="ts">
definePageMeta({ layout: 'about' });
useHead({
  title: `Shop | Our Bakery`,
});
</script>

<style lang="scss" scoped>
.placeholder {
  height: 100vh;
  display: grid;
  place-content: center;
  text-transform: uppercase;
  font-size: clamp(1rem, 1rem + 3vw, 2rem);
}
</style>
