import { useUserStore } from '~/stores/user';

export default defineNuxtRouteMiddleware((to) => {
  if (process.client) {
    console.log(useUserStore().GET_CART_LENGTH);
    if (useUserStore().GET_CART_LENGTH === 0 && to.path === '/order') {
      return navigateTo('/cart');
    }
  }
});
