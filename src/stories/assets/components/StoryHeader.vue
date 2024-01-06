<script>
import TypographyElement from '@/components/ui/TypographyElement.vue'
import BadgeBasic from '@/components/ui/BadgeBasic.vue'

export default {
  name: 'Story-Header',
  components: { BadgeBasic, TypographyElement },

  props: {
    /** **Заголовок**  */
    header: {
      type: String,
      required: true
    },
    /** **Описание**  */
    description: {
      type: String,
      required: false,
      default: null
    },
    tags: {
      type: Array,
      default: null
    }
  },

  setup() {}
}
</script>

<template>
  <header class="flex flex-col py-16 gap-y-8">
    <TypographyElement variant="h1">{{ header }}</TypographyElement>
    <div v-if="tags" class="flex items-center flex-wrap gap-3">
      <BadgeBasic color="grayscale" v-for="tag in tags" :key="tag">{{ tag }}</BadgeBasic>
    </div>
    <slot></slot>
  </header>
</template>
