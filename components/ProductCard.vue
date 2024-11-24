<script setup lang="ts">
defineProps<{
  imageUrl: string
  name: string
  category: string
  oldPrice: string
  price: string
}>()
</script>

<template>
  <div class="rounded-sm border border-gray-100 shadow-sm">
    <div class="flex flex-col items-center p-7">
      <NuxtImg
        :src="imageUrl"
        :alt="name"
        width="154"
        height="88"
        densities="x1"
        class="mb-4 object-cover"
      />
      <span
        class="mb-2 self-start rounded-sm border border-gray-100 px-4 py-2 text-[9px] uppercase text-muted-foreground md:px-2 md:py-1 lg:px-4 lg:py-2"
      >
        {{ category }}
      </span>

      <h3 class="mb-2 self-start text-base md:text-sm lg:text-base">
        {{ name }}
      </h3>
      <p class="self-end text-xs text-muted-foreground line-through">
        {{ oldPrice }}
      </p>
      <p class="self-end text-xl font-bold md:text-base lg:text-xl">
        {{ price }}
      </p>
    </div>
  </div>
</template>
