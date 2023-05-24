const getImagesBaseUrl = () => {
  return process.env.ENV === 'DEV'
    ? 'http://localhost:3000/images/'
    : 'https://leotg.com/api/images';
};

const getProductsBaseUrl = () => {
  return process.env.ENV === 'DEV'
    ? 'http://localhost:4000/api/products'
    : 'https://leotg.com/api/products';
};

const getProductsImagesBaseUrl = () => {
  return process.env.ENV === 'DEV'
    ? 'http://localhost:3000/images/products/'
    : 'https://leotg.com/api/images/products/';
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
    plugins: ['Notify'],
    config: {
      notify: {},
    },
  },
  server: {
    host: '0.0.0.0',
  },
  router: {
    middleware: 'routing',
  },
};
