import BasicButton from '../components/ui/Button.vue'
import { ArrowPathIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { ArrowRightIcon } from '@heroicons/vue/20/solid'
export default {
  title: 'Компоненты/Кнопки/Кнопка',
  component: BasicButton,
  argTypes: {
    isLoading: {
      control: 'boolean'
    },
    size: {
      control: {
        type: 'select'
      },
      options: BasicButton.props.size.array
    },
    variant: {
      control: {
        type: 'select'
      },
      options: BasicButton.props.variant.array
    },
    shape: {
      control: {
        type: 'select'
      },
      options: BasicButton.props.shape.array
    }
  },
  parameters: {
    layout: 'centered'
  }
}
const Template = (args) => ({
  components: { BasicButton },
  setup() {
    return { args }
  },
  template: '<BasicButton v-bind="args" />'
})

export const _Button = Template.bind({})
_Button.storyName = 'Кнопка'
_Button.args = {
  label: 'Действие'
}

export const Primary = {
  name: 'Главная кнопка. Состояние по-умолчанию',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'primary',
    shape: 'default',
    label: 'Сохранить'
  }
}

export const PrimaryDisabled = {
  name: 'Главная кнопка, заблокированная',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'primary',
    shape: 'default',
    label: 'Сохранить',
    disabled: true
  }
}

export const PrimaryLoading = {
  name: 'Главная кнопка, состояние загрузки',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'primary',
    shape: 'default',
    label: 'Сохранить',
    isLoading: true
  }
}

export const Default = {
  name: 'Стандартная кнопка',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'default',
    shape: 'default',
    leftIcon: null,
    label: 'Отмена'
  }
}

export const DefaultDisabled = {
  name: 'Стандартная кнопка, заблокированная',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'default',
    shape: 'default',
    label: 'Сохранить',
    disabled: true
  }
}

export const WithLeftIcon = {
  name: 'Стандартная кнопка со значком слева',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'default',
    shape: 'default',
    leftIcon: ArrowPathIcon,
    label: 'Обновить'
  }
}

export const WithLeftIconLoading = {
  name: 'Стандартная кнопка со значком, состояние загрузки',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'default',
    shape: 'default',
    label: 'Обновить',
    isLoading: true,
    leftIcon: ArrowPathIcon
  }
}

export const WithRightIcon = {
  name: 'Стандартная кнопка со значком слева',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'default',
    shape: 'default',
    rightIcon: ArrowRightIcon,
    label: 'Следующая'
  }
}

export const OnlyIcon = {
  name: 'Стандартная кнопка без текста (только со значком)',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'default',
    shape: 'square',
    title: 'Удалить элемент',
    rightIcon: TrashIcon
  }
}

export const Destructive = {
  name: 'Кнопка, обозначающая разрушительные действия',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'destructive',
    shape: 'default',
    label: 'Удалить'
  }
}

export const DestructiveLoading = {
  name: 'Кнопка, обозначающая разрушительные действия, состояние загрузки',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'destructive',
    shape: 'default',
    label: 'Удалить',
    isLoading: true
  }
}

export const Tertiary = {
  name: 'Кнопка, третьего порядка',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'tertiary',
    shape: 'default',
    label: 'Перейти'
  }
}

export const Link = {
  name: 'Кнопка-ссылка',
  render: (args) => ({
    components: { BasicButton },
    setup() {
      return { args }
    },
    template: '<BasicButton v-bind="args" />'
  }),
  args: {
    variant: 'link',
    shape: 'default',
    label: 'Перейти'
  }
}
