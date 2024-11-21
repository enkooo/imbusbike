<template>
  <div class="container">
    <section class="text-center">
      <h2 class="text-3xl font-bold">{{ $t('bestsellers.title') }}</h2>
      <p class="mx-auto mt-7 max-w-5xl text-typography-gray">{{ $t('bestsellers.description') }}</p>
    </section>
    <div class="mt-10">
      <BestsellersCarousel />
    </div>
  </div>
</template>
