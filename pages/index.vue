<template>
  <img class="image" src="../assets/images/bakery.avif" alt="" srcset="" />
</template>

<script setup lang="ts">
useHead({
  title: `Bakery | Leo's Testing Ground `,
});
</script>

<style lang="scss" scoped>
.image {
  object-fit: cover;
  width: 100%;
  height: 100vh;
  filter: brightness(50%);
}
</style>
