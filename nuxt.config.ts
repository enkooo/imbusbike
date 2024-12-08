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
      'products/index': {
        pl: '/produkty',
      },
      'products/[id]': {
        pl: '/produkty/[id]',
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

  // seo: {
  //   description:
  //     'Zapewniamy kompleksowe usługi serwisu rowerowego, od tradycyjnych napraw po zaawansowane modyfikacje i konwersje rowerów elektrycznych. Certyfikowany serwis Bosch i Brose. Sprawdź naszą ofertę!',
  //   keywords:
  //     'serwis rowerowy, rowery elektryczne, konwersja rowerów, naprawa rowerów, Bosch, Brose, Shimano Steps, Bolt, serwis door-to-door, rowery',
  //   openGraph: {
  //     title: 'Imbusbike | Pracownia i Serwis Rowerów',
  //     description:
  //       'Zapewniamy kompleksowe usługi serwisu rowerowego, od tradycyjnych napraw po zaawansowane modyfikacje i konwersje rowerów elektrycznych. Certyfikowany serwis Bosch i Brose. Sprawdź naszą ofertę!',
  //     url: 'https://imbusbike.pl',
  //     image: 'https://imbusbike.pl/_ipx/s_60x60/img/logo.svg',
  //     type: 'website',
  //     locale: 'pl_PL',
  //   },
  // },
})
