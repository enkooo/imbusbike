<script setup lang="ts">
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import type { Filter } from '~/types'
import { useFormContext } from 'vee-validate'

const { filters } = defineProps<{
  filters: Filter[]
  isMobile?: boolean
}>()

const { setFieldValue } = useFormContext()
const route = useRoute()

const emit = defineEmits(['filter-change'])

onMounted(() => {
  const filters = route.query.filters
  const initialFilters =
    typeof filters === 'string'
      ? filters
          .split(',')
          .map((id) => parseInt(id, 10))
          .filter((id) => !isNaN(id))
      : []
  setFieldValue('selectedFilters', initialFilters)
})
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
                  @update:checked="
                    (checked) => {
                      handleChange(checked)
                      emit(
                        'filter-change',
                        value.includes(child.id)
                          ? value.filter((id: number) => id !== child.id)
                          : [...value, child.id],
                      )
                    }
                  "
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
