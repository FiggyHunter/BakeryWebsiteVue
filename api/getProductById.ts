import type { Product } from './types';

export const getProductById = async (id: number) => {
  const url = `${useRuntimeConfig().public.productsBase}${id}`;
  const response = await $fetch<Product>(url);
  return JSON.parse(response);
};
