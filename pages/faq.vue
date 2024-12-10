<script setup lang="ts">
const title = 'FAQ'
const description =
  'FAQ lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

useSeoMeta({
  title,
  description,
})
</script>

<template>
  <main>
    <div class="min-h-[calc(100dvh-189px)] bg-white shadow-2xl">
      <FaqSection class="pb-24 pt-16" />
    </div>
  </main>
</template>
