<script setup lang="ts">
defineProps<{
  title: string
  description: string
}>()
</script>

<template>
  <div class="container">
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ title }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-typography-gray">{{ description }}</p>
    </section>
    <div class="mt-10">
      <BaseCarousel />
    </div>
  </div>
</template>
