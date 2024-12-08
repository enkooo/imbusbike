<script setup lang="ts">
const { t } = useI18n()

const OFFER_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    iconUrl: '/img/repair.svg',
    title: t('offer.items.mvp.title'),
    description: t('offer.items.mvp.description'),
    benefits: [
      t('offer.items.mvp.benefits.0'),
      t('offer.items.mvp.benefits.1'),
      t('offer.items.mvp.benefits.2'),
    ],
    summary: t('offer.items.mvp.summary'),
  },
  {
    id: 2,
    iconUrl: '/img/electric.svg',
    title: t('offer.items.custom.title'),
    description: t('offer.items.custom.description'),
    benefits: [
      t('offer.items.custom.benefits.0'),
      t('offer.items.custom.benefits.1'),
      t('offer.items.custom.benefits.2'),
    ],
    summary: t('offer.items.custom.summary'),
  },
  {
    id: 3,
    iconUrl: '/img/door.svg',
    title: t('offer.items.digitalization.title'),
    description: t('offer.items.digitalization.description'),
    benefits: [
      t('offer.items.digitalization.benefits.0'),
      t('offer.items.digitalization.benefits.1'),
      t('offer.items.digitalization.benefits.2'),
    ],
    summary: t('offer.items.digitalization.summary'),
  },
  {
    id: 4,
    iconUrl: '/img/door.svg',
    title: t('offer.items.electric.title'),
    description: t('offer.items.electric.description'),
    benefits: [
      t('offer.items.electric.benefits.0'),
      t('offer.items.electric.benefits.1'),
      t('offer.items.electric.benefits.2'),
    ],
    summary: t('offer.items.electric.summary'),
  },
])
</script>

<template>
  <div class="container flex flex-col gap-6">
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('offer.title') }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-muted-foreground">{{ $t('offer.description') }}</p>
    </section>
    <div class="mt-14 grid justify-center gap-5 gap-y-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-10">
      <OfferCard
        v-for="(offer, index) in OFFER_SECTION_ITEMS"
        :key="offer.id"
        :benefits="offer.benefits"
        :description="offer.description"
        :icon-url="offer.iconUrl"
        :summary="offer.summary"
        :title="offer.title"
        class="col-span-2"
        :class="{ 'md:col-start-2 lg:col-start-auto': index === OFFER_SECTION_ITEMS.length - 1 }"
      />
    </div>
  </div>
</template>
