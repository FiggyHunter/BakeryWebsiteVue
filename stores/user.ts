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
    return cart;
  });

  const ADD_PRODUCT_IN_CART = function (product) {
    cart.value.push(product);
    console.log(cart.value);
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

  return {
    selectedCategory,
    ADD_SELECTED_CATEGORY,
    GET_SELECTED_CATEGORY,
    ADD_PRODUCT_IN_CART,
    GET_CART_PRODUCTS,
  };
});
