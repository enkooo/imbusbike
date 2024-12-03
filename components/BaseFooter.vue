<template>
  <div class="relative z-10 -mt-10 overflow-hidden bg-primary py-10">
    <div class="container text-typography-light md:grid md:grid-cols-3 md:items-center md:gap-2">
      <div class="flex justify-center text-xs sm:px-10 md:px-0">
        <div class="flex w-1/2 flex-col gap-3 md:w-full lg:flex-row lg:gap-3">
          <div class="flex flex-col gap-3 md:flex-row">
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.products.link')"
            >
              {{ $t('footer.navigation.products.label') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.news.link')"
            >
              {{ $t('footer.navigation.news.label') }}
            </NuxtLinkLocale>
          </div>
          <div class="flex flex-col gap-3 md:flex-row">
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.offer.link')"
            >
              {{ $t('footer.navigation.offer.label') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.service.link')"
            >
              {{ $t('footer.navigation.service.label') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.faq.link')"
            >
              {{ $t('footer.navigation.faq.label') }}
            </NuxtLinkLocale>
            <NuxtLinkLocale
              class="hover:underline"
              :to="$t('footer.navigation.contact.link')"
            >
              {{ $t('footer.navigation.contact.label') }}
            </NuxtLinkLocale>
          </div>
        </div>
        <div class="flex w-1/2 flex-col gap-3 md:hidden">
          <p>{{ $t('footer.companyDetails.name') }}</p>
          <p>{{ $t('footer.companyDetails.address') }}</p>
          <p>
            <a
              class="hover:underline"
              :href="$t('footer.companyDetails.phone.link')"
            >
              {{ $t('footer.companyDetails.phone.label') }}
            </a>
          </p>
          <p>
            <a
              class="hover:underline"
              :href="$t('footer.companyDetails.email.link')"
            >
              {{ $t('footer.companyDetails.email.label') }}
            </a>
          </p>
        </div>
      </div>
      <div class="mt-10 text-center text-xs md:mt-0">
        <p>{{ $t('footer.copyright', { year: new Date().getFullYear() }) }}</p>
        <p class="text-[10px]">{{ $t('footer.allRightReserved') }}</p>
      </div>
      <div class="ml-auto hidden md:block">
        <div
          class="md:flex md:flex-col md:justify-end md:gap-x-3 md:text-xs lg:flex-row lg:gap-x-8"
        >
          <div>
            <p>{{ $t('footer.companyDetails.name') }}</p>
            <p>{{ $t('footer.companyDetails.address') }}</p>
            <p>{{ $t('footer.companyDetails.postCode') }}</p>
          </div>
          <div>
            <p>
              <a
                class="hover:underline"
                :href="$t('footer.companyDetails.phone.link')"
              >
                {{ $t('footer.companyDetails.phone.label') }}
              </a>
            </p>
            <p>
              <a
                class="hover:underline"
                :href="$t('footer.companyDetails.email.link')"
              >
                {{ $t('footer.companyDetails.email.label') }}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
