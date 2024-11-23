<script setup lang="ts">
defineProps<{
  title: string
  description: string
  date: string
  imageUrl: string
}>()
</script>

<template>
  <div class="overflow-hidden rounded-sm border border-gray-200">
    <div class="flex flex-col sm:flex-row md:flex-col lg:flex-row">
      <NuxtImg
        :src="imageUrl"
        alt=""
        class="max-h-40 w-full min-w-44 rounded-l-sm object-cover sm:max-h-48"
      />
      <div class="flex flex-col gap-y-2 p-6">
        <h3 class="font-semibold">{{ title }}</h3>
        <p class="text-sm text-muted-foreground">
          {{ description }}
        </p>
        <p class="mt-2 text-xs text-muted-foreground sm:mt-auto md:mt-2 lg:mt-auto">
          {{ date }}
        </p>
      </div>
    </div>
  </div>
</template>
