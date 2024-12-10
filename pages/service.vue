<script setup lang="ts">
const title = 'Terminarz'
const description =
  'Terminarz lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

useSeoMeta({
  title,
  description,
})
</script>

<template>
  <main>
    <div class="min-h-[calc(100dvh-189px)] bg-white shadow-2xl">
      <ServiceSection class="pb-24 pt-16" />
    </div>
  </main>
</template>
