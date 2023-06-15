<template>
  <main class="order-details">
    <OrderCartItems />
    <OrderForm />
  </main>
</template>

<script setup lang="ts"></script>

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
