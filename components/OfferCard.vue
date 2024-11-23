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
  <div>
    <div class="h-full w-full max-w-[435px] rounded-xl p-[1px]">
      <div class="flex h-full w-full items-center justify-center rounded-xl">
        <div
          class="relative z-10 flex h-full flex-col gap-8 overflow-hidden rounded-xl p-8 text-muted-foreground shadow-[0px_16px_25px_0px_rgba(0,0,0,0.06)]"
        >
          <div class="flex gap-x-6">
            <div class="relative flex size-16 items-center justify-center rounded-xl shadow-lg">
              <NuxtImg
                :src="iconUrl"
                alt=""
                width="40"
                height="40"
                densities="x1"
                class="size-10 h-full min-h-10 w-full min-w-10"
              />
            </div>
            <h3 class="text-balance text-2xl font-bold text-primary">{{ title }}</h3>
          </div>
          <p>{{ description }}</p>
          <div>
            <p>{{ $t('offer.benefits') }}:</p>
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
        </div>
      </div>
    </div>
  </div>
</template>
