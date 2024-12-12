<script setup lang="ts">
useSeoMeta({
  charset: 'utf-8',
  description:
    'Imbusbike to pracownia specjalizująca się w serwisie rowerów klasycznych oraz elektrycznych renomowanych marek takich jak Bosch, Brose oraz Shimano.',
  applicationName: 'Imbusbike',
  author: 'Imbusbike',
  ogUrl: 'https://imbusbike.pl',
  ogImage: 'https://imbusbike.pl/_ipx/s_60x60/img/logo.svg',
  twitterTitle: 'Imbusbike | Pracownia Serwis rowerów',
  twitterDescription:
    'Imbusbike to profesjonalny serwis rowerów klasycznych i elektrycznych renomowanych marek jak Bosch, Brose, Shimano.',
  twitterImage: 'https://imbusbike.pl/_ipx/s_60x60/img/logo.svg',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
})

const route = useRoute()

useServerHead({
  bodyAttrs: {
    class: 'font-primary',
  },
})

useHead(() => ({
  htmlAttrs: {
    lang: 'pl'
  },
  link: [
    {
      rel: 'canonical',
      href: 'https://imbusbike.pl' + route.path,
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '57x57',
      href: '/apple-touch-icon-57x57.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '72x72',
      href: '/apple-touch-icon-72x72.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '76x76',
      href: '/apple-touch-icon-76x76.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '114x114',
      href: '/apple-touch-icon-114x114.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '120x120',
      href: '/apple-touch-icon-120x120.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '144x144',
      href: '/apple-touch-icon-144x144.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '152x152',
      href: '/apple-touch-icon-152x152.png',
    },
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/apple-touch-icon-180x180.png',
    },
  ],
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - Imbusbike` : 'Imbusbike | Pracownia - Serwis Rowerów',
}))
</script>

<template>
  <NuxtLoadingIndicator
    color="#000"
    :height="4"
  />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
