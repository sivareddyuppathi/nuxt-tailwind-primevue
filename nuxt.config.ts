
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue'],

  primevue: {
    options: {
      ripple: true,
      unstyled: true
    },
    importPT: { as: 'Aura', from: '~/presets/aura' }, //for Windows Users
    components: {
      exclude: ["Editor", "Chart"]
    }
  },
})
