import { useNuxtApp } from 'nuxt3/dist/app/nuxt';

import { useNuxtApp } from '#app';
export default defineNuxtRouteMiddleware(async (to, from) => {
  console.log('global from file: test middleware');
  return;
});
