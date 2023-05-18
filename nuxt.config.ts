const getImagesBaseUrl = () => {
  return process.env.ENV === 'DEV' ? 'http://localhost:3000/images' : 'https://www.leotg.com';
};

const getProductsBaseUrl = () => {
  return process.env.ENV === 'DEV'
    ? 'http://localhost:4000/api/products/'
    : 'https://www.leotg.com';
};

const getProductsImagesBaseUrl = () => {
  return process.env.ENV === 'DEV'
    ? 'http://localhost:3000/images/products/'
    : 'https://www.leotg.com';
};

export default {
  css: [
    '~/assets/styles/abstracts/index.scss',
    '~/assets/styles/global/index.scss',
    'normalize.css/normalize.css',
    'vuetify/lib/styles/main.sass',
  ],
  build: {
    transpile: ['vuetify', 'VueNumber'],
    compilerOptions: {
      // List of custom element tag names
      isCustomElement: (tag) => tag.startsWith('VueNumber'),
    },
  },
  runtimeConfig: {
    public: {
      imagesBase: getImagesBaseUrl(),
      productsBase: getProductsBaseUrl(),
      productsImagesBase: getProductsImagesBaseUrl(),
    },
  },
  modules: ['nuxt-quasar-ui', '@nuxt/image-edge', '@pinia/nuxt'],
  plugins: [{ src: '@/plugins/VueNumber.js', mode: 'client' }],
  quasar: {
    extras: {
      fontIcons: ['material-icons'],
    },
  },
  server: {
    host: '0.0.0.0',
  },
};
