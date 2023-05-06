// https://nuxt.com/docs/api/configuration/nuxt-config
const getBaseUrl = () => {
  return process.env.ENV === 'DEV' ? 'http://localhost:3000/images' : 'https://www.leotg.com';
};

export default {
  runtimeConfig: {
    public: {
      imagesBase: getBaseUrl(),
    },
  },
};
