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
  {
    id: 8,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 9,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 10,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 11,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 12,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 13,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 14,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 15,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 16,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 17,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
  {
    id: 18,
    name: 'Rower Merida Matts 7.30',
    category: 'ROWERY',
    price: '2799.00 zł',
    oldPrice: '3199.00 zł',
    imageUrl: '/img/bike.jpg',
  },
])
</script>

<template>
  <main class="mx-2 min-h-[calc(100dvh-189px)] sm:container">
    <div
      class="mt-2 flex h-36 w-full items-center justify-center rounded-sm bg-primary text-secondary sm:mt-6"
    >
      <h1 class="text-3xl font-bold">{{ $t('products.title') }}</h1>
    </div>
    <div class="flex w-full">
      <div
        class="my-20 mr-6 mt-6 hidden min-w-[240px] rounded-sm border border-gray-100 shadow-sm lg:block"
      ></div>
      <div class="w-full">
        <div class="mt-6 flex flex-col gap-2 md:flex-row">
          <div class="relative flex w-full items-center gap-x-2 md:max-w-lg">
            <Input
              id="search"
              type="text"
              :placeholder="$t('products.searchInput.placeholder')"
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
              {{ $t('products.searchInput.label') }}
            </Button>
          </div>
          <div class="flex w-full gap-2 sm:w-max">
            <Select>
              <SelectTrigger class="w-full sm:w-[180px]">
                <SelectValue placeholder="Sortowanie" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="default"> Domyślnie </SelectItem>
                  <SelectItem value="price-up"> Cena rosnąco </SelectItem>
                  <SelectItem value="price-down"> Cena malejąco </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Drawer>
              <DrawerTrigger as-child>
                <Button
                  type="submit"
                  class="h-10 w-full sm:w-auto sm:px-12 lg:hidden"
                >
                  Filtwoanie
                </Button>
              </DrawerTrigger>
              <DrawerContent>
                <div class="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>Move Goal</DrawerTitle>
                    <DrawerDescription>Set your daily activity goal.</DrawerDescription>
                  </DrawerHeader>
                  <div class="p-4 pb-0">
                    <ScrollArea class="h-[200px] w-[350px] p-4">
                      Jokester began sneaking into the castle in the middle of the night and leaving
                      jokes all over the place: under the king's pillow, in his soup, even in the
                      royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                      then, one day, the people of the kingdom discovered that the jokes left by
                      Jokester were so funny that they couldn't help but laugh. And once they
                      started laughing, they couldn't stop.
                    </ScrollArea>
                  </div>
                  <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose as-child>
                      <Button variant="outline"> Cancel </Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
        <div class="mb-20 mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 md:gap-6 xl:grid-cols-4">
          <ProductCard
            v-for="product in products"
            :key="product.id"
            :image-url="product.imageUrl"
            :name="product.name"
            :category="product.category"
            :old-price="product.oldPrice"
            :price="product.price"
          />
        </div>
      </div>
    </div>
  </main>
</template>
