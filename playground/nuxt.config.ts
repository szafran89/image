import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: [
    '../src/module'
  ],
  image: {
    domains: [
      'https://nuxtjs.org',
      'https://images.unsplash.com',
      'https://upload.wikimedia.org'
    ],
    sharp: {
      failOn: 'error'
    },
    presets: {
      s50: {
        modifiers: {
          width: 50,
          height: 50
        }
      }
    }
  }
})
