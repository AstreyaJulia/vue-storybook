import AvatarBasic from '../components/ui/AvatarBasic.vue'
import avatar1 from '@/stories/assets/avatars/avatar-1.jpg'
import avatar4 from '@/stories/assets/avatars/avatar-4.jpg'
import { UserIcon } from '@heroicons/vue/24/outline/index.js'
import { BellIcon } from '@heroicons/vue/16/solid/index.js'

const sizes = AvatarBasic.props.size.array
const iconSize = {
  4: 'h-3 w-3',
  6: 'h-4 w-4',
  8: 'h-5 w-5',
  10: 'h-6 w-6',
  12: 'h-8 w-8',
  14: 'h-9 w-9',
  16: 'h-11 w-11',
  20: 'h-14 w-14',
  24: 'h-16 w-16',
  28: 'h-20 w-20',
  32: 'h-24 w-24',
  36: 'h-28 w-28',
  40: 'h-32 w-32'
}

export default {
  title: 'Компоненты/Аватары/Аватар',
  component: AvatarBasic,
  argTypes: {
    label: {
      type: String,
      default: null
    },
    image: {
      type: String,
      required: false,
      default: null
    },
    color: {
      control: {
        type: 'select'
      },
      options: AvatarBasic.props.color.array
    },
    statusColor: {
      control: {
        type: 'select'
      },
      options: AvatarBasic.props.statusColor.array
    },
    isLoading: {
      control: 'boolean'
    },
    size: {
      control: {
        type: 'select'
      },
      options: AvatarBasic.props.size.array
    },
    variant: {
      control: {
        type: 'select'
      },
      options: AvatarBasic.props.variant.array
    },
    shape: {
      control: {
        type: 'select'
      },
      options: AvatarBasic.props.shape.array
    }
  },
  parameters: {
    layout: 'centered',
    slots: {
      icon: 'Значок вместо текста',
      children: 'Дополнительные элементы'
    }
  }
}

const Template = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <AvatarBasic v-bind="args"></AvatarBasic>`
})

export const _Avatar = Template.bind({})
_Avatar.storyName = 'Аватар'
_Avatar.args = {
  size: '12',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  disabled: true
}

export const AvatarSizes = {
  name: 'Размеры аватаров с изображением',
  render: (args) => ({
    components: { AvatarBasic },
    setup() {
      return { args, sizes }
    },
    template: `
          <div class="flex flex-wrap gap-8">
            <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-1">
              <AvatarBasic :size="size" v-bind="args"/>
              <span class="text-sm text-gray-500">size = {{ size }}</span>
            </div>
          </div>`
  }),
  args: {
    label: 'ИИ',
    title: 'Иванова И.И.',
    image: avatar1,
    disabled: true
  }
}

export const AvatarLabelSizes = {
  name: 'Размеры аватаров без изображения (только текст)',
  render: (args) => ({
    components: { AvatarBasic },
    setup() {
      return { args, sizes }
    },
    template: `
          <div class="flex flex-wrap gap-8">
            <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-1">
              <AvatarBasic :size="size" v-bind="args"/>
              <span class="text-sm text-gray-500">size = {{ size }}</span>
            </div>
          </div>`
  }),
  args: {
    label: 'ИИ',
    title: 'Иванова И.И.',
    disabled: true
  }
}

export const AvatarIconSizes = {
  name: 'Размеры аватаров без изображения (со значком)',
  render: (args) => ({
    components: { AvatarBasic, UserIcon },
    setup() {
      return { args, sizes, iconSize }
    },
    template: `
          <div class="flex flex-wrap gap-8">
            <div v-for="size in sizes" :key="size" class="flex flex-col items-center gap-1">
              <AvatarBasic :size="size" v-bind="args">
                <template #icon>
                  <UserIcon :class="iconSize[size]"/>
                </template>
              </AvatarBasic>
              <span class="text-sm text-gray-500">size = {{ size }}</span>
              <span class="text-sm text-gray-500">{{ iconSize[size] }}</span>
            </div>
          </div>`
  }),
  args: {
    disabled: true
  }
}

export const AvatarProfile = {
  name: 'Аватар (профиль пользователя)',
  render: (args) => ({
    components: { AvatarBasic, UserIcon },
    setup() {
      return { args, avatar1, avatar4 }
    },
    template: `
          <div class="flex flex-wrap gap-8">
            <AvatarBasic :size="12" v-bind="args" :title="'Иванов И.И.'"
                         :image="avatar1"
                         className="border-2 border-white shadow-md"/>

            <AvatarBasic :size="12" v-bind="args" :title="'Иванов И.И.'" :label="'ИИ'"
                         :color="'success'"
                         className="border-2 border-white shadow-md"/>

            <AvatarBasic :size="12" v-bind="args" :title="'Иванов И.И.'"
                         :color="'error'"
                         className="border-2 border-white shadow-md">
              <template #icon>
                <UserIcon :class="'h-8 w-8'"/>
              </template>
            </AvatarBasic>

            <AvatarBasic :size="24" v-bind="args" :title="'Иванов И.И.'"
                         :image="avatar4"
                         className="border-4 border-white shadow-md"/>

            <AvatarBasic :size="24" v-bind="args" :title="'Иванов И.И.'" :label="'ШШ'"
                         :color="'success'"
                         className="border-4 border-white shadow-md"/>

            <AvatarBasic :size="24" v-bind="args" :title="'Иванов И.И.'"
                         :color="'error'"
                         className="border-4 border-white shadow-md">
              <template #icon>
                <UserIcon :class="'h-16 w-16'"/>
              </template>
            </AvatarBasic>

          </div>`
  }),
  args: {
    disabled: true
  }
}

const AvatarLabelGroupTemplate = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <div class="flex items-center gap-2.5">
        <AvatarBasic v-bind="args"></AvatarBasic>
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-gray-700">Иванова Ирина</span>
          <span class="text-xs text-gray-500">ivanovaii@sample.com</span>
        </div>
      </div>
    `
})

export const AvatarLabelGroup = AvatarLabelGroupTemplate.bind({})
AvatarLabelGroup.storyName = 'Группа аватар с текстом (размер 8, 32px)'
AvatarLabelGroup.args = {
  size: '8',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  disabled: true
}

const AvatarLabelGroupTemplate10 = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <div class="flex items-center gap-3">
        <AvatarBasic v-bind="args"></AvatarBasic>
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-gray-700">Иванова Ирина</span>
          <span class="text-sm text-gray-500">ivanovaii@sample.com</span>
        </div>
      </div>
    `
})

export const AvatarLabelGroup10 = AvatarLabelGroupTemplate10.bind({})
AvatarLabelGroup10.storyName = 'Группа аватар с текстом (размер 10, 40px)'
AvatarLabelGroup10.args = {
  size: '10',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  disabled: true
}

const AvatarLabelGroupTemplate12 = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <div class="flex items-center gap-3">
        <AvatarBasic v-bind="args"></AvatarBasic>
        <div class="flex flex-col">
          <span class="text-md font-semibold text-gray-700">Иванова Ирина</span>
          <span class="text-md text-gray-500">ivanovaii@sample.com</span>
        </div>
      </div>
    `
})

export const AvatarLabelGroup12 = AvatarLabelGroupTemplate12.bind({})
AvatarLabelGroup12.storyName = 'Группа аватар с текстом (размер 12, 48px)'
AvatarLabelGroup12.args = {
  size: '12',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  disabled: true
}

const AvatarLabelGroupTemplate14 = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <div class="flex items-center gap-4">
        <AvatarBasic v-bind="args"></AvatarBasic>
        <div class="flex flex-col">
          <span class="text-lg font-semibold text-gray-700">Иванова Ирина</span>
          <span class="text-md text-gray-500">ivanovaii@sample.com</span>
        </div>
      </div>
    `
})

export const AvatarLabelGroup14 = AvatarLabelGroupTemplate14.bind({})
AvatarLabelGroup14.storyName = 'Группа аватар с текстом (размер 14, 56px)'
AvatarLabelGroup14.args = {
  size: '14',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  disabled: true
}

const AvatarLabelGroupStatusTemplate = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <div class="flex items-center gap-2.5">
        <AvatarBasic v-bind="args"></AvatarBasic>
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-gray-700">Иванова Ирина</span>
          <span class="text-xs text-gray-500">ivanovaii@sample.com</span>
        </div>
      </div>
    `
})

export const AvatarLabelGroupStatus = AvatarLabelGroupStatusTemplate.bind({})
AvatarLabelGroupStatus.storyName = 'Группа аватар с текстом и статусом (размер 8, 32px)'
AvatarLabelGroupStatus.args = {
  size: '8',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  statusColor: 'success'
}

const AvatarLabelGroupStatusTemplate10 = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <div class="flex items-center gap-3">
        <AvatarBasic v-bind="args"></AvatarBasic>
        <div class="flex flex-col">
          <span class="text-sm font-semibold text-gray-700">Иванова Ирина</span>
          <span class="text-sm text-gray-500">ivanovaii@sample.com</span>
        </div>
      </div>
    `
})

export const AvatarLabelGroupStatus10 = AvatarLabelGroupStatusTemplate10.bind({})
AvatarLabelGroupStatus10.storyName = 'Группа аватар с текстом и статусом (размер 10, 40px)'
AvatarLabelGroupStatus10.args = {
  size: '10',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  statusColor: 'slate'
}

const AvatarLabelGroupStatusTemplate12 = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <div class="flex items-center gap-3">
        <AvatarBasic v-bind="args"></AvatarBasic>
        <div class="flex flex-col">
          <span class="text-md font-semibold text-gray-700">Иванова Ирина</span>
          <span class="text-md text-gray-500">ivanovaii@sample.com</span>
        </div>
      </div>
    `
})

export const AvatarLabelGroupStatus12 = AvatarLabelGroupStatusTemplate12.bind({})
AvatarLabelGroupStatus12.storyName = 'Группа аватар с текстом и статусом (размер 12, 48px)'
AvatarLabelGroupStatus12.args = {
  size: '12',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  statusColor: 'gray'
}

const AvatarLabelGroupStatusTemplate14 = (args) => ({
  components: { AvatarBasic },

  setup() {
    return { args }
  },
  template: `
      <div class="flex items-center gap-4">
        <AvatarBasic v-bind="args"></AvatarBasic>
        <div class="flex flex-col">
          <span class="text-lg font-semibold text-gray-700">Иванова Ирина</span>
          <span class="text-md text-gray-500">ivanovaii@sample.com</span>
        </div>
      </div>
    `
})

export const AvatarLabelGroupStatus14 = AvatarLabelGroupStatusTemplate14.bind({})
AvatarLabelGroupStatus14.storyName = 'Группа аватар с текстом и статусом (размер 14, 56px)'
AvatarLabelGroupStatus14.args = {
  size: '14',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1,
  statusColor: 'error'
}

const AvatarStatusIconTemplate = (args) => ({
  components: { AvatarBasic, BellIcon },

  setup() {
    return { args }
  },
  template: `
      <AvatarBasic v-bind="args">
        <template #children>
          <BellIcon :class="'h-4 w-4 text-white absolute -bottom-0.5 -right-0.5 animate-tada'"/>
          <BellIcon :class="'h-3 w-3 text-error-500 absolute bottom-0 right-0 animate-tada'"/>
        </template>
      </AvatarBasic>`
})

export const AvatarStatusIcon = AvatarStatusIconTemplate.bind({})
AvatarStatusIcon.storyName = 'Аватар со статусом-значком (размер 8, 32px)'
AvatarStatusIcon.args = {
  size: '8',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1
}

const AvatarStatusIcon2Template = (args) => ({
  components: { AvatarBasic, BellIcon },

  setup() {
    return { args }
  },
  template: `
      <AvatarBasic v-bind="args">
        <template #children>
          <span :class="'absolute bottom-0 right-0 flex h-3 w-3'">
            <span :class="'animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75'"/>
            <span :class="'relative inline-flex rounded-full h-3 w-3 bg-red-500 border-2 border-white'"/>
          </span>
        </template>
      </AvatarBasic>`
})

export const AvatarStatusIcon2 = AvatarStatusIcon2Template.bind({})
AvatarStatusIcon2.storyName = 'Аватар со статусом-значком (размер 10, 40px)'
AvatarStatusIcon2.args = {
  size: '10',
  label: 'ИИ',
  title: 'Иванова И.И.',
  image: avatar1
}
