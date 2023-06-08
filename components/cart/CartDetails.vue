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
        <input v-model="userProductQuantity" @change="updateQuantity" type="number" />
        <button @click="incrementQuantity" class="plus">+</button>
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
import { idText } from 'typescript';
const userStore = useUserStore();
const base = useRuntimeConfig().public.productsImagesBase;
const props = defineProps({
  pName: { type: String, required: true },
  pPrice: { type: String, required: true },
  pQuantity: { type: String, required: true },
  pImg: { type: String, required: true, default: 'a' },
  pId: { type: Number, required: true },
});

const userProductQuantity = ref(props.pQuantity);
const wUserProductQuantity = watch(userProductQuantity, (newValue) => {
  console.log(newValue);
  const { pId: id, pName: name, pImg: img, pPrice: price } = props;
  userStore.ADD_PRODUCT_IN_CART({ id, name, img, price, quantity: newValue });
});

const updateQuantity = (e: Event) => {
  if (e.target.value <= 0) deleteProduct(pId, productName);
  userProductQuantity.value = Number(e.target.value);
};

const incrementQuantity = () => {
  userProductQuantity.value++;
};

const decrementQuantity = (id: number) => {
  if (userProductQuantity.value <= 1) {
    deleteProduct(id, props.pName);
    return;
  }
  userProductQuantity.value--;
};

const deleteProduct = function (pId: number, productName: string) {
  userStore.DELETE_PRODUCT(pId, productName);
};
</script>

<style lang="scss" scoped>
.cart-item {
  display: grid;
  border-radius: 1rem;
  border-top: 2px solid #002b50;
  border-bottom: 2px solid #002b50;
  border-left: 2px solid #002b50;
  border-right: 2px solid #002b50;
  gap: 0.5rem;
  grid-template-areas:
    'image image'
    'headline headline'
    'price price'
    'quantity quantity'
    'totalprice totalprice'
    'summary summary';
  grid-template-columns: 2fr 1fr;
  align-items: center;
  height: fit-content;
  margin-bottom: 4rem;
  overflow: hidden;

  @media screen and (min-width: 700px) {
    grid-template-areas:
      'image headline'
      'image price'
      'quantity totalprice '
      'summary summary';
  }

  .item-headline {
    font-size: clamp(1rem, 1rem + 2vw, 2rem);
    text-align: center;
    padding: 5px;
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
  @media screen and (min-width: 700px) {
    border-right: 3px solid #002b50;
    border-bottom: 3px solid #002b50;
  }
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
  align-self: end;
  margin-bottom: 0.4rem;
  font-size: 1rem;
  @media screen and (min-width: 700px) {
    border-bottom: 2px solid #002b50;
  }
}

.totalprice {
  text-align: center;
  grid-area: totalprice;
  height: 100%;
  display: grid;
  place-content: center;
  @media screen and (min-width: 700px) {
    border-left: 2px solid #002b50;
  }
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

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
