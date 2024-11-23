<template>
  <div class="container">
    <div
      class="relative z-10 flex min-h-[300px] flex-col gap-6 overflow-hidden rounded-sm bg-primary px-10 py-24 text-center text-typography-white"
    >
      <h2 class="text-4xl font-bold md:text-5xl">
        {{ $t('callToAction.title') }}
      </h2>
      <p class="mx-auto max-w-5xl text-typography-light">
        {{ $t('callToAction.description') }}
      </p>
      <NuxtLinkLocale to="/produkty">
        <Button
          class="self-center"
          variant="inverted"
          size="lg"
        >
          {{ $t('callToAction.buttonLabel') }}
        </Button>
      </NuxtLinkLocale>
    </div>
  </div>
</template>
