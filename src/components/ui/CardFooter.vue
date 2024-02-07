<script>
import { computed } from 'vue'

export default {
  name: 'Card-Footer',

  setup() {
    return {
      classes: computed(() => ({
        'border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 p-4 text-sm text-gray-500 dark:text-gray-400': true
      }))
    }
  }
}
</script>

<template>
  <footer :class="classes"><slot></slot></footer>
</template>
