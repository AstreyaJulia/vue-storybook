<script>
import { computed, reactive } from 'vue'

export default {
  name: 'Card-Heading',

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
        'border-b border-grayscale-200 dark:border-grayscale-800 p-4 text-grayscale-900 dark:text-grayscale-50': true,
        [props.className]: true
      }))
    }
  }
}
</script>

<template>
  <header :class="classes">
    <slot></slot>
  </header>
</template>
