<script>
import { computed, reactive } from 'vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Placeholder',

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
        'rounded-md border-2 border-dashed border-gray-200': true,
        [props.className]: true
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