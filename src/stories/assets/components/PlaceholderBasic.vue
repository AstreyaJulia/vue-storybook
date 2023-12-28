<script>
import { computed, reactive } from 'vue'

export default {
  name: 'Placeholder-Basic',

  props: {
    className: {
      type: String,
      required: false,
      default: ''
    },
    children: {
      type: Node,
      required: false
    }
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'rounded-md border-2 border-dashed border-gray-200': true,
        [props.className]: true
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
