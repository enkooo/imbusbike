<script setup lang="ts">
import type { NewsItem, NewsItemResponse } from '~/types'

const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl
const { t } = useI18n()
const news = ref<NewsItem[]>([])

const { data: newsData } = await useIFetch<{ data: NewsItemResponse[] }>(
  `articles?populate=*&pagination[limit]=3&sort=publishedAt:desc`,
)

if (newsData.value) {
  news.value = newsData.value.data.map((newsItem) => {
    return {
      id: newsItem.id,
      documentId: newsItem.documentId,
      title: newsItem.title,
      description: newsItem.description,
      date: newsItem.publishedAt,
      link: `${t('menu.news.link')}/${newsItem.documentId}`,
      imageUrl: newsItem.cover?.url ? `${baseUrl}${newsItem.cover.url}` : '/img/news/article1.jpg',
      text: newsItem.text,
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
        <div
          class="grid w-full grid-cols-1 gap-6 min-[500px]:grid-cols-2 min-[580px]:grid-cols-3 min-[700px]:grid-cols-3 md:grid-cols-3 min-[860px]:grid-cols-4 lg:grid-cols-3"
        >
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
          <div
            class="hidden flex-col justify-between overflow-hidden rounded-sm bg-primary min-[500px]:flex min-[580px]:hidden min-[700px]:hidden min-[860px]:flex lg:hidden"
          >
            <NuxtImg
              src="/img/news/news-bike.jpg"
              alt="News bike"
              width="262"
              height="206"
              format="webp"
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
      </div>
      <div class="mt-5 text-right">
        <NuxtLinkLocale
          :to="$t('news.link.url')"
          class="flex-col justify-between overflow-hidden rounded-sm text-muted-foreground underline hover:underline min-[500px]:hidden min-[580px]:block min-[700px]:block min-[860px]:hidden lg:block"
        >
          {{ $t('news.link.label3') }}
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>
