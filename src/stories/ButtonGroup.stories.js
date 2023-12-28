import BasicButton from '../components/ui/ButtonBasic.vue'
import { ArrowLeftIcon, ArrowRightIcon, PlusIcon } from '@heroicons/vue/24/outline'

export default {
  title: 'Компоненты/Кнопки/Группа кнопок',
  component: BasicButton,
  parameters: {
    layout: 'centered'
  }
}

export const ButtonGroup = {
  name: 'Группа кнопок',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      const buttons = [
        { variant: 'default', shape: 'default', label: 'Кнопка 1' },
        { variant: 'default', shape: 'default', label: 'Кнопка 2' },
        { variant: 'default', shape: 'default', label: 'Кнопка 3' }
      ]
      return { args, buttons }
    },
    template:
      '<span class="isolate inline-flex rounded-md shadow-sm"><BasicButton v-for="(button, index) in buttons" v-bind="args" :shape="button.shape" :variant="button.variant" :group-index="index" :total-items="buttons.length" :key="button.label"><template #label>{{button.label}}</template></BasicButton></span>'
  })
}

export const ButtonGroupWithIcons = {
  name: 'Группа кнопок зо значками',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      const buttons = [
        {
          variant: 'default',
          shape: 'square',
          leftIcon: ArrowLeftIcon,
          title: 'Вперед'
        },
        {
          variant: 'default',
          shape: 'square',
          leftIcon: PlusIcon,
          title: 'Добавить'
        },
        {
          variant: 'default',
          shape: 'square',
          leftIcon: ArrowRightIcon,
          title: 'Назад'
        }
      ]
      return { args, buttons }
    },
    template:
      '<span class="isolate inline-flex rounded-md shadow-sm"><BasicButton v-for="(button, index) in buttons" v-bind="args" :title="button.title" :shape="button.shape" :variant="button.variant" :group-index="index" :total-items="buttons.length" :key="button.title"><template #leftIcon><component :is="button.leftIcon" /></template></BasicButton></span>'
  })
}
