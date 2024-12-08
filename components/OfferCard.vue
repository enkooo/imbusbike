<script setup lang="ts">
defineProps<{
  iconUrl: string
  title: string
  description: string
  benefits: string[]
  summary: string
}>()
</script>

<template>
  <div class="mx-auto h-full w-full max-w-[435px] rounded-sm p-[1px]">
    <div class="flex h-full w-full items-center justify-center rounded-sm">
      <div
        class="relative z-10 flex h-full flex-col gap-8 overflow-hidden rounded-sm p-8 text-muted-foreground shadow-[0px_16px_25px_0px_rgba(0,0,0,0.06)]"
      >
        <h3 class="text-balance text-2xl font-bold text-primary">{{ title }}</h3>
        <p>{{ description }}</p>
        <div>
          <ul class="mt-2 list-disc pl-4">
            <li
              v-for="benefit in benefits"
              :key="benefit"
            >
              {{ benefit }}
            </li>
          </ul>
        </div>
        <p class="mb-10">{{ summary }}</p>
        <NuxtLinkLocale
          class="mt-auto"
          to="/serwis"
        >
          <Button
            size="lg"
            class="w-full"
          >
            {{ $t('offer.items.button') }}
          </Button>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>
