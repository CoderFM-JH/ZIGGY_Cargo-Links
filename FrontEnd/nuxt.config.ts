// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss", 
    "@nuxtjs/i18n"
  ],

  i18n: {
    defaultLocale: 'en',
    locales: [
      { code: 'fr', langue: 'Francais', file: 'fr.json' },
      { code: 'en', langue: 'English', file: 'en.json' }
    ]
  }

})