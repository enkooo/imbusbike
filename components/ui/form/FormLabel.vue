<script lang="ts" setup>
import type { LabelProps as BaseLabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useFormField } from './useFormField'

interface LabelProps extends BaseLabelProps {
  required?: boolean
  for?: string
}

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    v-bind-once="{ for: props.for || formItemId }"
    :class="cn(error && 'text-destructive', props.class)"
  >
    <slot />
    <span v-if="props.required"> * </span>
  </Label>
</template>
