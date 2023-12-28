<script>
import { computed, reactive } from 'vue'

export default {
  name: 'Card-Heading',

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
        'border-b border-gray-200 p-4': true,
        [props.className]: true
      }))
    }
  }
}
</script>

<template>
  <header :class="classes">
    <slot name="children"></slot>
  </header>
</template>
