<template>
  <article class="cart-item"> {{ pName }}</article>
</template>

<script setup lang="ts">
const props = defineProps({
  pName: { type: String, required: true },
  pPrice: { type: String, required: true },
  pQuantity: { type: String, required: true },
});
</script>

<style lang="scss" scoped>
.cart-item {
  background-color: blue;
}
</style>
