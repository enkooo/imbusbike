<script setup lang="ts">
import type { Product } from '~/types'

defineProps<{
  products: Product[]
}>()
</script>

<template>
  <section class="-mx-7 md:mx-0 md:px-10">
    <Carousel
      class="relative w-full"
      :opts="{
        align: 'start',
      }"
    >
      <CarouselContent class="ml-2 min-[500px]:ml-0 md:-ml-4">
        <CarouselItem
          v-for="product in products"
          :key="product.id"
          class="basis-[65%] min-[500px]:basis-[40%] md:basis-1/3 lg:basis-1/4 xl:basis-1/5"
        >
          <div class="lg:p-1">
            <div class="flex aspect-square items-center justify-center">
              <NuxtLink
                class="w-full truncate rounded-sm"
                :to="product.link"
              >
                <ProductCard
                  :image-url="product.imageUrl"
                  :name="product.name"
                  :category="product.category"
                  :price="product.price"
                />
              </NuxtLink>
            </div>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious class="hidden md:inline-flex" />
      <CarouselNext class="hidden md:inline-flex" />
    </Carousel>
  </section>
</template>

<style>
.no-scrollbar {
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
</style>
