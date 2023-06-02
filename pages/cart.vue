<template>
  <CartContent />
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();

definePageMeta({ layout: 'about' });
useHead({
  title: `Cart (${userStore.GET_CART_LENGTH}) | Our Bakery`,
});
</script>

<style lang="scss" scoped></style>
