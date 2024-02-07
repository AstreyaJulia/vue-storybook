<script>
import { luminance } from '@/utils/colorUtils.js'
import TypographyElement from '@/components/ui/TypographyElement.vue'

export default {
  name: 'Palette-Element',
  components: { TypographyElement },

  props: {
    hexColor: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    rate: {
      type: Object,
      required: false,
      default: null
    }
  },

  setup() {
    return {
      luminance
    }
  }
}
</script>

<template>
  <div class="flex flex-col rounded-md shadow overflow-clip bg-white dark:bg-gray-900">
    <div class="h-16 w-32 flex items-center justify-center" :style="{ backgroundColor: hexColor }">
      <TypographyElement
        variant="label"
        v-if="hexColor.toString().toLowerCase() !== '#ffffff'"
        :class="'text-xs'"
        :text-color="
          luminance(hexColor.toString()).toFixed(2) >= 0.25 ? 'text-gray-900' : 'text-gray-50'
        "
      >
        {{ rate['AAA'] || rate['AA'] || rate['pass'] }}
      </TypographyElement>
    </div>
    <div class="flex flex-col p-3">
      <TypographyElement variant="text-main" :class="'mb-1'">
        {{ name }}
      </TypographyElement>
      <TypographyElement variant="caption">
        {{ hexColor }}
      </TypographyElement>
    </div>
  </div>
</template>
