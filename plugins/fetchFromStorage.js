import { useProductsStore } from '~/stores/products';
import { useUserStore } from '../stores/user';

export default defineNuxtPlugin(async () => {
  if (process.client) {
    const userStore = useUserStore();
    const productStore = useProductsStore();

    if (localStorage.getItem('cartItems')) {
      userStore.REPLACE_CART(JSON.parse(localStorage.getItem('cartItems')));
    }

    if (localStorage.getItem('popup_displayed')) {
      userStore.GET_POPUP.value = JSON.parse(localStorage.getItem('popup_displayed'));
    }
    productStore.FETCH_PRODUCTS();
    productStore.FETCH_WEBSHOP_PRODUCTS();
  }
});
