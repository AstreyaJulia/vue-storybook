<script>
import { computed, reactive } from 'vue'

export default {
  name: 'Card-Body',

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
        'p-5': true,
        [props.className]: true
      }))
    }
  }
}
</script>

<template>
  <div :class="classes"><slot name="children"></slot></div>
</template>
