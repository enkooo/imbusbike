<script setup lang="ts">
const news = [
  {
    id: 1,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/artykuly/1',
    imageUrl: '/img/news/article1.jpg',
  },
  {
    id: 2,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/artykuly/2',
    imageUrl: '/img/news/article2.jpg',
  },
  {
    id: 3,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/artykuly/3',
    imageUrl: '/img/news/article2.jpg',
  },
  {
    id: 4,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/artykuly/4',
    imageUrl: '/img/news/article1.jpg',
  },
]
</script>

<template>
  <div class="container">
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('news.title') }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-typography-gray">{{ $t('news.description') }}</p>
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
              :image-url="newsItem.imageUrl"
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
