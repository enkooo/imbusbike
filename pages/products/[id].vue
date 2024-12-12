<script setup lang="ts">
import { CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import type { ProductResponse, Product } from '~/types'

const route = useRoute()
const productId = route.params.id as string
const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl
const { t } = useI18n()

const product = ref<Product | null>(null)

const { data: productData } = await useIFetch<{ data: ProductResponse }>(
  `products/${productId}?populate=*`,
)

if (productData.value) {
  product.value = {
    id: productData.value.data.id,
    name: productData.value.data.name,
    category: productData.value.data.category.name,
    description: productData.value.data.description,
    attributes: productData.value.data.attributes,
    url: productData.value.data.url,
    price: productData.value.data.price + ' zł',
    imageUrl: `${baseUrl}${productData.value.data.images?.[0]?.url}`,
    images: productData.value.data.images,
    link: `${t('menu.products.link')}/${productData.value.data.documentId}`,
  }
} else {
  product.value = null
}

const title = product.value?.name
const description = product.value?.description

useSeoMeta({
  title,
  description,
})
</script>

<template>
  <div class="min-h-screen bg-white">
    <main class="container mx-auto px-4 pb-24 pt-8">
      <div class="grid gap-8 md:grid-cols-2">
        <div class="space-y-4">
          <div class="relative aspect-square rounded-lg border">
            <Carousel class="relative w-full">
              <CarouselContent>
                <CarouselItem
                  v-for="(image, index) in product?.images"
                  :key="index"
                >
                  <div class="flex aspect-square items-center justify-center">
                    <NuxtImg
                      :src="baseUrl + image?.url"
                      sizes="320px sm:640px md:320px lg:480px xl:640px"
                      densities="x1"
                      alt="product image"
                      format="webp"
                      class="h-full w-full overflow-hidden rounded-lg object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious class="left-4" />
              <CarouselNext class="right-4" />
            </Carousel>
          </div>
        </div>

        <div class="space-y-6">
          <div>
            <h1 class="text-3xl font-bold">{{ product?.name }}</h1>
            <p class="mt-2 text-xl font-semibold">{{ product?.price }}</p>
          </div>

          <div class="space-y-2">
            <h2 class="text-lg font-semibold">{{ $t('products.productDescription') }}</h2>
            <p class="text-gray-600">
              {{ product?.description }}
            </p>
          </div>

          <div class="space-y-2">
            <h2 class="text-lg font-semibold">{{ $t('products.specifications') }}</h2>
            <ul class="list-inside list-disc text-gray-600">
              <li
                v-for="attribute in product?.attributes"
                :key="attribute.id"
              >
                <span class="font-semibold">{{ attribute.key }}:</span> {{ attribute.value }}
              </li>
            </ul>
          </div>

          <a
            v-if="product?.url"
            :href="product?.url"
            target="_blank"
          >
            <Button class="mt-10 w-full py-6 text-lg">{{ $t('products.moveToPurchase') }}</Button>
          </a>
          <p v-else>
            {{ $t('products.noLink') }}
          </p>
        </div>
      </div>

      <CarouselSection
        :title="$t('recommendedProducts.title')"
        :description="$t('recommendedProducts.description')"
        type="magick"
        class="mb-32 mt-24"
      />
    </main>
  </div>
</template>
