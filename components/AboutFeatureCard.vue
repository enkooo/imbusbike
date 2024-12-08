<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>

<template>
  <div class="h-full rounded-sm bg-white p-7 shadow-lg">
    <div class="flex items-center justify-start gap-2">
      <Icon
        :name="icon"
        class="text-primary"
        size="20"
      />
      <h3 class="font-bold text-primary">{{ title }}</h3>
    </div>
    <p class="mt-2 text-left text-sm text-muted-foreground">{{ description }}</p>
  </div>
</template>
