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
    [
      'nuxt-mail',
      {
        message: {
          to: process.env.NUXT_MAIL_TARGET,
        },
        smtp: {
          host: process.env.NUXT_MAIL_SMTP,
          port: process.env.NUXT_MAIL_PORT,
          secure: true,
          auth: {
            user: process.env.NUXT_MAIL_USERNAME,
            pass: process.env.NUXT_MAIL_PASSWORD,
          },
        },
      },
    ],
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
      service: {
        pl: '/serwis',
      },
      'news/index': {
        pl: '/aktualnosci',
      },
      'news/[id]': {
        pl: '/aktualnosci/[id]',
      },
      products: {
        pl: '/produkty',
      },
      offer: {
        pl: '/oferta',
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
      apiBase: process.env.NUXT_API_BASE_URL,
      accessToken: process.env.NUXT_ACCESS_TOKEN,
    },
  },
})
