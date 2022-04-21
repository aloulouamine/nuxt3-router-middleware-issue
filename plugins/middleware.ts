export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'auth-globally',
    () => {
      // this is not working on the first hit when @intlify/nuxt3 is enabled
      console.log('from plugin: this is global middleware');
    },
    { global: true }
  );

  addRouteMiddleware('claim', () => {
    console.log('this is local middleware');
  });
});
