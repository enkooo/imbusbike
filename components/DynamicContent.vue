<script setup lang="ts">
import type { Block } from '~/types'

defineProps<{
  blocks: Block[]
}>()
</script>

<template>
  <div>
    <component
      :is="block.type === 'heading' ? 'h' + block.level : 'p'"
      v-for="(block, index) in blocks"
      :key="index"
      class="mb-4"
      :class="block.type === 'heading' ? 'text-2xl font-bold' : ''"
    >
      {{ block.children.map((child) => child.text).join('') }}
    </component>
  </div>
</template>
