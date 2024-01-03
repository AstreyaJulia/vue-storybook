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
        'border-t border-grayscale-200 dark:border-grayscale-800 bg-grayscale-100 dark:bg-grayscale-900 p-4 text-sm text-grayscale-500 dark:text-grayscale-400': true,
        [props.className]: true
      }))
    }
  }
}
</script>

<template>
  <footer :class="classes"><slot></slot></footer>
</template>
