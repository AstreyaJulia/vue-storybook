<script>
import { reactive, computed } from 'vue'

const variants = {
  default:
    'bg-white dark:bg-grayscale-950 border border-grayscale-200 dark:border-grayscale-800 shadow-sm dark:shadow-none',
  gray: 'bg-grayscale-50 dark:bg-grayscale-900'
}

export default {
  name: 'Card-Basic',

  props: {
    /** Варианты:
     *
     * `default` - по-умолчанию
     *
     * `gray` - серая, без бордюра
     *
     * */
    variant: {
      type: String,
      array: Object.keys(variants),
      validator: function (value) {
        return Object.keys(variants).indexOf(value) !== -1
      },
      default: Object.keys(variants)[0]
    },
    /** Дополнительный класс. */
    className: {
      type: String,
      required: false,
      default: ''
    },
    /** Дочерние элементы. */
    children: {
      type: Node,
      required: false
    }
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'rounded-lg': true,
        [variants[props.variant]]: true,
        [props.className]: true
      }))
    }
  }
}
</script>

<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
