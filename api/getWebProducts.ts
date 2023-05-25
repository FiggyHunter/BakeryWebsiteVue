import type { Product } from './types';

export const getWebProducts = async () => {
  const url = `${useRuntimeConfig().public.productsWebshopBase}`;
  const response = await $fetch<Product>(url);
  return response;
};
