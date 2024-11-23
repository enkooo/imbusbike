<script setup lang="ts"></script>

<template>
  <main class="min-h-screen">
    <HeroSection />
    <CarouselSection
      :title="$t('bestsellers.title')"
      :description="$t('bestsellers.description')"
    />
    <NewsSection />
    <ContactSection />
    <CarouselSection
      :title="$t('recommendedProducts.title')"
      :description="$t('recommendedProducts.description')"
    />

    <div class="py-10"></div>
  </main>
</template>
