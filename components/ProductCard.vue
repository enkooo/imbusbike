<script setup lang="ts">
defineProps<{
  imageUrl: string
  name: string
  category: string
  oldPrice?: string
  price: string
}>()
</script>

<template>
  <div class="h-full truncate rounded-sm border border-gray-100 shadow-sm">
    <div class="flex h-full flex-col items-center p-4 md:p-6">
      <div class="mb-4 h-full max-h-[154px] overflow-hidden">
        <NuxtImg
          :src="imageUrl"
          :alt="name"
          densities="x1"
          :placeholder="[154, 154, 75, 5]"
          width="154"
          height="154"
          fit="contain"
          background="white"
          format="webp"
        />
      </div>
      <span
        class="mb-2 max-w-[140px] self-start truncate rounded-sm border border-gray-100 px-4 py-2 text-[9px] uppercase text-muted-foreground md:px-2 md:py-1 lg:px-4 lg:py-2"
      >
        {{ category }}
      </span>

      <div class="flex w-full truncate">
        <h3 class="relative mb-2 w-full self-start whitespace-break-spaces text-sm">
          {{ name }}
        </h3>
      </div>
      <div class="mt-auto flex w-full flex-col justify-end">
        <p
          v-if="oldPrice"
          class="self-end text-xs text-muted-foreground line-through"
        >
          {{ oldPrice }}
        </p>
        <p class="self-end text-xl font-bold md:text-base lg:text-xl">
          {{ price }}
        </p>
      </div>
    </div>
  </div>
</template>
