<script setup lang="ts">
const props = defineProps<{ error: unknown }>()

const statusCode = computed(() => {
  if (typeof props.error !== 'object' || props.error === null) {
    return 500
  }
  if ('statusCode' in props.error) {
    return props.error.statusCode
  }
  return 500
})
</script>

<template>
  <div class="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
    <div class="text-center">
      <h1 class="mb-4 text-6xl font-bold text-gray-800 dark:text-gray-200">
        {{ statusCode }}
      </h1>
      <div class="relative inline-block">
        <div
          class="h-24 w-24 animate-spin rounded-full border-8 border-gray-800 dark:border-gray-200"
        ></div>
        <div
          class="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-gray-100 dark:bg-gray-900"
        >
          <span class="text-4xl">🤔</span>
        </div>
      </div>
      <div v-if="statusCode === 404">
        <h2 class="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
          {{ $t('errorPage.pageNotFound') }}
        </h2>
        <p class="mb-6 mt-2 text-gray-500 dark:text-gray-500">
          {{ $t('errorPage.pageNotFoundDescription') }}
        </p>
        <NuxtLink to="/">
          <Button> {{ $t('errorPage.backToHome') }} </Button>
        </NuxtLink>
      </div>
      <div v-else-if="statusCode === 500">
        <h2 class="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
          {{ $t('errorPage.serverError') }}
        </h2>
        <p class="mb-6 mt-2 text-gray-500 dark:text-gray-500">
          {{ $t('errorPage.serverErrorDescription') }}
        </p>
        <NuxtLink to="/">
          <Button> {{ $t('errorPage.backToHome') }} </Button>
        </NuxtLink>
      </div>
      <div v-else>
        <h2 class="mt-4 text-2xl font-semibold text-gray-600 dark:text-gray-400">
          {{ $t('errorPage.unknownError') }}
        </h2>
        <p class="mb-6 mt-2 text-gray-500 dark:text-gray-500">
          {{ $t('errorPage.unknownErrorDescription') }}
        </p>
        <NuxtLink to="/">
          <Button> {{ $t('errorPage.backToHome') }} </Button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
