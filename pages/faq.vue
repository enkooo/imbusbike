<script setup lang="ts">
const title = 'Najczęściej zadawane pytania – Serwis i Pracownia Rowerowa'
const description =
  'Poznaj odpowiedzi na najczęściej zadawane pytania dotyczące naszego serwisu i pracowni rowerowej. Dowiedz się więcej o naprawach, terminach i dostępnych usługach.'

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
