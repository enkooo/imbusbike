<template>
  <div class="relative overflow-hidden">
    <section class="relative w-full overflow-hidden p-8 sm:h-[calc(100dvh-101px)]">
      <div class="relative h-3/4 w-full overflow-hidden rounded-sm bg-primary py-10 sm:py-0">
        <NuxtImg
          src="/img/hero.webp"
          class="absolute left-0 top-0 z-0 h-full w-full object-cover opacity-10"
          sizes="365px sm:640px md:320px md:800px lg:1024px xl:1280px 2xl:1536px"
          densities="x1"
          quality="80"
          alt=""
          preload
        />
        <div
          class="xxl:px-0 relative z-10 mx-auto flex h-full min-h-[500px] max-w-[1840px] flex-col justify-center gap-8 px-10 md:px-24"
        >
          <h1 class="c text-5xl font-bold text-primary-foreground sm:text-[3.75rem] lg:text-[5rem]">
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
      <div class="flex h-1/3 w-full flex-col justify-center gap-10 md:h-1/4">
        <p class="pt-10 text-center text-typography-gray md:pt-0">{{ $t('hero.partners') }}</p>
        <div
          class="container flex w-full max-w-[500px] flex-wrap justify-center gap-10 md:gap-20 lg:max-w-full"
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
            src="/img/bolt-logo.svg"
            alt="Bolt Logo"
            width="51"
            height="30"
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
            src="/img/bolt-logo.svg"
            alt="Shimano Logo"
            width="51"
            height="30"
            densities="x1"
          />
        </div>
      </div>
    </section>
  </div>
</template>
