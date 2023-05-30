<template>
  <div class="limiter">
    <SharedMainNavInfo page-name="Shopping Cart" route-name="Cart"></SharedMainNavInfo>
    <main class="product-cart">
      <CartDetails v-for="item in userCartItems.value" :key="item" :p-name="item.name" />
      <div class="empty"><div class="empty__headline">Shopping Cart is empty.</div></div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();
const userCartItems = computed(() => {
  return userStore.GET_CART_PRODUCTS;
});
</script>

<style lang="scss" scoped>
@use '../../assets/styles/abstracts/variables' as *;
.limiter {
  width: 80%;
  margin: 0 auto;
  font-family: $c-regular;
  color: black;
}
.placeholder {
  height: 100vh;
  display: grid;
  place-content: center;
  text-transform: uppercase;
  font-size: clamp(1rem, 1rem + 3vw, 2rem);
}

.product-cart {
  width: 100%;
  background-color: rgba(70, 163, 163, 0.526);
  min-height: 800px;
  display: grid;
  position: relative;
}
.empty {
  position: sticky;
  top: 100px;
  place-self: center;
  height: 50%;
  width: 100%;
  display: grid;

  &__headline {
    place-self: center center;
  }
  font-size: 2rem;
}
</style>
