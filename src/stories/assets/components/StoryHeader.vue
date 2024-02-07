<script>
import TypographyElement from '@/components/ui/TypographyElement.vue'
import BadgeBasic from '@/components/ui/BadgeBasic.vue'

const statuses = {
  ready: { text: 'Готово', color: 'green' },
  progress: { text: 'В процессе', color: 'yellow' },
  test: { text: 'Тестирование', color: 'gray' }
}

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
    /** **Статус**  */
    status: {
      type: String,
      required: false,
      validator: function (value) {
        return Object.keys(statuses).indexOf(value) !== -1
      },
    }
  },

  setup() {
    return { statuses }
  }
}
</script>

<template>
  <header class="flex flex-col px-6 py-10 mb-10 gap-y-8 bg-gray-50 dark:bg-gray-900 rounded-lg drop-shadow-sm">
    <div v-if="status" class="flex w-full items-center">
      <BadgeBasic v-if="status" :color="statuses[status].color">{{ statuses[status].text }}</BadgeBasic>
    </div>

    <TypographyElement variant="h1" :class="'mt-4'">{{ header }}</TypographyElement>
    <slot></slot>
  </header>
</template>