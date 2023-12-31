<script>
import { computed, reactive } from 'vue'

export default {
  name: 'Card-Footer',

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
        'border-t border-gray-200 bg-gray-100 p-4 text-sm text-gray-500': true,
        [props.className]: true
      }))
    }
  }
}
</script>

<template>
  <footer :class="classes"><slot name="children"></slot></footer>
</template>
