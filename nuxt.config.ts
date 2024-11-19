// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxtjs/i18n',
    'shadcn-nuxt',
    '@formkit/auto-animate/nuxt',
    'nuxt-delay-hydration',
  ],

  delayHydration: {
    mode: 'init',
  },

  typescript: {
    typeCheck: true,
  },

  i18n: {
    locales: [
      {
        code: 'pl',
        name: 'Polski',
      },
    ],
    defaultLocale: 'pl',
    customRoutes: 'config',
    pages: {
      contact: {
        pl: '/kontakt',
      },
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  runtimeConfig: {
    public: {
      EMAILJS_PUBLIC_KEY: process.env.NUXT_EMAILJS_PUBLIC_KEY || '',
      EMAILJS_SERVICE_ID: process.env.NUXT_EMAILJS_SERVICE_ID || '',
      EMAILJS_TEMPLATE_ID: process.env.NUXT_EMAILJS_TEMPLATE_ID || '',
    },
  },
})
