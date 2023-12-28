import CardBasic from '../components/ui/CardBasic.vue'
import PlaceholderBasic from './assets/components/PlaceholderBasic.vue'
import TypographyElement from '@/components/ui/TypographyElement.vue'
import CardBody from '@/components/ui/CardBody.vue'
import ButtonBasic from '@/components/ui/ButtonBasic.vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import CardHeading from '@/components/ui/CardHeading.vue'
import CardFooter from '@/components/ui/CardFooter.vue'
import image from '@/stories/assets/images/storybook0005.jpg'

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
    layout: 'centered'
  }
}
const Template = (args) => ({
  components: { CardBasic, PlaceholderBasic },
  setup() {
    return { args }
  },
  template:
    '<CardBasic v-bind="args"><template #children><PlaceholderBasic className="h-32 w-full text-gray-200" /></template></CardBasic>'
})

export const _Card = Template.bind({})
_Card.storyName = 'Карточка'
_Card.args = {
  className: 'w-60 p-5',
  variant: 'default'
}

export const BasicCard = {
  name: 'Стандартная карточка',
  render: (args) => ({
    components: { CardBasic, TypographyElement, CardBody, ButtonBasic, ChevronRightIcon },
    setup() {
      return { args }
    },
    template:
      '<CardBasic v-bind="args"><template #children><CardBody><template #children><TypographyElement variant="card-title"><template #children>Заголовок</template></TypographyElement><TypographyElement variant="card-subtitle" className="mt-1"><template #children>Подзаголовок</template></TypographyElement><TypographyElement variant="text-main" className="my-4"><template #children>Небольшой пример текста, который будет опираться на заголовок карточки и составлять основную часть контента.</template></TypographyElement><ButtonBasic variant="link"><template #label>Ссылка</template><template #rightIcon><ChevronRightIcon /></template></ButtonBasic></template></CardBody></template></CardBasic>'
  }),
  args: {
    className: 'max-w-sm',
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
    template:
      '<CardBasic v-bind="args"><template #children><CardHeading><template #children><p>Рекомендуемые</p></template></CardHeading><CardBody><template #children><TypographyElement variant="card-title"><template #children>Заголовок</template></TypographyElement><TypographyElement variant="card-subtitle" className="mt-1"><template #children>Подзаголовок</template></TypographyElement><TypographyElement variant="text-main" className="my-4"><template #children>Небольшой пример текста, который будет опираться на заголовок карточки и составлять основную часть контента.</template></TypographyElement><ButtonBasic variant="link"><template #label>Ссылка</template><template #rightIcon><ChevronRightIcon /></template></ButtonBasic></template></CardBody></template></CardBasic>'
  }),
  args: {
    className: 'max-w-sm',
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
    template:
      '<CardBasic v-bind="args"><template #children><CardBody><template #children><TypographyElement variant="card-title"><template #children>Заголовок</template></TypographyElement><TypographyElement variant="card-subtitle" className="mt-1"><template #children>Подзаголовок</template></TypographyElement><TypographyElement variant="text-main" className="my-4"><template #children>Небольшой пример текста, который будет опираться на заголовок карточки и составлять основную часть контента.</template></TypographyElement><ButtonBasic variant="link"><template #label>Ссылка</template><template #rightIcon><ChevronRightIcon /></template></ButtonBasic></template></CardBody><CardFooter><template #children><p>Последнее обновление 5 мин назад</p></template></CardFooter></template></CardBasic>'
  }),
  args: {
    className: 'max-w-sm',
    variant: 'default'
  }
}

export const CardWithImage = {
  name: 'Карточка с изображением (без отступов)',
  render: (args) => ({
    components: { CardBasic, TypographyElement, CardBody, ChevronRightIcon, CardFooter },
    setup() {
      return { args, image }
    },
    template:
      '<CardBasic v-bind="args"><template #children><img :src="image" alt="Изображение для карточки" class="w-full h-48 object-cover"><CardBody><template #children><TypographyElement variant="card-title"><template #children>Заголовок</template></TypographyElement><TypographyElement variant="text-main" className="my-4"><template #children>Небольшой пример текста, который будет опираться на заголовок карточки и составлять основную часть контента.</template></TypographyElement></template></CardBody><CardFooter><template #children><p>Последнее обновление 5 мин назад</p></template></CardFooter></template></CardBasic>'
  }),
  args: {
    className: 'max-w-sm overflow-hidden',
    variant: 'default'
  }
}

export const CardWithImageInsideBody = {
  name: 'Карточка с изображением в содержимом',
  render: (args) => ({
    components: { CardBasic, TypographyElement, CardBody, ChevronRightIcon, CardFooter },
    setup() {
      return { args, image }
    },
    template:
      '<CardBasic v-bind="args"><template #children><CardBody className="overflow-hidden"><template #children><img :src="image" alt="Изображение для карточки" class="rounded-md w-full h-48 object-cover"></template></CardBody><CardBody><template #children><TypographyElement variant="card-title"><template #children>Заголовок</template></TypographyElement><TypographyElement variant="text-main" className="my-4"><template #children>Небольшой пример текста, который будет опираться на заголовок карточки и составлять основную часть контента.</template></TypographyElement></template></CardBody><CardFooter><template #children><p>Последнее обновление 5 мин назад</p></template></CardFooter></template></CardBasic>'
  }),
  args: {
    className: 'max-w-sm overflow-hidden',
    variant: 'default'
  }
}
