import ButtonBasic from '../components/ui/ButtonBasic.vue'
import { ArrowPathIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { ArrowRightIcon } from '@heroicons/vue/20/solid'

export default {
  title: 'Компоненты/Кнопки/Кнопка',
  component: ButtonBasic,
  argTypes: {
    isLoading: {
      control: 'boolean'
    },
    size: {
      control: {
        type: 'select'
      },
      options: ButtonBasic.props.size.array
    },
    variant: {
      control: {
        type: 'select'
      },
      options: ButtonBasic.props.variant.array
    },
    shape: {
      control: {
        type: 'select'
      },
      options: ButtonBasic.props.shape.array
    }
  },
  parameters: {
    layout: 'centered',
    slots: {
      label: 'Текст на кнопке',
      leftIcon: 'Значок слева от текста',
      rightIcon: 'Значок справа от текста',
      children: 'Дополнительные элементы'
    }
  }
}
const Template = (args) => ({
  components: { ButtonBasic },
  setup() {
    return { args }
  },
  template: `
      <ButtonBasic v-bind="args">
        <template #label>Действие</template>
      </ButtonBasic>`
})

export const _Button = Template.bind({})
_Button.storyName = 'Кнопка'

export const Primary = {
  name: 'Главная кнопка. Состояние по-умолчанию',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Сохранить</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'primary',
    shape: 'default'
  }
}

export const PrimaryDisabled = {
  name: 'Главная кнопка, заблокированная',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Сохранить</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'primary',
    shape: 'default',
    disabled: true
  }
}

export const PrimaryLoading = {
  name: 'Главная кнопка, состояние загрузки',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Сохранить</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'primary',
    shape: 'default',
    isLoading: true
  }
}

export const Default = {
  name: 'Стандартная кнопка',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Отмена</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'default',
    shape: 'default'
  }
}

export const DefaultDisabled = {
  name: 'Стандартная кнопка, заблокированная',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Сохранить</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'default',
    shape: 'default',
    disabled: true
  }
}

export const WithLeftIcon = {
  name: 'Стандартная кнопка со значком слева',
  render: (args) => ({
    components: { ButtonBasic, ArrowPathIcon },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Обновить</template>
            <template #leftIcon>
              <ArrowPathIcon/>
            </template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'default',
    shape: 'default'
  }
}

export const WithLeftIconLoading = {
  name: 'Стандартная кнопка со значком, состояние загрузки',
  render: (args) => ({
    components: { ButtonBasic, ArrowPathIcon },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Обновить</template>
            <template #leftIcon>
              <ArrowPathIcon/>
            </template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'default',
    shape: 'default',
    isLoading: true
  }
}

export const WithRightIcon = {
  name: 'Стандартная кнопка со значком слева',
  render: (args) => ({
    components: { ButtonBasic, ArrowRightIcon },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Следующая</template>
            <template #rightIcon>
              <ArrowRightIcon/>
            </template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'default',
    shape: 'default'
  }
}

export const OnlyIcon = {
  name: 'Стандартная кнопка без текста (только со значком)',
  render: (args) => ({
    components: { ButtonBasic, TrashIcon },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #rightIcon>
              <TrashIcon/>
            </template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'default',
    shape: 'square',
    title: 'Удалить элемент'
  }
}

export const Destructive = {
  name: 'Кнопка, обозначающая разрушительные действия',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Удалить</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'destructive',
    shape: 'default'
  }
}

export const DestructiveLoading = {
  name: 'Кнопка, обозначающая разрушительные действия, состояние загрузки',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Удалить</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'destructive',
    shape: 'default',
    isLoading: true
  }
}

export const Tertiary = {
  name: 'Кнопка, третьего порядка',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Перейти</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'tertiary',
    shape: 'default'
  }
}

export const Link = {
  name: 'Кнопка-ссылка',
  render: (args) => ({
    components: { ButtonBasic },
    setup() {
      return { args }
    },
    template: `
          <ButtonBasic v-bind="args">
            <template #label>Перейти</template>
          </ButtonBasic>`
  }),
  args: {
    variant: 'link',
    shape: 'default'
  }
}
