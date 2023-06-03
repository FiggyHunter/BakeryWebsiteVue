import { defineStore } from 'pinia';
import { getProducts } from '../api/getProducts';
import { findProductById } from './helpers/findProductById';
import type { ProductAPIResponse } from '../api/types';

export const useUserStore = defineStore('user', () => {
  const $q = useQuasar();
  const selectedCategory = ref('');
  const cart = ref([]);
  const displayDeleteProductPopUp = ref(true);

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
    if (findProductById(product.id, GET_CART_PRODUCTS.value))
      findProductById(product.id, GET_CART_PRODUCTS.value).quantity++;
    else cart.value.push(product);

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

  const NOTIFY_USER = function (pId: Number, productName: String) {
    if (displayDeleteProductPopUp.value) {
      $q.dialog({
        title: 'Delete Product',
        message: 'Are you sure you want to delete the product?',
        color: 'indigo-10',
        cancel: true,
        persistent: true,
        options: {
          type: 'checkbox',
          model: [],
          items: [{ label: 'Do not show again', value: 'checked', color: 'indigo-10' }],
        },
      })
        .onOk((val) => {
          if (val == 'checked') displayDeleteProductPopUp.value = false;
          cart.value = cart.value.filter((product) => product.id !== pId);
          $q.notify({
            color: 'indigo-10',
            textColor: 'red-7',
            message: `You removed ${productName} `,
            position: 'bottom',
            actions: [
              {
                label: 'Dismiss',
                color: 'white',
              },
            ],
            timeout: 4000,
          });
        })
        .onCancel(() => {
          return false;
        });
    }
  };

  const DELETE_PRODUCT = function (pId: number, productName: string) {
    if (displayDeleteProductPopUp.value) {
      NOTIFY_USER(pId, productName);
      return;
    }
    cart.value = cart.value.filter((product) => product.id !== pId);
    $q.notify({
      color: 'indigo-10',
      textColor: 'red-7',
      message: `You removed ${productName} `,
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
    GET_CART_LENGTH,
    GET_TOTAL_PRICE_OF_CART,
    DELETE_PRODUCT,
  };
});
