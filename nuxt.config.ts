import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: [
    ['@nuxtjs/algolia', {
      apiKey: '0fd1c4eba2f831788333e77c9d855f1d',
      applicationId: 'AGN9HUEKF3',
    }]
  ],
})
