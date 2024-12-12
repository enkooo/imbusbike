<template>
  <div class="relative">
    <section class="relative w-full p-8">
      <div class="relative w-full overflow-hidden rounded-sm bg-primary py-10 sm:py-0 md:h-[70dvh]">
        <NuxtImg
          src="/img/hero.webp"
          class="absolute left-0 top-0 z-0 h-full w-full object-cover opacity-20"
          sizes="365px sm:640px md:320px md:800px lg:1024px xl:1280px 2xl:1536px"
          densities="x1"
          quality="80"
          alt="Backgroud image"
          preload
        />
        <div
          class="xxl:px-0 relative z-10 mx-auto flex h-full min-h-[500px] max-w-[1840px] flex-col justify-center gap-8 px-10 md:px-24"
        >
          <h1
            class="text-balance text-5xl font-bold text-primary-foreground sm:text-[3.75rem] lg:text-[5rem]"
          >
            {{ $t('hero.title') }}
          </h1>
          <p class="max-w-[755px] text-sm text-typography-light sm:text-base">
            {{ $t('hero.description') }}
          </p>
          <div class="flex w-full flex-col items-center justify-start gap-4 sm:flex-row">
            <NuxtLinkLocale
              :to="$t('menu.offer.link')"
              class="w-full sm:max-w-52"
            >
              <Button
                size="lg"
                class="w-full"
                variant="inverted"
              >
                {{ $t('hero.buttons.offer') }}
              </Button>
            </NuxtLinkLocale>
            <NuxtLinkLocale
              :to="$t('menu.contact.link')"
              class="w-full sm:max-w-52"
            >
              <Button
                size="lg"
                class="w-full"
                variant="inverted"
              >
                {{ $t('hero.buttons.contact') }}
              </Button>
            </NuxtLinkLocale>
          </div>
        </div>
      </div>
      <div class="my-14 flex h-1/3 w-full flex-col justify-center gap-10 md:h-1/4">
        <p class="text-center text-muted-foreground">
          {{ $t('hero.partners') }}
        </p>
        <div
          class="container flex w-full max-w-[500px] flex-wrap justify-center gap-10 lg:max-w-full xl:gap-20"
        >
          <NuxtImg
            src="/img/bosch-logo.svg"
            alt="Bosch Logo"
            width="122"
            height="30"
            densities="x1"
          />
          <NuxtImg
            src="/img/brose-logo.svg"
            alt="Brose Logo"
            width="100"
            height="30"
            densities="x1"
          />
          <NuxtImg
            src="/img/bolt-logo.jpg"
            alt="Bolt Logo"
            format="webp"
            width="165"
            height="65"
            densities="x1"
          />
          <NuxtImg
            src="/img/shimano-logo.svg"
            alt="Shimano Logo"
            width="122"
            height="30"
            densities="x1"
          />
          <NuxtImg
            src="/img/oko-logo.png"
            format="webp"
            alt="Oko Logo"
            width="90"
            height="65"
            densities="x1"
          />
          <NuxtImg
            src="/img/magick.png"
            format="webp"
            alt="Magick Logo"
            width="65"
            height="65"
            densities="x1"
          />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
</script>
