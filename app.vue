<script setup lang="ts">
const { t } = useI18n()

useHead({
  title: `${t('menu.home.label')} ${t('menu.home.subLabel')}`,
})
</script>

<template>
  <div class="font-primary">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
