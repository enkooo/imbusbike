<template>
  <main>
    <HeroSection />
    <CarouselSection
      :title="$t('bestsellers.title')"
      :description="$t('bestsellers.description')"
      type="bestseller"
      class="mt-16 sm:mt-24 md:mt-10 lg:mt-0"
    />
    <NewsSection class="mt-32" />
    <CarouselSection
      :title="$t('recommendedProducts.title')"
      :description="$t('recommendedProducts.description')"
      type="magick"
      class="mt-32"
    />
    <OfferSection class="mt-32" />
    <CallToActionSection class="mt-32" />
    <AboutSection class="mb-40 mt-32" />
  </main>
</template>
