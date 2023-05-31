<template>
  <article class="cart-item">
    <nuxt-link class="cart-container" :to="`/products/${pId}`">
      <NuxtImg class="cart-image" :src="`${base}${pImg}`"></NuxtImg
    ></nuxt-link>
    <div class="item-name"
      ><h4 class="item-headline">{{ pName }}</h4>
    </div>
    <div class="item-price">{{ pPrice }}$</div>
    <div class="item-quantity">
      <button @click="decrementQuantity(pId)" class="minus">--</button>
      <input :value="pQuantity" type="number" />
      <button @click="incrementQuantity(pId)" class="plus">+</button>
    </div>
    <div class="totalprice"
      ><h4>{{ (pPrice * pQuantity).toFixed(2) }}$</h4></div
    >
    <!-- <div class="summary">
      <div class="summary__headline">
        <h4>Cart details </h4>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-shopping-cart inline"
        >
          <circle cx="9" cy="21" r="1"></circle>
          <circle cx="20" cy="21" r="1"></circle>
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
        </svg>
      </div>
      <div class="summary__total">
        <h4>Total Price: {{ cartPrice }} </h4>
      </div>
    </div> -->
  </article>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import { findProductById } from '~/stores/helpers/findProductById';
import { arrayBuffer } from 'stream/consumers';
const userStore = useUserStore();
const incrementQuantity = (id: number) => {
  findProductById(id, userStore.GET_CART_PRODUCTS).quantity++;
};
const decrementQuantity = (id: number) => {
  if (findProductById(id, userStore.GET_CART_PRODUCTS).quantity === 1)
    userStore.GET_CART_PRODUCTS.splice(
      userStore.GET_CART_PRODUCTS.findIndex((obj) => obj.id === id),
      1,
    );
  else findProductById(id, userStore.GET_CART_PRODUCTS).quantity--;
};

const cartPrice = computed(() => {
  return userStore.GET_TOTAL_PRICE_OF_CART;
});

const base = useRuntimeConfig().public.productsImagesBase;
const props = defineProps({
  pName: { type: String, required: true },
  pPrice: { type: String, required: true },
  pQuantity: { type: String, required: true },
  pImg: { type: String, required: true, default: 'a' },
  pId: { type: Number, required: true },
});
</script>

<style lang="scss" scoped>
.cart-item {
  display: grid;
  padding-top: 0.5rem;
  border-top: 1px solid #002b50;
  border-bottom: 1px solid #002b50;
  gap: 0.5rem;
  grid-template-areas:
    'image image'
    'headline headline'
    'price price'
    'quantity quantity'
    'totalprice totalprice'
    'summary summary';
  grid-template-columns: 1fr 1fr;
  align-items: center;
  height: fit-content;
  margin-bottom: 4rem;

  @media screen and (min-width: 700px) {
    grid-template-areas:
      'image headline'
      'image price'
      'quantity totalprice '
      'quantity totalprice'
      'summary summary';
  }

  @media screen and (min-width: 1200px) {
    grid-template-areas:
      'image image'
      'image image'
      'headline headline'
      'price price'
      'quantity totalprice '
      'quantity totalprice'
      'summary summary';
  }

  .item-headline {
    font-size: clamp(1rem, 1rem + 2vw, 2rem);
    text-align: center;
  }
}
.item-name {
  grid-area: headline;
}

.cart-container {
  grid-area: image;
  @media screen and (min-width: 1200px) {
    justify-self: center;
  }
}
.cart-image {
  object-fit: cover;
  height: 200px;
  width: 100%;
  border: 4px solid black;
  border-radius: 1rem;
  @media screen and (min-width: 1200px) {
    height: 400px;
    width: 100%;
  }
}
.item-quantity {
  display: grid;
  grid-template-columns: max-content max-content max-content;
  align-items: center;
  justify-self: center;
  grid-area: quantity;
  input {
    text-align: center;
    width: 50px;
  }
  button {
    color: black;
    font-size: 1rem;
    border: 2px solid #f9b600;
    border-radius: 100rem;
    padding: 0rem 0.5rem;
  }
}

.item-price {
  width: 100%;
  text-align: center;
  grid-area: price;
  align-content: start;
}

.totalprice {
  text-align: center;
  grid-area: totalprice;
}

.summary {
  border-top: 1px solid #002b50;
  padding: 2rem 0rem;
  text-align: center;
  grid-area: summary;
  &__headline {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
