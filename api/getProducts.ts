import type { Product } from './types';

export const getProducts = async () => {
  const url = `${useRuntimeConfig().public.productsBase}`;
  const response = await $fetch<Product>(url);
  return response;
};
