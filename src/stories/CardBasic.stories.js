import CardBasic from '../components/ui/CardBasic.vue'
import PlaceholderBasic from './assets/components/PlaceholderBasic.vue'
import TypographyElement from '@/components/ui/TypographyElement.vue'
import CardBody from '@/components/ui/CardBody.vue'
import ButtonBasic from '@/components/ui/ButtonBasic.vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import CardHeading from '@/components/ui/CardHeading.vue'
import CardFooter from '@/components/ui/CardFooter.vue'
import image from '@/stories/assets/images/storybook0005.jpg'
import { FolderPlusIcon } from '@heroicons/vue/24/outline/index.js'
import Simplebar from 'simplebar-vue'

export default {
  components: { CardBody, TypographyElement, CardBasic },
  title: 'Компоненты/Карточки/Карточка',
  component: CardBasic,
  argTypes: {
    variant: {
      control: {
        type: 'select'
      },
      options: CardBasic.props.variant.array
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
  components: { CardBasic, PlaceholderBasic },
  setup() {
    return { args }
  },
  template: `
      <CardBasic v-bind="args">
          <PlaceholderBasic :class="'h-32 w-full text-gray-200'"/>
      </CardBasic>
    `
})

export const _Card = Template.bind({})
_Card.storyName = 'Карточка'
_Card.args = {
  class: 'w-60 p-4',
  variant: 'default'
}

export const BasicCard = {
  name: 'Стандартная карточка',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      ButtonBasic,
      ChevronRightIcon
    },
    setup() {
      return { args }
    },
    template: `
          <CardBasic v-bind="args">
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="card-subtitle" :class="'mt-1'">
                    Подзаголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
                  <ButtonBasic variant="link">
                    <template #label>Ссылка</template>
                    <template #rightIcon>
                      <ChevronRightIcon/>
                    </template>
                  </ButtonBasic>
              </CardBody>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm',
    variant: 'default'
  }
}

export const CardWithHeading = {
  name: 'Карточка с заголовком',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      ButtonBasic,
      ChevronRightIcon,
      CardHeading
    },
    setup() {
      return { args }
    },
    template: `
          <CardBasic v-bind="args">
              <CardHeading>
                <p>Рекомендуемые</p>
              </CardHeading>
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="card-subtitle" :class="'mt-1'">
                    Подзаголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
                  <ButtonBasic variant="link">
                    <template #label>Ссылка</template>
                    <template #rightIcon>
                      <ChevronRightIcon/>
                    </template>
                  </ButtonBasic>
              </CardBody>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm',
    variant: 'default'
  }
}

export const CardWithFooter = {
  name: 'Карточка с подвалом',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      ButtonBasic,
      ChevronRightIcon,
      CardFooter
    },
    setup() {
      return { args }
    },
    template: `
          <CardBasic v-bind="args">
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="card-subtitle" :class="'mt-1'">
                    Подзаголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
                  <ButtonBasic variant="link">
                    <template #label>Ссылка</template>
                    <template #rightIcon>
                      <ChevronRightIcon/>
                    </template>
                  </ButtonBasic>
              </CardBody>
              <CardFooter :class="'rounded-b-lg'">
                  <p>Последнее обновление 5 мин назад</p>
              </CardFooter>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm',
    variant: 'default'
  }
}

export const CardWithImage = {
  name: 'Карточка с изображением (без отступов)',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      CardFooter
    },
    setup() {
      return { args, image }
    },
    template: `
          <CardBasic v-bind="args">
              <img :src="image" alt="Изображение для карточки" class="w-full h-48 object-cover">
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
              </CardBody>
              <CardFooter :class="'rounded-b-lg'">
                <p>Последнее обновление 5 мин назад</p>
              </CardFooter>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm overflow-hidden',
    variant: 'default'
  }
}

export const CardWithImageInsideBody = {
  name: 'Карточка с изображением в содержимом',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      CardFooter
    },
    setup() {
      return { args, image }
    },
    template: `
          <CardBasic v-bind="args">
              <CardBody :class="'overflow-hidden'">
                  <img :src="image" alt="Изображение для карточки"
                                         class="rounded-md w-full h-48 object-cover">
              </CardBody>
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
              </CardBody>
              <CardFooter :class="'rounded-b-lg'">
                <p>Последнее обновление 5 мин назад</p>
              </CardFooter>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm overflow-hidden',
    variant: 'default'
  }
}

export const CardWithButton = {
  name: 'Карточка с кнопкой',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      CardFooter,
      ButtonBasic
    },
    setup() {
      return { args, image }
    },
    template: `
          <CardBasic v-bind="args">
              <img :src="image" alt="Изображение для карточки" class="w-full h-48 object-cover">
              <CardBody>
                  <TypographyElement variant="card-title">Заголовок</TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
              </CardBody>
              <CardFooter :class="'rounded-b-lg'">
                  <ButtonBasic variant="primary" type="submit">
                    <template #label>Перейти куда-нибудь</template>
                  </ButtonBasic>
                  <ButtonBasic variant="link" type="submit">
                    <template #label>Ссылка</template>
                  </ButtonBasic>
              </CardFooter>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm overflow-hidden',
    variant: 'default'
  }
}

export const CardOverlay = {
  name: 'Карточка с подложкой',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody
    },
    setup() {
      return { args, image }
    },
    template: `
          <CardBasic v-bind="args">
              <img :src="image" alt="Изображение для карточки" class="w-full h-56 object-cover">
              <CardBody :class="'absolute inset-0 bg-white/70 dark:bg-gray-900/70'">
                  <TypographyElement variant="card-title" >
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
              </CardBody>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm overflow-hidden relative',
    variant: 'default'
  }
}

export const CardHorizontal = {
  name: 'Карточка с горизонтальной раскладкой',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody
    },
    setup() {
      return { args, image }
    },
    template: `
          <CardBasic v-bind="args">
              <img :src="image" alt="Изображение для карточки"
                                     class="w-44 shrink-0 self-stretch object-cover">
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
              </CardBody>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm overflow-hidden flex items-center',
    variant: 'default'
  }
}

export const CardWithCentredBody = {
  name: 'Карточка с центрированным содержимым',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      ButtonBasic
    },
    setup() {
      return { args }
    },
    template: `
          <CardBasic v-bind="args">
              <CardBody :class="'flex flex-col items-center'">
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4 text-center'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
                  <ButtonBasic variant="link" type="submit">
                    <template #label>Ссылка</template>
                  </ButtonBasic>
              </CardBody>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm',
    variant: 'default'
  }
}

export const CardTopBordered = {
  name: 'Карточка с акцентной верхней границей',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody
    },
    setup() {
      return { args }
    },
    template: `
          <CardBasic v-bind="args">
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
              </CardBody>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm border-t-4 border-t-brand-500 dark:border-t-brand-400',
    variant: 'default'
  }
}

export const CardLeftBordered = {
  name: 'Карточка с акцентной левой границей',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody
    },
    setup() {
      return { args }
    },
    template: `
          <CardBasic v-bind="args">
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'my-4'">
                    Небольшой пример текста, который будет опираться на заголовок карточки и
                      составлять основную часть контента.
                  </TypographyElement>
              </CardBody>
          </CardBasic>
        `
  }),
  args: {
    class: 'max-w-sm border-l-8 border-l-brand-500 dark:border-l-brand-400',
    variant: 'default'
  }
}

export const CardEmptyState = {
  name: 'Карточка с пустым состоянием',
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      FolderPlusIcon,
      ButtonBasic
    },
    setup() {
      return { args }
    },
    template: `
          <CardBasic v-bind="args">
              <CardBody :class="'flex flex-col items-center gap-y-4 px-4 py-16'">
                  <FolderPlusIcon class="h-12 w-12 text-gray-400"/>
                  <TypographyElement variant="text-secondary">
                    Вы не создали ни одного проекта.
                  </TypographyElement>
                  <ButtonBasic variant="primary" type="submit">
                    <template #label>Создать</template>
                  </ButtonBasic>
              </CardBody>
          </CardBasic>
        `
  }),
  args: {
    class: 'w-96',
    variant: 'default'
  }
}

export const CardWithScroll = {
  name: 'Карточка с прокруткой',
  args: {
    class: 'w-96 h-40 overflow-hidden block',
    variant: 'default'
  },
  render: (args) => ({
    components: {
      CardBasic,
      TypographyElement,
      CardBody,
      FolderPlusIcon,
      ButtonBasic,
      Simplebar
    },
    setup() {
      return { args }
    },
    template: `
          <CardBasic v-bind="args">
              <Simplebar forceVisible="y" :style="{ maxWidth: '100%', width: '100%' }" autoHide="false">
              <CardBody>
                  <TypographyElement variant="card-title">
                    Заголовок
                  </TypographyElement>
                  <TypographyElement variant="card-subtitle" :class="'mt-1'">
                    Подзаголовок
                  </TypographyElement>
                  <TypographyElement variant="text-main" :class="'mt-4'">
                    Далеко-далеко за словесными горами в стране гласных и согласных живут
                      рыбные тексты. Вдали от всех живут они в буквенных домах на берегу
                      Семантика большого языкового океана. Маленький ручеек Даль журчит по
                      всей стране и обеспечивает ее всеми необходимыми правилами. Эта
                      парадигматическая страна, в которой жаренные члены предложения
                      залетают прямо в рот. Даже всемогущая пунктуация не имеет власти над
                      рыбными текстами, ведущими безорфографичный образ жизни. Однажды одна
                      маленькая строчка рыбного текста по имени Lorem ipsum решила выйти в
                      большой мир грамматики. Великий Оксмокс предупреждал ее о злых
                      запятых, диких знаках вопроса и коварных точках с запятой, но текст не
                      дал сбить себя с толку. Он собрал семь своих заглавных букв, подпоясал
                      инициал за пояс и пустился в дорогу. Взобравшись на первую вершину
                      курсивных гор, бросил он последний взгляд назад, на силуэт своего
                      родного города Буквоград, на заголовок деревни Алфавит и на
                      подзаголовок своего переулка Строчка. Грустный риторический вопрос
                      скатился по его щеке и он продолжил свой путь. По дороге встретил
                      текст рукопись. Она предупредила его: «В моей стране все
                      переписывается по несколько раз. Единственное, что от меня осталось,
                      это приставка «и». Возвращайся ты лучше в свою безопасную страну». Не
                      послушавшись рукописи, наш текст продолжил свой путь.
                  </TypographyElement>
              </CardBody>
              </Simplebar>
          </CardBasic>
        `
  })
}
