const getBaseUrl = () => {
  return process.env.ENV === 'DEV' ? 'http://localhost:3000/images' : 'https://www.leotg.com';
};

export default {
  css: [
    '~/assets/styles/abstracts/index.scss',
    '~/assets/styles/global/index.scss',
    'normalize.css/normalize.css',
    'vuetify/lib/styles/main.sass',
  ],
  build: {
    transpile: ['vuetify'],
  },
  runtimeConfig: {
    public: {
      imagesBase: getBaseUrl(),
    },
  },
};
