<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import type { Filter } from '~/types'

const { filters } = defineProps<{
  filters: Filter[]
  isMobile?: boolean
}>()
</script>

<template>
  <FormField name="selectedFilters">
    <FormItem>
      <div
        v-for="filter in filters"
        :key="filter.id"
      >
        <h3 class="text-lg font-semibold">{{ filter.name }}</h3>
        <FormField
          v-for="child in filter.children"
          v-slot="{ value, handleChange }"
          :key="child.id"
          type="checkbox"
          :value="child.id"
          :unchecked-value="false"
          name="selectedFilters"
        >
          <FormItem class="mt-1 flex flex-row items-start space-x-3 space-y-0">
            <FormLabel
              :for="`form-item-checkbox-id-${child.id}`"
              class="flex cursor-pointer items-center gap-2 font-normal"
            >
              <FormControl>
                <Checkbox
                  :id="`form-item-checkbox-id-${child.id}`"
                  :checked="value.includes(child.id)"
                  @update:checked="handleChange"
                />
              </FormControl>
              {{ child.name }}
            </FormLabel>
          </FormItem>
        </FormField>
      </div>
      <FormMessage />
    </FormItem>
  </FormField>
</template>
