<script>
import { reactive, computed } from 'vue'

const variants = {
  default: 'bg-white border border-gray-200 shadow-sm',
  gray: 'bg-gray-50'
}

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Card',

  props: {
    variant: {
      type: String,
      array: Object.keys(variants),
      validator: function (value) {
        return Object.keys(variants).indexOf(value) !== -1
      },
      default: Object.keys(variants)[0]
    },
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
        'rounded-lg': true,
        [variants[props.variant]]: true,
        [props.className]: true,
      }))
    }
  }
}
</script>

<template>
  <div :class="classes">
    {{ children }}
  </div>
</template>