import breadFav from '~/assets/images/favicon/breadFav.webp';
import muffinFav from '~/assets/images/favicon/muffinFav.webp';
import cakeFav from '~/assets/images/favicon/cakeFav.webp';
import cheeseCakeFav from '~/assets/images/favicon/cheeseCakeFav.webp';
import croissantFav from '~/assets/images/favicon/croissantFav.webp';
import donutFav from '~/assets/images/favicon/donutFav.webp';
import cupcakeFav from '~/assets/images/favicon/cupcakeFav.webp';
export default defineNuxtPlugin((nuxtApp) => {
  useHead({
    link: [
      {
        rel: 'icon',
        type: 'image/webp',
        href: breadFav, // Add timestamp as a query parameter
      },
    ],
  });
  let index = 0;
  let images = [breadFav, muffinFav, cakeFav, cheeseCakeFav, croissantFav, donutFav, cupcakeFav];
  setInterval(() => {
    if (index >= 6) index = 0;
    const favicon = document.head.querySelector('link[rel="icon"]');
    if (favicon) {
      favicon.href = images[index];
    }
    ++index;
  }, 2000);
});
