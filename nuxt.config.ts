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
    '@nuxtjs/seo',
    '@nuxtjs/robots',
  ],

  image: {
    domains: ['panel.imbusbike.pl'],
  },

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
        language: 'pl-PL',
      },
    ],
    defaultLocale: 'pl',
    customRoutes: 'config',
    pages: {
      contact: {
        pl: '/kontakt',
      },
      service: {
        pl: '/terminarz',
      },
      'news/index': {
        pl: '/aktualnosci',
      },
      'news/[id]': {
        pl: '/aktualnosci/[id]',
      },
      'products/index': {
        pl: '/sklep',
      },
      'products/[id]': {
        pl: '/sklep/[id]',
      },
      offer: {
        pl: '/oferta',
      },
    },
  },

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },

  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_API_BASE_URL,
      baseUrl: process.env.NUXT_BASE_URL,
    },
  },
})