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
        class="relative z-10 flex h-full flex-col gap-8 overflow-hidden rounded-sm p-8 text-muted-foreground shadow-[0px_16px_25px_0px_rgba(0,0,0,0.06)]"
      >
        <h3 class="line-clamp-2 text-balance text-2xl font-bold text-primary">{{ title }}</h3>
        <p class="line-clamp-2 text-muted-foreground sm:line-clamp-3 lg:line-clamp-4">
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
          to="/serwis"
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
<style>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.5em * 2); /* 1.5 to wysokość linii (line-height) */
  line-height: 1.5; /* Dopasowanie odstępów */
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.5em * 3); /* 1.5 to wysokość linii (line-height) */
  line-height: 1.5; /* Dopasowanie odstępów */
}
.line-clamp-4 {
  display: -webkit-box;
  -webkit-line-clamp: 4; /* Wymusza 5 linii */
  -webkit-box-orient: vertical;
  overflow: hidden;
  min-height: calc(1.5em * 4); /* 1.5 to wysokość linii (line-height), dla 5 linii */
  line-height: 1.5; /* Dopasowanie odstępów */
}
</style>
