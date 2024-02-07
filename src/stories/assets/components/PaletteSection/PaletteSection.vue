<script>
import PaletteElement from '@/stories/assets/components/PaletteSection/PaletteElement.vue'
import { colorContrastRatio } from '@/utils/colorUtils.js'
import TypographyElement from '@/components/ui/TypographyElement.vue'

import themeConfig from '../../../../../configs/themeConfig.js'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors

const tailwindColors = Object.keys(colors).filter(
  (color) =>
    ![
      'brand',
      'accent',
      'error',
      'warning',
      'success',
      'info',
      'inherit',
      'black',
      'white',
      'current',
      'transparent',
      'lightBlue',
      'warmGray',
      'trueGray',
      'coolGray',
      'blueGray'
    ].includes(color)
)

const colorTranslation = {
  slate: 'Холодный серый',
  gray: 'Серый',
  zinc: 'Цинковый серый',
  neutral: 'Нейтральный серый',
  stone: 'Тёплый серый',
  red: 'Красный',
  orange: 'Оранжевый',
  amber: 'Желто-оранжевый',
  yellow: 'Жёлтый',
  lime: 'Лимонный',
  green: 'Зелёный тёплый',
  emerald: 'Зелёный холодный',
  teal: 'Бирюзовый',
  cyan: 'Голубой',
  sky: 'Небесно-голубой',
  blue: 'Синий',
  indigo: 'Индиго',
  violet: 'Фиолетовый',
  purple: 'Пурпурный',
  fuchsia: 'Фуксия',
  pink: 'Розовый',
  rose: 'Красно-розовый'
}

const sectionSettings = {
  main: {
    title: 'Основные цвета',
    description:
      'Это основные цвета, составляющие большую часть цветов, используемых в дизайн-системе.',
    colors: [
      {
        name: themeConfig.colors.main[0].name,
        color: themeConfig.colors.main[0].color,
        title: 'Серый',
        description:
          'Серый — нейтральный цвет и является основой цветовой системы. Почти все в дизайне пользовательского интерфейса — текст, поля форм, фон, разделители — обычно серые.'
      },
      {
        name: themeConfig.colors.main[1].name,
        color: themeConfig.colors.main[1].color,
        title: 'Цвет бренда',
        description:
          'Цвет бренда — это ваш «основной» цвет, который используется во всех интерактивных элементах, таких как кнопки, ссылки, элементы ввода и т. д. Этот цвет может определять общее ощущение и вызывать эмоции.'
      },
      {
        name: themeConfig.colors.main[2].name,
        color: themeConfig.colors.main[2].color,
        title: 'Акцентный цвет',
        description:
          'Они действуют как «вторичные» или «вспомогательные» цвета по отношению к основному цвету. Они полезны для привлечения внимания или для поддержки вашего основного/фирменного цвета. Они также полезны для таких компонентов, как этикетки и значки.'
      }
    ]
  },
  states: {
    title: 'Цвета состояний',
    description: '',
    colors: [
      {
        name: themeConfig.colors.states[0].name,
        color: themeConfig.colors.states[0].color,
        title: 'Ошибка',
        description: `Цвета ошибок используются в разных состояниях ошибок и при «деструктивных» действиях. Они сообщают о деструктивных/негативных действиях, таких как удаление пользователя из вашей команды.`
      },
      {
        name: themeConfig.colors.states[1].name,
        color: themeConfig.colors.states[1].color,
        title: 'Предупреждение',
        description:
          'Цвета предупреждений могут указывать на то, что действие потенциально разрушительно или «приостановлено». Эти цвета обычно используются в подтверждениях, чтобы привлечь внимание пользователей.'
      },
      {
        name: themeConfig.colors.states[2].name,
        color: themeConfig.colors.states[2].color,
        title: 'Успех',
        description:
          'Цвета успеха сообщают о позитивном действии, положительной\n' +
          '              тенденции или успешном подтверждении. Если вы используете зеленый\n' +
          '              в качестве основного цвета, может быть полезно добавить другой\n' +
          '              оттенок для вашего успешного зеленого цвета.'
      },
      {
        name: themeConfig.colors.states[3].name,
        color: themeConfig.colors.states[3].color,
        title: 'Информация',
        description: ''
      }
    ]
  },
  secondary: {
    title: 'Вторичные цвета',
    description:
      'Наряду с основными цветами полезно иметь выбор дополнительных цветов для использования в таких компонентах, как таблетки, оповещения и этикетки. Эти второстепенные цвета следует использовать умеренно или в качестве акцентов, тогда как основной цвет должен иметь приоритет.',
    colors: themeConfig.colors.secondary.map((color) => ({
      name: color.name,
      color: color.color,
      title: colorTranslation[color.name.toString().toLowerCase()],
      description: ''
    }))
  },
  tailwind: {
    title: 'Стандартные цвета Tailwind CSS',
    description: '',
    colors: tailwindColors.map((color) => ({
      name: color,
      color: color,
      title: colorTranslation[color.toString().toLowerCase()],
      description: ''
    }))
  }
}

export default {
  name: 'Palette-Section',
  methods: { colorContrastRatio },
  components: { TypographyElement, PaletteElement },

  props: {
    section: {
      type: String,
      required: true
    }
  },

  setup() {
    return {
      sectionSettings,
      colors,
      colorTranslation
    }
  }
}
</script>

<template>
  <div class="pt-16">
    <TypographyElement variant="h3" :class="'mb-4'">
      {{ sectionSettings[section].title }}
    </TypographyElement>
    <TypographyElement variant="text-main" :class="'mb-4'">
      {{ sectionSettings[section].description }}
    </TypographyElement>
    <div class="flex flex-col gap-y-8">
      <div v-for="color in sectionSettings[section].colors" :key="color" class="flex gap-x-8 py-10">
        <div class="flex flex-col w-48">
          <TypographyElement variant="h6">
            {{ color.title }} (<span class="capitalize"> {{ color.name.toString() }} </span>)
          </TypographyElement>
          <TypographyElement
            v-if="section === 'main' || section === 'states'"
            variant="text-main"
            :class="'mb-4'"
          >
            {{ colorTranslation[color.color.toString().toLowerCase()] }} (<span class="capitalize">
              {{ color.color.toString() }} </span
            >)
          </TypographyElement>
          <TypographyElement variant="text-secondary" :class="'mb-4'">
            {{ color.description }}
          </TypographyElement>
        </div>
        <div class="grid grid-cols-5 gap-4">
          <PaletteElement
            v-if="color.name === 'grayscale'"
            :hex-color="'#ffffff'"
            :name="'white'"
            :rate="0"
          />

          <PaletteElement
            v-for="variant in Object.keys(colors[color.color])"
            :key="color.color + variant"
            :hex-color="colors[color.color][variant]"
            :name="color.name + '-' + variant"
            :rate="colorContrastRatio('#ffffff', colors[color.color][variant], 'normal text')"
          />
          <PaletteElement
            v-if="color.name === 'grayscale'"
            :hex-color="'#000000'"
            :name="'black'"
            :rate="colorContrastRatio('#ffffff', '#000000', 'normal text')"
          />
        </div>
      </div>
    </div>
  </div>
</template>
