<script setup lang="ts">
defineProps<{
  imageUrl: string
  name: string
  category: string
  oldPrice?: string
  price: string
}>()
</script>

<template>
  <div class="truncate rounded-sm border border-gray-100 shadow-sm">
    <div class="flex h-full flex-col items-center p-7">
      <div class="mb-4 h-full max-h-[88px] overflow-hidden">
        <NuxtImg
          :src="imageUrl"
          :alt="name"
          densities="x1"
          sizes="154px"
          format="webp"
          class="mb-4 h-[88px] w-full object-contain"
        />
      </div>
      <span
        class="mb-2 self-start rounded-sm border border-gray-100 px-4 py-2 text-[9px] uppercase text-muted-foreground md:px-2 md:py-1 lg:px-4 lg:py-2"
      >
        {{ category }}
      </span>

      <div class="flex w-full truncate">
        <h3 class="relative mb-2 self-start truncate text-base md:text-sm lg:text-base">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <p class="absolute w-full opacity-0">&nbsp;</p>
                {{ name }}
              </TooltipTrigger>
              <TooltipContent>
                <p>{{ name }}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
      </div>
      <div class="mt-auto flex w-full flex-col justify-end">
        <p
          v-if="oldPrice"
          class="self-end text-xs text-muted-foreground line-through"
        >
          {{ oldPrice }}
        </p>
        <p class="self-end text-xl font-bold md:text-base lg:text-xl">
          {{ price }}
        </p>
      </div>
    </div>
  </div>
</template>
