<script>
import { computed, reactive } from 'vue'

const variants = {
  h1: {
    element: 'h1',
    basicClass: 'font-bold',
    textSize: 'text-6xl',
    textColor: 'text-gray-800'
  },
  h2: {
    element: 'h2',
    basicClass: 'font-bold',
    textSize: 'text-5xl',
    textColor: 'text-gray-800'
  },
  h3: {
    element: 'h3',
    basicClass: 'font-bold',
    textSize: 'text-4xl',
    textColor: 'text-gray-800'
  },
  h4: {
    element: 'h4',
    basicClass: 'font-bold',
    textSize: 'text-3xl',
    textColor: 'text-gray-800'
  },
  h5: {
    element: 'h5',
    basicClass: 'font-bold',
    textSize: 'text-xl',
    textColor: 'text-gray-800'
  },
  h6: {
    element: 'h6',
    basicClass: 'font-bold',
    textSize: 'text-lg',
    textColor: 'text-gray-800'
  },
  label: {
    element: 'p',
    basicClass: '',
    textSize: 'text-sm',
    textColor: 'text-gray-600'
  },
  caption: {
    element: 'p',
    basicClass: '',
    textSize: 'text-sm',
    textColor: 'text-gray-400'
  },
  'card-title': {
    element: 'h5',
    basicClass: 'font-semibold',
    textSize: 'text-lg',
    textColor: 'text-gray-800'
  },
  'card-subtitle': {
    element: 'p',
    basicClass: 'font-medium uppercase',
    textSize: 'text-sm',
    textColor: 'text-gray-600'
  },
  'text-main': {
    element: 'p',
    basicClass: '',
    textSize: 'text-base',
    textColor: 'text-gray-800'
  },
  'text-secondary': {
    element: 'p',
    basicClass: '',
    textSize: 'text-base',
    textColor: 'text-gray-600'
  }
}

export default {
  name: 'Typography-Element',

  props: {
    variant: {
      type: String,
      array: Object.keys(variants),
      validator: function (value) {
        return Object.keys(variants).indexOf(value) !== -1
      },
      required: true
    },
    className: {
      type: String,
      required: false,
      default: ''
    },
    textSize: {
      type: String,
      required: false,
      default: null
    },
    textColor: {
      type: String,
      required: false,
      default: null
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
        [variants[props.variant].basicClass]: true,
        [props.textSize || variants[props.variant].textSize]: true,
        [props.textColor || variants[props.variant].textColor]: true,
        [props.className]: true
      })),
      element: computed(() => variants[props.variant].element)
    }
  }
}
</script>

<template>
  <component :is="element" :class="classes"><slot name="children"></slot></component>
</template>
