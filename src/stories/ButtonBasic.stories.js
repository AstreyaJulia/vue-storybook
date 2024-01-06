import ButtonBasic from '../components/ui/ButtonBasic.vue'
import { ArrowPathIcon, TrashIcon } from '@heroicons/vue/24/outline'
import { ArrowRightIcon } from '@heroicons/vue/20/solid'
import TypographyElement from '@/components/ui/TypographyElement.vue'

export default {
  components: { TypographyElement },
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

export const ButtonSizes = {
  name: 'Размеры кнопок.',
  render: (args) => ({
    components: { ButtonBasic, TypographyElement },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Стандартный размер (default)</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'default'" :size="'default'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">default</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'primary'" :size="'default'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">primary</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'destructive'" :size="'default'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">destructive</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'tertiary'" :size="'default'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">tertiary</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'link'" :size="'default'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">link</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Уменьшенный размер (small)</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'default'" :size="'small'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">default</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'primary'" :size="'small'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">primary</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'destructive'" :size="'small'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">destructive</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'tertiary'" :size="'small'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">tertiary</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :variant="'link'" :size="'small'">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">link</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    shape: 'default'
  }
}

export const PrimaryStates = {
  name: 'Главная кнопка. Состояния.',
  parameters: {
    pseudo: {
      hover: '#one',
      focus: '#two',
      active: '#three'
    }
  },
  render: (args) => ({
    components: { ButtonBasic, TypographyElement },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">По-умолчанию</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Заблокированная</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :disabled="true">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :disabled="true">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :disabled="true">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :disabled="true">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Загрузка</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :isLoading="true">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :isLoading="true">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :isLoading="true">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :isLoading="true">
                  <template #label>Сохранить</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    variant: 'primary',
    shape: 'default'
  }
}

export const DefaultStates = {
  name: 'Стандартная кнопка. Состояния.',
  parameters: {
    pseudo: {
      hover: '#one',
      focus: '#two',
      active: '#three'
    }
  },
  render: (args) => ({
    components: { ButtonBasic, TypographyElement },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">По-умолчанию</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Заблокированная</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :disabled="true">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :disabled="true">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :disabled="true">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :disabled="true">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Загрузка</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :isLoading="true">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :isLoading="true">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :isLoading="true">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :isLoading="true">
                  <template #label>Отмена</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    variant: 'default',
    shape: 'default'
  }
}

export const WithLeftIconStates = {
  name: 'Стандартная кнопка со значком слева. Состояния.',
  parameters: {
    pseudo: {
      hover: '#one',
      focus: '#two',
      active: '#three'
    }
  },
  render: (args) => ({
    components: { ButtonBasic, TypographyElement, ArrowPathIcon },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">По-умолчанию</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Заблокированная</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :disabled="true">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :disabled="true">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :disabled="true">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :disabled="true">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Загрузка</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :isLoading="true">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :isLoading="true">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :isLoading="true">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :isLoading="true">
                  <template #label>Обновить</template>
                  <template #leftIcon>
                    <ArrowPathIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    variant: 'default',
    shape: 'default'
  }
}

export const WithRightIconStates = {
  name: 'Стандартная кнопка со значком справа. Состояния.',
  parameters: {
    pseudo: {
      hover: '#one',
      focus: '#two',
      active: '#three'
    }
  },
  render: (args) => ({
    components: { ButtonBasic, TypographyElement, ArrowRightIcon },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">По-умолчанию</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Заблокированная</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :disabled="true">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :disabled="true">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :disabled="true">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :disabled="true">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Загрузка</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :isLoading="true">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :isLoading="true">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :isLoading="true">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :isLoading="true">
                  <template #label>Следующая</template>
                  <template #rightIcon>
                    <ArrowRightIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    variant: 'default',
    shape: 'default'
  }
}

export const OnlyIconStates = {
  name: 'Стандартная кнопка без текста (только со значком). Состояния.',
  parameters: {
    pseudo: {
      hover: '#one',
      focus: '#two',
      active: '#three'
    }
  },
  render: (args) => ({
    components: { ButtonBasic, TypographyElement, TrashIcon },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">По-умолчанию</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Заблокированная</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :disabled="true" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :disabled="true" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :disabled="true" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :disabled="true" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Загрузка</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :isLoading="true" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :isLoading="true" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :isLoading="true" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :isLoading="true" :shape="'square'" :title="'Удалить элемент'">
                  <template #rightIcon>
                    <TrashIcon/>
                  </template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    variant: 'default',
    shape: 'default'
  }
}

export const TertiaryStates = {
  name: 'Кнопка третьего порядка. Состояния.',
  parameters: {
    pseudo: {
      hover: '#one',
      focus: '#two',
      active: '#three'
    }
  },
  render: (args) => ({
    components: { ButtonBasic, TypographyElement },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">По-умолчанию</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Заблокированная</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :disabled="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :disabled="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :disabled="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :disabled="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Загрузка</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :isLoading="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :isLoading="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :isLoading="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :isLoading="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    variant: 'tertiary',
    shape: 'default'
  }
}

export const LinkStates = {
  name: 'Кнопка-ссылка. Состояния.',
  parameters: {
    pseudo: {
      hover: '#one',
      focus: '#two',
      active: '#three'
    }
  },
  render: (args) => ({
    components: { ButtonBasic, TypographyElement },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">По-умолчанию</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Заблокированная</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :disabled="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :disabled="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :disabled="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :disabled="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Загрузка</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :isLoading="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :isLoading="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :isLoading="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :isLoading="true">
                  <template #label>Перейти</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    variant: 'link',
    shape: 'default'
  }
}

export const DestructiveStates = {
  name: 'Кнопка, обозначающая разрушительные действия. Состояния.',
  parameters: {
    pseudo: {
      hover: '#one',
      focus: '#two',
      active: '#three'
    }
  },
  render: (args) => ({
    components: { ButtonBasic, TypographyElement },
    setup() {
      return { args }
    },
    template: `
          <div class="flex flex-col gap-6">
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">По-умолчанию</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Заблокированная</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :disabled="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :disabled="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :disabled="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :disabled="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
            <div class="flex gap-5">
              <TypographyElement variant="text-secondary" :class="'w-40'">Загрузка</TypographyElement>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic v-bind="args" :isLoading="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">default / обычное</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="one" v-bind="args" :isLoading="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">hover / наведение</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="two" v-bind="args" :isLoading="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">focus / фокус</TypographyElement>
              </div>
              <div class="flex flex-col gap-2 items-center justify-center">
                <ButtonBasic id="three" v-bind="args" :isLoading="true">
                  <template #label>Удалить</template>
                </ButtonBasic>
                <TypographyElement variant="label">active / активна</TypographyElement>
              </div>
            </div>
          </div>
        `
  }),
  args: {
    variant: 'destructive',
    shape: 'default'
  }
}
