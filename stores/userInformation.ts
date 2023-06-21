import { defineStore } from 'pinia';
import { useUserStore } from './user';

export const useUserInformation = defineStore('userInformation', () => {
  const fname = ref('');
  const lname = ref('');
  const email = ref('');
  const phone = ref('');
  const showOrderCompleteLoader = ref(false);
  const showThankYouMessage = ref(false);
  const renderLoaderContainer = ref(false);
  const RENDER_CONTAINER = computed(() => renderLoaderContainer.value);
  const ORDER_COMPLETE = computed(() => showOrderCompleteLoader.value);
  const THANK_YOU_MSG = computed(() => showThankYouMessage.value);
  const orderComplete = () => {
    renderLoaderContainer.value = true;
    const userStore = useUserStore();
    const router = useRouter();
    showOrderCompleteLoader.value = true;
    setTimeout(() => {
      showOrderCompleteLoader.value = false;
      showThankYouMessage.value = true;
    }, 1000);
    setTimeout(() => {
      userStore.UPDATE_ON_ORDER(false);
      showOrderCompleteLoader.value = false;
      userStore.CLEAR_CART();
    }, 3000);
    setTimeout(() => {
      renderLoaderContainer.value = false;
      router.push('/cart');
      showThankYouMessage.value = false;
    }, 3100);
  };

  return {
    fname,
    lname,
    email,
    phone,
    orderComplete,
    ORDER_COMPLETE,
    THANK_YOU_MSG,
    RENDER_CONTAINER,
  };
});
