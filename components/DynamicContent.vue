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
      <template
        v-for="(child, childIndex) in block.children"
        :key="childIndex"
      >
        <a
          v-if="child.type === 'link'"
          :href="child.url"
          target="_blank"
          class="text-black underline"
        >
          {{ child.children.map((linkChild) => linkChild.text).join('') }}
        </a>
        <span v-else>
          {{ child.text }}
        </span>
      </template>
    </component>
  </div>
</template>
