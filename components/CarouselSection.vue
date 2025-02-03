<script setup lang="ts">
import type { Product, ProductResponse } from '~/types'

const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl
const { t } = useI18n()

const { title, description, type, productId } = defineProps<{
  title: string
  description: string
  type: 'bestseller' | 'magick'
  productId?: string
}>()

const products = ref<Product[]>([])

const fetchProducts = async () => {
  const { data: productsData } = await useIFetch<{ data: ProductResponse[] }>(
    `products?populate=*&filters[active][$eq]=true&filters[${type}][$eq]=true${productId ? `&filters[documentId][$ne]=${productId}` : ''}`,
  )

  if (productsData.value) {
    products.value = productsData.value.data.map((product) => ({
      id: product.id,
      name: product.name,
      category: product.category.name,
      description: product.description,
      attributes: product.attributes,
      url: product.url,
      price: `${product.price} zł`,
      imageUrl: `${baseUrl}${product.images?.[0]?.url}`,
      link: `${t('menu.products.link')}/${product.documentId}`,
    }))
  } else {
    products.value = []
  }
}

await fetchProducts()
</script>

<template>
  <div
    v-if="products.length > 3"
    class="container"
  >
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ title }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-muted-foreground">{{ description }}</p>
    </section>
    <div class="mt-10">
      <BaseCarousel :products="products" />
    </div>
  </div>
</template>
