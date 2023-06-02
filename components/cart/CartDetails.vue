<template>
  <article class="cart-item">
    <nuxt-link class="cart-container" :to="`/products/${pId}`">
      <NuxtImg class="cart-image" :src="`${base}${pImg}`"></NuxtImg
    ></nuxt-link>
    <div class="item-name"
      ><h4 class="item-headline">{{ pName }}</h4>
    </div>
    <div class="item-price">Item Price: {{ pPrice }}$</div>
    <div class="item-quantity">
      <div class="quantity">
        <button @click="decrementQuantity(pId)" class="minus">--</button>
        <input @change="updateQuantity($event, pId, pName)" :value="pQuantity" type="number" />
        <button @click="incrementQuantity(pId)" class="plus">+</button>
      </div>
      <div @click="deleteProduct(pId, pName)" class="delete"><button>Delete Product</button></div>
    </div>
    <div class="totalprice"
      ><h4>{{ (pPrice * pQuantity).toFixed(2) }}$</h4></div
    >
  </article>
</template>

<script setup lang="ts">
import { useUserStore } from '~/stores/user';
import { findProductById } from '~/stores/helpers/findProductById';
const userStore = useUserStore();

const updateQuantity = (e: Event, pId, productName) => {
  if (e.target.value <= 0) deleteProduct(pId, productName);
  findProductById(pId, userStore.GET_CART_PRODUCTS).quantity = e.target.value;
};

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

const deleteProduct = function (pId: number, productName: string) {
  userStore.DELETE_PRODUCT(pId, productName);
};

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
  border-radius: 1rem;
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
      'summary summary';
  }

  @media screen and (min-width: 1540px) {
    border-left: 1px solid #002b50;
    border-right: 1px solid #002b50;
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
  text-align: center;
  @media screen and (min-width: 1200px) {
    justify-self: center;
  }
}
.cart-image {
  object-fit: cover;
  height: 200px;

  border: 4px solid black;
  border-radius: 1rem;
}
.item-quantity {
  display: grid;
  grid-template-columns: max-content;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  justify-items: center;
  justify-self: center;
  grid-area: quantity;
  input {
    text-align: center;
    width: 50px;
  }
  .quantity {
    color: black;
    font-size: 1rem;
    border: 2px solid #f9b600;
    border-radius: 100rem;
    padding: 0rem 0.5rem;
  }

  .delete {
    color: red;
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
