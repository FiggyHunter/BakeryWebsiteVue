<template>
  <div class="limiter">
    <LazyClientOnly>
      <SharedMainNavInfo route-name="Cart" page-name="Order Details">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#002559"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-right"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
        <nuxt-link style="text-decoration: none; color: inherit" to="/order">Order</nuxt-link>
      </SharedMainNavInfo>

      <OrderContent />
    </LazyClientOnly>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';

const userStore = useUserStore();
definePageMeta({ layout: 'order', middleware: 'redir' });
onBeforeUnmount(() => {
  userStore.UPDATE_ON_ORDER(true);
});
</script>

<style lang="scss" scoped>
.limiter {
  width: 80%;
  margin: 0 auto;
}
</style>
