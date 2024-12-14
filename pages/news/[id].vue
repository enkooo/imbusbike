<script setup lang="ts">
import type { NewsItemResponse, NewsItem } from '~/types'
import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'

const route = useRoute()
const articleId = route.params.id as string
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl

const article = ref<NewsItem | null>(null)

const { data: articleData } = await useIFetch<{ data: NewsItemResponse }>(
  `articles/${articleId}?populate=*`,
)

if (articleData.value) {
  article.value = {
    id: articleData.value.data.id,
    documentId: articleData.value.data.documentId,
    title: articleData.value.data.title,
    description: articleData.value.data.description,
    imageUrl: articleData.value?.data?.cover?.url,
    images: articleData.value.data.images,
    date: articleData.value.data.publishedAt,
    link: articleData.value.data.link,
    text: articleData.value.data.text,
  }
} else {
  article.value = null
}

const title = article.value?.title
const description = article.value?.description

useSeoMeta({
  title,
  description,
})

const { formatPolishDate } = useDateFormatter()
const formattedDate = formatPolishDate(article.value?.date || '')
</script>

<template>
  <div class="min-h-screen bg-white">
    <main class="container mx-auto px-4 pb-24 pt-8">
      <div class="mb-8 space-y-4">
        <h1 class="text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
          {{ article?.title }}
        </h1>
        <div class="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div class="flex items-center gap-2">
            <Icon
              name="mdi:calendar-month-outline"
              size="18"
              class="text-muted-foreground"
            />
            <span>{{ formattedDate }}</span>
          </div>
        </div>
      </div>

      <div class="relative mb-8 rounded-lg">
        <Carousel class="relative w-full">
          <CarouselContent>
            <CarouselItem
              v-for="(image, index) in article?.images || []"
              :key="index"
            >
              <div class="relative h-full rounded-lg">
                <div
                  class="flex h-full min-h-[300px] flex-col items-center justify-center overflow-hidden rounded-lg md:min-h-[400px] lg:min-h-[500px]"
                >
                  <NuxtImg
                    :src="baseUrl + image?.url"
                    densities="x1"
                    quality="80"
                    alt=""
                    format="webp"
                    class="inset-0 mx-auto max-h-[300px] overflow-hidden rounded-lg object-contain md:max-h-[400px] lg:max-h-[500px]"
                  />
                  <p class="prose prose-gray mx-auto mt-4 max-w-3xl">
                    {{ article?.images?.[index].alternativeText }}
                  </p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious class="left-[50%] top-full -translate-x-[40px] translate-y-[25px]" />
          <CarouselNext class="right-[50%] top-full translate-x-[40px] translate-y-[25px]" />
        </Carousel>
      </div>
      <div class="prose prose-gray mx-auto mt-20 max-w-3xl">
        <DynamicContent :blocks="article?.text || []" />
      </div>
      <CarouselSection
        :title="$t('recommendedProducts.title')"
        :description="$t('recommendedProducts.description')"
        type="magick"
        class="mt-32"
      />
    </main>
  </div>
</template>
