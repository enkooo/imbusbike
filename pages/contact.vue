<script setup lang="ts">
const title = 'Kontakt – Skontaktuj się z naszym serwisem rowerowym'
const description =
  'Masz pytania lub chcesz skorzystać z naszych usług serwisowych? Wypełnij formularz kontaktowy, wybierz temat rozmowy i daj nam znać, czego potrzebujesz.'

useSeoMeta({
  title,
  description,
})
</script>

<template>
  <main>
    <div class="min-h-[calc(100dvh-189px)] bg-white shadow-2xl">
      <ContactSection class="pb-24 pt-16" />
    </div>
  </main>
</template>
