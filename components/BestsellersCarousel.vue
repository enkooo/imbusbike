<script setup lang="ts">
const products = ref([
  {
    id: 1,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 2,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 3,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 4,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 5,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 6,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 7,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
])
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
          class="basis-[65%] min-[500px]:basis-[40%] md:basis-1/4 xl:basis-1/5"
        >
          <div class="lg:p-1">
            <div class="flex aspect-square items-center justify-center">
              <ProductCard
                :image-url="product.imageUrl"
                :name="product.name"
                :category="product.category"
                :old-price="product.oldPrice"
                :price="product.price"
              />
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
