<script setup lang="ts">
const { t } = useI18n()

const FEATURE_SECTION_ITEMS = computed(() => [
  {
    id: 1,
    title: t('about.values.experience.title'),
    description: t('about.values.experience.description'),
  },
  {
    id: 2,
    title: t('about.values.teamwork.title'),
    description: t('about.values.teamwork.description'),
  },
  {
    id: 3,
    title: t('about.values.clientUnderstanding.title'),
    description: t('about.values.clientUnderstanding.description'),
  },
  {
    id: 4,
    title: t('about.values.businessIt.title'),
    description: t('about.values.businessIt.description'),
  },
])
</script>

<template>
  <div class="text-center md:text-left">
    <div class="container flex flex-col gap-16 lg:grid lg:grid-cols-12 lg:gap-10">
      <NuxtImg
        src="/img/about-us.jpg"
        alt=""
        format="webp"
        class="hidden h-full w-full rounded-sm object-cover shadow-lg lg:col-span-4 lg:block lg:max-h-none xl:col-span-3"
      />
      <div class="col-start-5 col-end-13 xl:col-start-4">
        <div class="flex flex-col gap-6 text-muted-foreground">
          <h2 class="text-3xl font-bold text-black">
            {{ $t('about.title') }}
          </h2>
          <p>{{ $t('about.description') }}</p>
          <NuxtImg
            src="/img/about-us.jpg"
            alt=""
            format="webp"
            class="h-full max-h-[300px] w-full rounded-sm object-cover object-[0_27%] shadow-lg lg:hidden"
          />
          <div
            class="flex flex-col gap-8 md:col-start-1 md:col-end-3 md:row-start-4 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-4 xl:col-start-2 xl:row-start-4"
          >
            <AboutFeatureCard
              v-for="feature in FEATURE_SECTION_ITEMS"
              :key="feature.id"
              icon="mdi:check-circle-outline"
              :title="feature.title"
              :description="feature.description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
