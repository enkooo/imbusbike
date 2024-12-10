<script setup lang="ts">
defineProps<{
  iconUrl: string
  title: string
  description: string
  benefits: string[]
  summary: string
  button: string
}>()
</script>

<template>
  <div class="mx-auto h-full w-full max-w-[435px] rounded-sm p-[1px]">
    <div class="flex h-full w-full items-center justify-center rounded-sm">
      <div
        class="relative z-10 flex h-full flex-col gap-8 overflow-hidden rounded-sm p-8 text-muted-foreground [box-shadow:0_1px_15px_-1px_rgba(0,0,0,0.1)]"
      >
        <h3 class="text-balance text-2xl font-bold text-primary md:min-h-[64px]">
          {{ title }}
        </h3>
        <p class="text-muted-foreground md:min-h-[96px]">
          {{ description }}
        </p>
        <div>
          <ul class="mt-1 list-disc pl-4">
            <li
              v-for="benefit in benefits"
              :key="benefit"
            >
              {{ benefit }}
            </li>
          </ul>
        </div>
        <p class="mb-5">{{ summary }}</p>
        <NuxtLinkLocale
          class="mt-auto"
          to="/terminarz"
        >
          <Button
            size="lg"
            class="w-full"
          >
            {{ button }}
          </Button>
        </NuxtLinkLocale>
      </div>
    </div>
  </div>
</template>
