<script>
import { computed } from 'vue'

export default {
  name: 'Card-Body',

  setup() {
    return {
      classes: computed(() => ({
        'p-4': true
      }))
    }
  }
}
</script>

<template>
  <div :class="classes"><slot></slot></div>
</template>
