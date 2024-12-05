<script setup lang="ts">
import type { Product, ProductResponse } from '~/types'

const { title, description, type } = defineProps<{
  title: string
  description: string
  type: 'bestseller' | 'magick'
}>()

const products = ref<Product[]>([])

const fetchProducts = async () => {
  const { data: productsData } = await useIFetch<{ data: ProductResponse[] }>(
    `products?populate=*&filters[active][$eq]=true&filters[${type}][$eq]=true`,
  )

  if (productsData.value) {
    products.value = productsData.value.data.map((product) => ({
      id: product.id,
      name: product.name,
      category: product.category.name,
      price: product.price + ' zł',
      imageUrl: 'https://panel.imbusbike.pl' + product.images?.[0]?.url,
    }))
  } else {
    products.value = []
  }
}

await fetchProducts()
</script>

<template>
  <div class="container">
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ title }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-typography-gray">{{ description }}</p>
    </section>
    <div class="mt-10">
      <BaseCarousel :products="products" />
    </div>
  </div>
</template>
