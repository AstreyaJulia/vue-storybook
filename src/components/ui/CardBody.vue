<script>
import { computed, reactive } from 'vue'

export default {
  name: 'Card-Body',

  props: {
    /** Дополнительный класс. */
    className: {
      type: String,
      required: false,
      default: ''
    },
    /** Дополнительные дочерние элементы. */
    children: {
      type: Node,
      required: false
    }
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'p-4': true,
        [props.className]: true
      }))
    }
  }
}
</script>

<template>
  <div :class="classes"><slot></slot></div>
</template>
