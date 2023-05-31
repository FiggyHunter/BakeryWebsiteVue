import { defineStore } from 'pinia';
import { getProducts } from '../api/getProducts';
import type { ProductAPIResponse } from '../api/types';

export const useUserStore = defineStore('user', () => {
  const $q = useQuasar();
  const selectedCategory = ref('');
  const cart = ref([]);

  const ADD_SELECTED_CATEGORY = (category: string) => {
    selectedCategory.value = category;
  };

  const GET_SELECTED_CATEGORY = computed(() => {
    return selectedCategory.value;
  });

  const GET_CART_PRODUCTS = computed(() => {
    return cart.value;
  });

  const GET_CART_LENGTH = computed(() => {
    return cart.value.length;
  });

  const ADD_PRODUCT_IN_CART = function (product) {
    cart.value.push(product);
    $q.notify({
      color: 'indigo-10',
      textColor: 'yellow-7',
      message: `You added ${product.name} `,
      position: 'bottom',
      actions: [
        {
          label: 'Dismiss',
          color: 'white',
        },
      ],
      timeout: 4000,
    });
  };

  const GET_TOTAL_PRICE_OF_CART = function () {
    let sum = 0;
    let cart_array = GET_CART_PRODUCTS;

    for (product in cart_array) {
      sum += product.price * product.quantity;
    }

    return sum;
  };

  return {
    selectedCategory,
    ADD_SELECTED_CATEGORY,
    GET_SELECTED_CATEGORY,
    ADD_PRODUCT_IN_CART,
    GET_CART_PRODUCTS,
    GET_CART_LENGTH,
    GET_TOTAL_PRICE_OF_CART,
  };
});
