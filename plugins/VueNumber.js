import VueNumber from 'vue-number-animation';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueNumber);
});
