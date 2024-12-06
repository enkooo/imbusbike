<script setup lang="ts">
import type { NewsItem, NewsItemResponse } from '~/types'

const news = ref<NewsItem[]>([])

const { data: newsData } = await useIFetch<{ data: NewsItemResponse[] }>(
  `articles?populate=*&sort=publishedAt:desc`,
)

if (newsData.value) {
  const maxDescriptionLength = 100

  news.value = newsData.value.data.map((newsItem) => {
    const truncatedDescription =
      newsItem.description.length > maxDescriptionLength
        ? newsItem.description.slice(0, maxDescriptionLength) + '...'
        : newsItem.description

    return {
      id: newsItem.id,
      title: newsItem.title,
      description: truncatedDescription,
      date: newsItem.publishedAt,
      link: '/aktualnosci/' + newsItem.id,
      imageUrl: 'https://panel.imbusbike.pl' + newsItem.cover?.url,
    }
  })
} else {
  news.value = []
}
</script>

<template>
  <main class="mx-2 min-h-[calc(100dvh-189px)] sm:container">
    <div
      class="mt-2 flex h-36 w-full items-center justify-center rounded-sm bg-primary text-secondary sm:mt-6"
    >
      <h1 class="text-3xl font-bold">{{ $t('news.title') }}</h1>
    </div>
    <div class="relative mt-6 flex w-full max-w-lg items-center gap-x-2">
      <Input
        id="search"
        type="text"
        :placeholder="$t('news.searchInput.placeholder')"
        class="pl-10"
      />
      <span class="absolute inset-y-0 start-0 flex items-center justify-center px-2">
        <Icon
          class="text-muted-foreground"
          size="25"
          name="mdi:magnify"
        />
      </span>
      <Button
        type="submit"
        class="h-10 px-12"
      >
        {{ $t('news.searchInput.label') }}
      </Button>
    </div>
    <div class="mb-20 mt-6 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <NuxtLinkLocale
        v-for="newsItem in news"
        :key="newsItem.id"
        :to="newsItem.link"
      >
        <NewsCard
          :title="newsItem.title"
          :description="newsItem.description"
          :image-url="newsItem.imageUrl"
          :date="newsItem.date"
        />
      </NuxtLinkLocale>
    </div>
    <CarouselSection
      :title="$t('recommendedProducts.title')"
      :description="$t('recommendedProducts.description')"
      type="magick"
      class="mb-32 mt-24"
    />
  </main>
</template>
