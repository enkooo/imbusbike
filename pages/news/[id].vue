<script setup lang="ts">
import type { NewsItemResponse, NewsItem } from '~/types'

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

      <div class="container relative mb-8 overflow-hidden rounded-lg px-14">
        <Carousel class="relative w-full">
          <CarouselContent>
            <CarouselItem
              v-for="(image, index) in article?.images || []"
              :key="index"
            >
              <div class="relative h-full w-full overflow-hidden rounded-lg">
                <div
                  class="h-full min-h-[300px] w-full overflow-hidden rounded-lg md:min-h-[400px] lg:min-h-[500px]"
                >
                  <NuxtImg
                    :src="baseUrl + image?.url"
                    sizes="365px sm:640px md:320px md:800px lg:1024px xl:1280px 2xl:1536px"
                    densities="x1"
                    quality="80"
                    alt=""
                    format="webp"
                    class="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>

      <div class="prose prose-gray mx-auto max-w-3xl">
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
