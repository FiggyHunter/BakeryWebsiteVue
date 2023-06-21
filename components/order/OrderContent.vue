<template>
  <main class="order-details">
    <OrderLoader v-if="userInformation.RENDER_CONTAINER" />
    <OrderCartItems v-if="!userInformation.ORDER_COMPLETE && !userInformation.THANK_YOU_MSG" />
    <OrderForm v-if="!userInformation.ORDER_COMPLETE && !userInformation.THANK_YOU_MSG" />
  </main>
</template>

<script setup lang="ts">
import { useUserInformation } from '~/stores/userInformation';

const userInformation = useUserInformation();
</script>

<style lang="scss" scoped>
.order-details {
  display: grid;
  margin-bottom: clamp(7rem, 1rem + 10vw, 10rem);
  @media screen and (min-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  gap: 4rem;
}
</style>
