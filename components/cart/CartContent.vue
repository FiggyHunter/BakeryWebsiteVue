<template>
  <div class="limiter">
    <SharedMainNavInfo page-name="Shopping Cart" route-name="Cart"></SharedMainNavInfo>
    <main class="product-cart">
      <ClientOnly>
        <CartDetails
          v-for="item in userCartItems"
          :key="item"
          :p-img="item.img"
          :p-name="item.name"
          :p-price="item.price"
          :p-quantity="item.quantity"
          :p-id="item.id"
        />

        <div v-if="isCartEmpty" class="empty"
          ><div class="empty__headline">Shopping Cart is empty.</div>
          <nuxt-link class="empty__button" to="/shop">Explore Products</nuxt-link>
        </div>
      </ClientOnly>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
const userStore = useUserStore();

const userCartItems = computed(() => {
  return userStore.GET_CART_PRODUCTS;
});

const isCartEmpty = computed(() => {
  return userStore.GET_CART_LENGTH === 0 ? true : false;
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
  min-height: 400px;
  display: grid;
  @media screen and (min-width: 700px) {
    grid-template-columns: repeat(auto-fill, 400px);
  }
  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(auto-fill, 600px);
  }
  gap: 2rem;
  justify-content: center;
  position: relative;
}
.empty {
  position: sticky;
  top: 200px;
  align-items: center;
  height: fit-content;
  width: 100%;
  text-align: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 1540px) {
    top: 40%;
    left: 35%;
  }

  &__headline {
    font-size: 2rem;
  }

  &__button {
    text-decoration: none;
    color: #002b50;
    border: 2px solid #002b50;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    transition: transform 0.5s;
    &:hover {
      transform: scale(0.85);
    }
  }
}
</style>
