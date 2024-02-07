<script>
import { computed } from 'vue'

export default {
  name: 'Card-Heading',

  setup() {
    return {
      classes: computed(() => ({
        'border-b border-gray-200 dark:border-gray-800 p-4 text-gray-900 dark:text-gray-50': true
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
