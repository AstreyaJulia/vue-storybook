<script>
import { computed } from 'vue'

export default {
  name: 'Card-Footer',

  setup() {
    return {
      classes: computed(() => ({
        'border-t border-grayscale-200 dark:border-grayscale-800 bg-grayscale-100 dark:bg-grayscale-900 p-4 text-sm text-grayscale-500 dark:text-grayscale-400': true
      }))
    }
  }
}
</script>

<template>
  <footer :class="classes"><slot></slot></footer>
</template>
