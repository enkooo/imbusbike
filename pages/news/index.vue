<script setup lang="ts">
const news = [
  {
    id: 1,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/1',
    imageUrl: '/img/news/article1.jpg',
  },
  {
    id: 2,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/2',
    imageUrl: '/img/news/article2.jpg',
  },
  {
    id: 3,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/3',
    imageUrl: '/img/news/article2.jpg',
  },
  {
    id: 4,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/4',
    imageUrl: '/img/news/article1.jpg',
  },
  {
    id: 5,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/5',
    imageUrl: '/img/news/article1.jpg',
  },
  {
    id: 6,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/6',
    imageUrl: '/img/news/article2.jpg',
  },
  {
    id: 7,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/7',
    imageUrl: '/img/news/article2.jpg',
  },
  {
    id: 8,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/8',
    imageUrl: '/img/news/article1.jpg',
  },
  {
    id: 9,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/9',
    imageUrl: '/img/news/article1.jpg',
  },
  {
    id: 10,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/10',
    imageUrl: '/img/news/article2.jpg',
  },
  {
    id: 11,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/11',
    imageUrl: '/img/news/article2.jpg',
  },
  {
    id: 12,
    title: 'Nowy rower w ofercie!',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...',
    date: 'wtorek, 20.09.2024',
    link: '/aktualnosci/12',
    imageUrl: '/img/news/article1.jpg',
  },
]
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
      class="mb-32 mt-24"
    />
  </main>
</template>
