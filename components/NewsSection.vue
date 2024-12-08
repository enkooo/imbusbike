<script setup lang="ts">
import type { NewsItem, NewsItemResponse } from '~/types'

const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl
const { t } = useI18n()
const news = ref<NewsItem[]>([])

const { data: newsData } = await useIFetch<{ data: NewsItemResponse[] }>(
  `articles?populate=*&pagination[limit]=4&sort=publishedAt:desc`,
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
      documentId: newsItem.documentId,
      title: newsItem.title,
      description: truncatedDescription,
      date: newsItem.publishedAt,
      link: `${t('menu.news.link')}/${newsItem.documentId}`,
      imageUrl: `${baseUrl}${newsItem.cover?.url}`,
    }
  })
} else {
  news.value = []
}
</script>

<template>
  <div class="container">
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('news.title') }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-muted-foreground">{{ $t('news.description') }}</p>
    </section>
    <div class="mt-10">
      <div class="flex gap-x-6">
        <div class="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
          <NuxtLinkLocale
            v-for="newsItem in news"
            :key="newsItem.id"
            :to="newsItem.link"
          >
            <NewsCard
              :title="newsItem.title"
              :description="newsItem.description"
              :image-url="newsItem.imageUrl ?? '/img/news/article1.jpg'"
              :date="newsItem.date"
            />
          </NuxtLinkLocale>
        </div>
        <div class="hidden flex-col justify-between overflow-hidden rounded-sm bg-primary xl:flex">
          <NuxtImg
            src="/img/news/news-bike.jpg"
            alt=""
            width="262"
            height="206"
          />

          <NuxtLinkLocale
            :to="$t('news.link.url')"
            class="flex flex-col justify-end px-7 pb-14 text-center"
          >
            <span class="text-4xl font-bold text-primary-foreground">
              {{ $t('news.link.label1') }}
            </span>
            <span class="text-sm text-muted-foreground">
              {{ $t('news.link.label2') }}
            </span>
          </NuxtLinkLocale>
        </div>
      </div>
      <div class="mt-5 text-right xl:hidden">
        <NuxtLinkLocale
          :to="$t('news.link.url')"
          class="text-muted-foreground hover:underline"
        >
          {{ $t('news.link.label3') }}
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>
