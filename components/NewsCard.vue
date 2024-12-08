<script setup lang="ts">
const { title, description, date, imageUrl } = defineProps<{
  title: string
  description: string
  date: string
  imageUrl: string
}>()

const { formatPolishDate } = useDateFormatter()
const formattedDate = formatPolishDate(date)
</script>

<template>
  <div
    class="overflow-hidden rounded-sm border border-gray-200 sm:h-[192px] md:h-auto lg:h-[192px]"
  >
    <div class="flex h-full flex-col sm:flex-row md:flex-col lg:flex-row">
      <NuxtImg
        :src="imageUrl"
        alt=""
        format="webp"
        class="max-h-40 w-full min-w-36 rounded-l-sm object-cover sm:max-h-48"
      />
      <div class="flex min-w-0 flex-col gap-y-2 p-6">
        <h3 class="relative truncate font-semibold">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger as-child>
                <p class="absolute w-full opacity-0">&nbsp;</p>
                {{ title }}
              </TooltipTrigger>
              <TooltipContent>
                <p>{{ title }}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </h3>
        <p class="text-xs text-muted-foreground">
          {{ description }}
        </p>
        <p class="mt-2 text-xs text-muted-foreground sm:mt-auto md:mt-2 lg:mt-auto">
          {{ formattedDate }}
        </p>
      </div>
    </div>
  </div>
</template>
