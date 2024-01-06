<script>
import { computed } from 'vue'

export default {
  name: 'Card-Heading',

  setup() {
    return {
      classes: computed(() => ({
        'border-b border-grayscale-200 dark:border-grayscale-800 p-4 text-grayscale-900 dark:text-grayscale-50': true
      }))
    }
  }
}
</script>

<template>
  <header :class="classes">
    <slot></slot>
  </header>
</template>
