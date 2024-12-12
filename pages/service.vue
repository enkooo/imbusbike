<script setup lang="ts">
const title = 'Terminarz serwisu rowerowego – Zarezerwuj dogodny termin'
const description =
  'Zaplanuj swój serwis rowerowy, wybierając dogodny termin poprzez nasz formularz kontaktowy. Skorzystaj z kalendarza i zamów naprawę lub przegląd, dostosowany do Twojego harmonogramu.'

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
