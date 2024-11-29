<script setup lang="ts">
const { t } = useI18n()

const MENU_ITEMS = computed(() => [
  { label: t('menu.products.label'), path: t('menu.products.link') },
  { label: t('menu.news.label'), path: t('menu.news.link') },
  { label: t('menu.offer.label'), path: t('menu.offer.link') },
  { label: t('menu.service.label'), path: t('menu.service.link') },
  { label: t('menu.faq.label'), path: t('menu.faq.link') },
  { label: t('menu.contact.label'), path: t('menu.contact.link') },
])

const isOpen = ref(false)

function onToggleMenu() {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="sticky top-0 z-50 border-b bg-white md:border-gray-200">
    <nav class="container flex items-center justify-between py-5 text-sm font-semibold">
      <NuxtLinkLocale
        to="/"
        class="flex items-center gap-2"
      >
        <NuxtImg
          src="/img/logo.png"
          alt="IMBUSBIKE Logo"
          width="60"
          height="60"
          densities="x1"
        />
        <span class="flex flex-col md:text-xs lg:text-sm">
          {{ $t('menu.home.label') }}
          <span class="text-xs font-normal text-typography-gray md:text-[10px] lg:text-xs">
            {{ $t('menu.home.subLabel') }}
          </span>
        </span>
      </NuxtLinkLocale>
      <div
        class="absolute left-[-100%] top-[101px] flex w-full items-center bg-transparent bg-white px-5 duration-500 md:static md:min-h-fit md:w-auto md:bg-transparent md:px-0"
        :class="{ 'left-[0%]': isOpen }"
      >
        <ul
          class="flex flex-col gap-8 py-12 text-sm md:flex-row md:items-center md:gap-3 md:py-0 lg:gap-10"
        >
          <li
            v-for="item in MENU_ITEMS"
            :key="item.label"
            class="first:text-typography hover:underline"
          >
            <NuxtLinkLocale
              :to="item.path"
              class="py-2"
            >
              {{ item.label }}
            </NuxtLinkLocale>
          </li>
          <li>
            <a :href="$t('menu.call.link')">
              <Button class="lg:py- hidden md:block lg:h-10 lg:px-8">
                {{ $t('menu.call.label') }}
              </Button>
              <span class="md:hidden">
                {{ $t('menu.call.label') }}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <div class="flex items-center md:hidden">
        <Button variant="ghost">
          <Icon
            class="cursor-pointer md:hidden"
            size="30"
            :name="!isOpen ? 'mdi:menu' : 'mdi:close'"
            @click="onToggleMenu"
          />
        </Button>
      </div>
    </nav>
  </header>
</template>
