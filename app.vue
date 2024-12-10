<script setup lang="ts">
useSeoMeta({
  charset: 'utf-8',
  description:
    'Imbusbike to renomowana pracownia specjalizująca się w serwisie rowerów klasycznych oraz elektrycznych renomowanych marek takich jak Bosch, Brose oraz Shimano. Jeśli szukasz profesjonalnej obsługi i kompleksowej naprawy swojego roweru to trafiłeś w idealne miejsce.',
  applicationName: 'Imbusbike',
  author: 'Imbusbike',
  ogUrl: 'https://imbusbike.pl',
  ogImage: 'https://imbusbike.pl/_ipx/s_60x60/img/logo.svg',
  ogSiteName: 'www.imbusbike.pl',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Imbusbike | Pracownia Serwis rowerów',
  twitterDescription:
    'Imbusbike to profesjonalny serwis rowerów klasycznych i elektrycznych renomowanych marek jak Bosch, Brose, Shimano.',
  twitterImage: 'https://imbusbike.pl/_ipx/s_60x60/img/logo.svg',
  themeColor: '#000000',
  viewport: 'width=device-width, initial-scale=1.0',
  robots: 'index, follow',
})

const route = useRoute()

useServerHead({
  bodyAttrs: {
    class: 'font-primary antialiased',
  },
})

useHead(() => ({
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
  ],
  titleTemplate: (titleChunk) =>
    titleChunk ? `${titleChunk} - Imbusbike` : 'Imbusbike | Pracownia - Serwis Rowerów',
}))
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
