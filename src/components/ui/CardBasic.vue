<script>
import { reactive, computed } from 'vue'

const variants = {
  default:
    'bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-sm dark:shadow-none',
  gray: 'bg-gray-50 dark:bg-gray-900'
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
    }
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'rounded-lg': true,
        [variants[props.variant]]: true
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
