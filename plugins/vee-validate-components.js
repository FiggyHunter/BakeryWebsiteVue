import { Form, Field, ErrorMessage } from 'vee-validate';

export default defineNuxtPlugin(async (nuxtApp) => {
  nuxtApp.vueApp.component('Vform', Form);
  nuxtApp.vueApp.component('VFIeld', Field);
  nuxtApp.vueApp.component('VErrorMessage', Error);
});
