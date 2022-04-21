import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  buildModules: ['@intlify/nuxt3'],
  pageTransition: {
    'enter-active': true,
  },
  typescript: {
    strict: true,
  },
  intlify: {
    vueI18n: {
      locale: 'fr',
    },
  },
});
