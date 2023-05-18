import { defineStore } from 'pinia';
import { getProducts } from '../api/getProducts';
import type { ProductAPIResponse } from '../api/types';

export const useProductsStore = defineStore('products', () => {
  const products = ref<ProductAPIResponse[]>([]);
  const products_categories = ref<string[]>([]);
  const FETCH_PRODUCTS = async function () {
    const recievedProducts = await getProducts();
    products.value = recievedProducts;
    products_categories.value = Object.keys(products.value);
  };
  const GET_ALL_PRODUCTS = computed(() => {
    return products.value;
  });

  const GET_BREADS = computed(() => {
    return products.value.breads;
  });

  const GET_PRODUCTS_CATEGORIES = computed(() => {
    return products_categories.value;
  });

  return { products, FETCH_PRODUCTS, GET_ALL_PRODUCTS, GET_BREADS, GET_PRODUCTS_CATEGORIES };
});
