import BadgeBasic from '../components/ui/BadgeBasic.vue'
import TypographyElement from '@/components/ui/TypographyElement.vue'
import themeConfig from '../../configs/themeConfig.js'
import { HomeIcon } from '@heroicons/vue/24/outline/index.js'
import { XMarkIcon } from '@heroicons/vue/16/solid/index.js'

const variants = BadgeBasic.props.variant.array
const main = themeConfig.colors.main.map((color) => color.name)
const states = themeConfig.colors.states.map((color) => color.name)
const secondary = themeConfig.colors.secondary.map((color) => color.name)

export default {
  title: 'Компоненты/Бейджи/Бейдж',
  component: BadgeBasic,
  argTypes: {
    color: {
      control: {
        type: 'select'
      },
      options: BadgeBasic.props.color.array
    },
    size: {
      control: {
        type: 'select'
      },
      options: BadgeBasic.props.size.array
    },
    variant: {
      control: {
        type: 'select'
      },
      options: BadgeBasic.props.variant.array
    },
    shape: {
      control: {
        type: 'select'
      },
      options: BadgeBasic.props.shape.array
    }
  },
  parameters: {
    layout: 'centered',
    slots: {
      default: 'Дополнительные элементы'
    }
  }
}

const Template = (args) => ({
  components: { BadgeBasic },
  setup() {
    return { args }
  },
  template: `
      <BadgeBasic v-bind="args">Бейдж</BadgeBasic>`
})

export const _Badge = Template.bind({})
_Badge.storyName = 'Бейдж'

export const BadgeShapes = {
  name: 'Формы и размеры бейджей',
  render: () => ({
    components: { BadgeBasic, TypographyElement, HomeIcon },
    setup() {},
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер small</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'small'">
                  Бейдж
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'small'">
                  Бейдж
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default-square'" :size="'small'">
                  <HomeIcon class="w-4 h-4"/>
                </BadgeBasic>
                <TypographyElement variant="label">default-square</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded-square'" :size="'small'">
                  <HomeIcon class="w-4 h-4"/>
                </BadgeBasic>
                <TypographyElement variant="label">rounded-square</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер default (по-умолчанию)
              </TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'default'">
                  Бейдж
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'default'">
                  Бейдж
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default-square'" :size="'default'">
                  <HomeIcon class="w-5 h-5"/>
                </BadgeBasic>
                <TypographyElement variant="label">default-square</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded-square'" :size="'default'">
                  <HomeIcon class="w-5 h-5"/>
                </BadgeBasic>
                <TypographyElement variant="label">rounded-square</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер large</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'large'">
                  Бейдж
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'large'">
                  Бейдж
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default-square'" :size="'large'">
                  <HomeIcon class="w-6 h-6"/>
                </BadgeBasic>
                <TypographyElement variant="label">default-square</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded-square'" :size="'large'">
                  <HomeIcon class="w-6 h-6"/>
                </BadgeBasic>
                <TypographyElement variant="label">rounded-square</TypographyElement>
              </div>
            </div>
          </div>
        `
  })
}

export const BadgeVariants = {
  name: 'Варианты бейджей',
  render: () => ({
    components: { BadgeBasic, TypographyElement },
    setup() {
      return { main, states, secondary, variants }
    },
    template: `
          <div v-for="variant in variants" :key="variant" class="flex flex-col gap-8 mt-10">
            <TypographyElement variant="h6" className="mt-1">
              variant = {{ variant }}
            </TypographyElement>
            <TypographyElement variant="text-main" className="mt-1">
              Основные
            </TypographyElement>
            <div class="grid grid-cols-6 gap-8">
              <div v-for="color in main" :key="color" class="flex flex-col items-center gap-1">
                <BadgeBasic :variant="variant" :color="color">Бейдж</BadgeBasic>
                <TypographyElement variant="label" className="mt-1">
                  color = {{ color }}
                </TypographyElement>
              </div>
            </div>
            <TypographyElement variant="text-main" className="mt-1">
              Состояния
            </TypographyElement>
            <div class="grid grid-cols-6 gap-8">
              <div v-for="color in states" :key="color" class="flex flex-col items-center gap-1">
                <BadgeBasic :variant="variant" :color="color" v-bind="args">Бейдж</BadgeBasic>
                <TypographyElement variant="label" className="mt-1">
                  color = {{ color }}
                </TypographyElement>
              </div>
            </div>
            <TypographyElement variant="text-main" className="mt-1">
              Вторичные
            </TypographyElement>
            <div class="grid grid-cols-6 gap-8">
              <div v-for="color in secondary" :key="color" class="flex flex-col items-center gap-1">
                <BadgeBasic :variant="variant" :color="color" v-bind="args">Бейдж</BadgeBasic>
                <TypographyElement variant="label" className="mt-1">
                  color = {{ color }}
                </TypographyElement>
              </div>
            </div>
          </div>`
  })
}

export const BadgeWithStatus = {
  name: 'Бейдж со статусом',
  render: () => ({
    components: { BadgeBasic, TypographyElement },
    setup() {},
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер small</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'small'">
                      <span class="flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full bg-indigo-700 flex shrink-0"/>
      Бейдж
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'small'">
                      <span class="flex items-center gap-1.5">
      <span class="w-1.5 h-1.5 rounded-full bg-indigo-700 flex shrink-0"/>
      Бейдж
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер default (по-умолчанию)
              </TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'default'">
                      <span class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-indigo-700 flex shrink-0"/>
      Бейдж
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'default'">
                      <span class="flex items-center gap-2">
      <span class="w-2 h-2 rounded-full bg-indigo-700 flex shrink-0"/>
      Бейдж
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер large</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'large'">
                      <span class="flex items-center gap-2.5">
      <span class="w-3 h-3 rounded-full bg-indigo-700 flex shrink-0"/>
      Бейдж
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'large'">
                      <span class="flex items-center gap-2.5">
      <span class="w-3 h-3 rounded-full bg-indigo-700 flex shrink-0"/>
      Бейдж
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
            </div>
          </div>
        `
  })
}

export const BadgeWithIcon = {
  name: 'Бейдж со значком и текстом',
  render: () => ({
    components: { BadgeBasic, TypographyElement, HomeIcon },
    setup() {},
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер small</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'small'">
    <span class="flex items-center gap-1">
      <HomeIcon class="w-4 h-4 shrink-0"/>
      На главную
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'small'">
    <span class="flex items-center gap-1">
      <HomeIcon class="w-4 h-4 shrink-0"/>
      На главную
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер default (по-умолчанию)
              </TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'default'">
    <span class="flex items-center gap-1.5">
      <HomeIcon class="w-5 h-5 shrink-0"/>
      На главную
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'default'">
    <span class="flex items-center gap-1.5">
      <HomeIcon class="w-5 h-5 shrink-0"/>
      На главную
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Размер large</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'default'" :size="'large'">
    <span class="flex items-center gap-2">
      <HomeIcon class="w-6 h-6 shrink-0"/>
      На главную
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">default (по-умолчанию)</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <BadgeBasic :shape="'rounded'" :size="'large'">
    <span class="flex items-center gap-2">
      <HomeIcon class="w-6 h-6 shrink-0"/>
      На главную
    </span>
                </BadgeBasic>
                <TypographyElement variant="label">rounded</TypographyElement>
              </div>
            </div>
          </div>
        `
  })
}

const BadgeInBadgeTemplate = (args) => ({
  components: { BadgeBasic },
  setup() {
    return { args }
  },
  template: `
      <BadgeBasic v-bind="args">
        <span class="flex items-center gap-2.5 pr-2.5">
      <BadgeBasic :color="'violet'" :shape="'default'" :size="'default'" :variant="'solid'">
        Новые функции
      </BadgeBasic>
      Мы добавили новые функции
    </span>
      </BadgeBasic>`
})

export const BadgeInBadge = BadgeInBadgeTemplate.bind({})
BadgeInBadge.storyName = 'Бейдж solid в бейдже soft'
BadgeInBadge.args = {
  size: 'large',
  shape: 'default-square',
  variant: 'soft',
  color: 'violet'
}

const BadgeOutlineInBadgeTemplate = (args) => ({
  components: { BadgeBasic },
  setup() {
    return { args }
  },
  template: `
      <BadgeBasic v-bind="args">
            <span class="flex items-center gap-2.5 pl-2.5">
      Мы добавили новые функции
        <BadgeBasic :color="'green'" :shape="'default'" :size="'default'" :variant="'soft'">
          Новые функции
        </BadgeBasic>
    </span>
      </BadgeBasic>`
})

export const BadgeOutlineInBadge = BadgeOutlineInBadgeTemplate.bind({})
BadgeOutlineInBadge.storyName = 'Бейдж soft в бейдже solid'
BadgeOutlineInBadge.args = {
  size: 'default',
  shape: 'default-square',
  variant: 'solid',
  color: 'green'
}

const BadgeWithDeleteButtonTemplate = (args) => ({
  components: { BadgeBasic, XMarkIcon },
  setup() {
    return { args }
  },
  template: `
      <BadgeBasic v-bind="args">
<span class="flex items-center gap-1">
      Бейдж
      <button
          class="text-violet-500 hover:text-violet-700 hover:outline-0 focus:outline-0"
          title="Удалить метку"
          @click="()=>alert('Бейдж удален')"
      >
        <XMarkIcon class="w-4 h-4"/>
      </button>
    </span>
      </BadgeBasic>`
})

export const BadgeWithDeleteButton = BadgeWithDeleteButtonTemplate.bind({})
BadgeWithDeleteButton.storyName = 'Бейдж с кнопкой удаления'
BadgeWithDeleteButton.args = {
  size: 'default',
  shape: 'default',
  variant: 'soft',
  color: 'violet'
}
