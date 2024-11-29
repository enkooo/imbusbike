<script lang="ts" setup>
import type { LabelProps as BaseLabelProps } from 'radix-vue'
import type { HTMLAttributes } from 'vue'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'
import { useFormField } from './useFormField'

interface LabelProps extends BaseLabelProps {
  required?: boolean
}

const props = defineProps<LabelProps & { class?: HTMLAttributes['class'] }>()

const { error, formItemId } = useFormField()
</script>

<template>
  <Label
    :class="cn(error && 'text-destructive', props.class)"
    :for="formItemId"
  >
    <slot />
    <span v-if="props.required"> * </span>
  </Label>
</template>
