<script>
import { computed, reactive } from 'vue'

export default {
  name: 'Placeholder-Basic',

  props: {
    children: {
      type: Node,
      required: false
    }
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'rounded-md border-2 border-dashed border-gray-200 dark:border-gray-800': true
      }))
    }
  }
}
</script>

<template>
  <div :class="classes">
    <slot name="children"></slot>
  </div>
</template>
