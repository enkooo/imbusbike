<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { useRouter, useRoute, type LocationQuery } from 'vue-router'
import * as z from 'zod'
import type { CategoryResponse, Filter, Product, ProductResponse } from '~/types'

const config = useRuntimeConfig()
const baseUrl = config.public.baseUrl
const { t } = useI18n()
const router = useRouter()
const route = useRoute()

const products = ref<Product[]>([])
const filters = ref<Filter[]>([])
const selectedSort = ref<string>(typeof route.query.sort === 'string' ? route.query.sort : '')
const searchQuery = ref<string>(typeof route.query.search === 'string' ? route.query.search : '')

const fetchProducts = async (query: LocationQuery) => {
  let queryString = ''

  const filterValue = query.filters
  if (filterValue && typeof filterValue === 'string') {
    const filters = filterValue.split(',').map((filter, index) => {
      return `filters[category][id][$in][${index}]=${filter}`
    })
    queryString += filters.join('&')
  }

  if (query.sort && query.sort !== 'default') {
    queryString += (queryString ? '&' : '') + `sort[0]=${query.sort}`
  }

  if (query.search && typeof query.search === 'string') {
    queryString +=
      (queryString ? '&' : '') + `filters[name][$contains]=${encodeURIComponent(query.search)}`
  }

  const { data: productsData } = await useIFetch<{ data: ProductResponse[] }>(
    `products?populate=*&filters[active][$eq]=true&${queryString}`,
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

const fetchFilters = async () => {
  const { data: filtersData } = await useIFetch<{ data: CategoryResponse[] }>(
    '/categories?populate=*&filters[parent][$notNull]',
  )

  if (filtersData.value) {
    filters.value = filtersData.value.data.map((category) => {
      return {
        id: category.id,
        name: category.name,
        children: category.children
          ? category.children.map((child) => ({
              id: child.id,
              name: child.name,
            }))
          : [],
      }
    })
  }
}

await fetchFilters()
await fetchProducts(route.query)

const formSchema = toTypedSchema(
  z.object({
    selectedFilters: z.array(z.number()).optional(),
  }),
)

const { handleSubmit } = useForm({
  validationSchema: formSchema,
  initialValues: {
    selectedFilters:
      typeof route.query.filters === 'string' ? route.query.filters.split(',').map(Number) : [],
  },
})

const onSubmit = handleSubmit(async (formValues) => {
  const selectedFilters = formValues.selectedFilters || []

  const newQuery = {
    ...route.query,
    filters: selectedFilters.join(','),
  }

  router.push({ query: newQuery })

  await fetchProducts(newQuery)
})

const handleSearch = async () => {
  const newQuery = {
    ...route.query,
    search: searchQuery.value || null,
  }

  router.push({ query: newQuery })

  await fetchProducts(newQuery)
}

watch(
  selectedSort,
  async (newSort) => {
    const newQuery = {
      ...route.query,
      sort: newSort || null,
    }

    router.push({ query: newQuery })

    await fetchProducts(newQuery)
  },
  { immediate: true },
)
</script>

<template>
  <main class="mx-2 min-h-[calc(100dvh-213px)] sm:container">
    <div
      class="mt-2 flex h-36 w-full items-center justify-center rounded-sm bg-primary text-secondary sm:mt-6"
    >
      <h1 class="text-3xl font-bold">{{ $t('products.title') }}</h1>
    </div>
    <div class="flex w-full">
      <div
        class="my-20 mr-6 mt-6 hidden min-w-[240px] rounded-sm border border-gray-100 p-5 shadow-sm lg:block"
      >
        <form @submit="onSubmit">
          <ProductsFilters :filters="filters" />
          <div class="mt-6 flex justify-start">
            <Button
              type="submit"
              class="w-full"
            >
              {{ $t('products.filters.label') }}
            </Button>
          </div>
        </form>
      </div>
      <div class="w-full">
        <div class="mt-6 flex flex-col gap-2 md:flex-row">
          <div class="relative flex w-full items-center gap-x-2 md:max-w-lg">
            <Input
              id="search"
              v-model="searchQuery"
              type="text"
              :placeholder="$t('products.searchInput.placeholder')"
              class="pl-10"
              @keyup.enter="handleSearch"
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
              @click="handleSearch"
            >
              {{ $t('products.searchInput.label') }}
            </Button>
          </div>
          <div class="flex w-full gap-2 sm:w-max">
            <Select v-model="selectedSort">
              <SelectTrigger class="w-full sm:w-[180px]">
                <SelectValue placeholder="Sortowanie" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default"> {{ $t('products.filters.default') }} </SelectItem>
                  <SelectItem value="price:asc">{{ $t('products.filters.priceAsc') }}</SelectItem>
                  <SelectItem value="price:desc">{{ $t('products.filters.priceDesc') }}</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Drawer>
              <DrawerTrigger as-child>
                <Button
                  type="submit"
                  class="h-10 w-full sm:w-auto sm:px-12 lg:hidden"
                >
                  {{ $t('products.filters.filtering') }}
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <form @submit="onSubmit">
                  <div class="mx-auto w-full max-w-sm">
                    <DrawerHeader class="sr-only">
                      <DrawerTitle>{{ $t('products.filters.filters') }}</DrawerTitle>
                      <DrawerDescription>{{
                        $t('products.filters.choseFilters')
                      }}</DrawerDescription>
                    </DrawerHeader>
                    <div class="p-4 pb-0">
                      <ScrollArea class="h-[400px] w-[350px]">
                        <ProductsFilters
                          :is-mobile="true"
                          :filters="filters"
                        />
                      </ScrollArea>
                    </div>
                    <DrawerFooter>
                      <DrawerClose as-child>
                        <Button type="submit"> {{ $t('products.filters.label') }} </Button>
                      </DrawerClose>
                      <DrawerClose as-child>
                        <Button variant="outline"> {{ $t('products.filters.cancel') }} </Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </form>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div class="mb-20 mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-6 xl:grid-cols-4">
          <NuxtLinkLocale
            v-for="product in products"
            :key="product.id"
            :to="product.link"
          >
            <ProductCard
              :image-url="product.imageUrl"
              :name="product.name"
              :category="product.category"
              :price="product.price"
            />
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </main>
</template>
