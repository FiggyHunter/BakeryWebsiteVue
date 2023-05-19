import { defineStore } from 'pinia';
import { getProducts } from '../api/getProducts';
import type { ProductAPIResponse } from '../api/types';

export const useUserStore = defineStore('user', () => {
  const selectedCategory = ref('');

  const ADD_SELECTED_CATEGORY = (category: string) => {
    selectedCategory.value = category;
  };

  const GET_SELECTED_CATEGORY = computed(() => {
    return selectedCategory.value;
  });

  return { selectedCategory, ADD_SELECTED_CATEGORY, GET_SELECTED_CATEGORY };
});
