<script>
import { reactive, computed } from 'vue'

const sizes = {
  default: 'text-lg lg:text-base',
  small: 'text-base lg:text-sm'
}

const shapes = {
  default: {
    default: 'py-1.5 px-5',
    square: 'py-1.5 px-1.5'
  },
  small: {
    default: 'py-1 px-4',
    square: 'py-1 px-1'
  }
}

const variants = {
  default:
    'shadow-sm border border-gray-300 hover:border-gray-400 bg-gray-50 hover:bg-gray-100 text-gray-800 fill-gray-800 hover:text-gray-900 hover:fill-gray-900 focus:ring-4 focus:ring-gray-300/50 disabled:bg-gray-50 disabled:hover:bg-gray-50 disabled:border-gray-100 disabled:hover:border-gray-100 disabled:text-gray-300 disabled:fill-gray-300',
  primary:
    'shadow-sm border border-brand-600 bg-brand-600 text-white fill-white hover:bg-brand-700 hover:border-brand-700 focus:ring-4 focus:ring-brand-300/50 disabled:bg-brand-200 disabled:border-brand-200 disabled:hover:bg-brand-200 disabled:text-gray-100 disabled:fill-gray-100',
  destructive:
    'shadow-sm border border-error-400 hover:border-error-500 bg-error-100 hover:bg-error-200 text-error-700 fill-error-700 focus:ring-4 focus:ring-error-300/50 disabled:bg-error-50 disabled:hover:bg-error-50 disabled:border-error-100 disabled:hover:border-error-100 disabled:text-error-300 disabled:fill-error-300',
  tertiary:
    'bg-transparent border border-transparent text-gray-600 fill-gray-600 hover:text-gray-800 hover:fill-gray-800 focus:ring-4 focus:ring-gray-300/50 disabled:text-gray-200 disabled:fill-gray-200 disabled:text-gray-300 disabled:fill-gray-300',
  link: 'bg-transparent border border-transparent text-brand-600 fill-brand-600 hover:text-brand-800 hover:fill-brand-800 focus:ring-4 focus:ring-brand-300/50 disabled:text-brand-200 disabled:fill-brand-200 disabled:text-brand-300 disabled:fill-brand-300'
}

const loaderFill = {
  default: {
    ring: 'stroke-gray-400/30',
    spinner: 'fill-gray-700/30'
  },
  primary: {
    ring: 'stroke-brand-400/30',
    spinner: 'fill-brand-700/30'
  },
  destructive: {
    ring: 'stroke-error-400/30',
    spinner: 'fill-error-700/50'
  },
  tertiary: {
    ring: 'stroke-gray-400/30',
    spinner: 'fill-gray-700/30'
  }
}

export default {
  name: 'Button-Basic',

  slots: {
    /** Текст на кнопке.
     */
    label: {
      type: String,
      required: false,
      default: ''
    },
    /** Дополнительные элементы.
     */
    children: {
      type: Node,
      required: false
    }
  },

  props: {
    /** Состояние загрузки */
    isLoading: {
      type: Boolean,
      default: false
    },
    /** Размер кнопки.
     *
     * default - стандартный. По-умолчанию.
     *
     * small - маленький.
     */
    size: {
      type: String,
      array: Object.keys(sizes),
      validator: function (value) {
        return Object.keys(sizes).indexOf(value) !== -1
      },
      default: Object.keys(sizes)[0]
    },
    /** Вариант кнопки.
     *
     * default - стандартная кнопка. По-умолчанию.
     *
     * primary - основная кнопка. Только 1 на экране.
     *
     * tertiary - кнопка 3-го уровня
     *
     * link - кнопка в виде ссылки. Переход на другие страницы.
     *
     * destructive - обозначает деструктивное действие - удаление и т.д.
     */
    variant: {
      type: String,
      array: Object.keys(variants),
      validator: function (value) {
        return Object.keys(variants).indexOf(value) !== -1
      },
      default: Object.keys(variants)[0]
    },
    /** Форма кнопки.
     *
     * default - удлиненная, для текста, текст + значок. По-умолчанию.
     *
     * square - квадратная. Отступ внутри одинаковый по 4 сторонам. Для кнопок со значком, без текста.
     */
    shape: {
      type: String,
      array: Object.keys(shapes.default),
      validator: function (value) {
        return Object.keys(shapes.default).indexOf(value) !== -1
      },
      default: Object.keys(shapes.default)[0]
    },
    /** Значок слева от текста.
     * svg, png и т.д.
     */
    leftIcon: {
      type: Node,
      required: false
    },
    /** Значок справа от текста.
     * svg, png и т.д.
     */
    rightIcon: {
      type: Node,
      required: false
    },
    /** Дополнительный класс.
     */
    className: {
      type: String,
      required: false,
      default: ''
    },

    /** Индекс текущего элемента в группе кнопок.
     */
    groupIndex: {
      type: Number,
      required: false,
      default: -1
    },
    /** Кол-во элементов в группе кнопок.
     */
    totalItems: {
      type: Number,
      required: false,
      default: -1
    }
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'inline-flex items-center justify-center focus:outline-none': true,
        [sizes[props.size]]: true,
        [shapes[props.size][props.shape]]: true,
        [variants[props.variant]]: true,
        [props.groupIndex === 0 ? 'rounded-l-lg' : '-ml-px']: true,
        [props.groupIndex !== -1 && props.groupIndex === props.totalItems - 1
          ? 'rounded-r-lg'
          : '']: true,
        [props.groupIndex !== -1 ? 'focus:z-10 hover:z-10' : 'rounded-lg']: true,
        [props.className]: true
      })),
      loaderClasses: computed(() => ({
        'absolute inset-1/3 inset-y-0 animate-spin-slow': true,
        [props.size === 'small' ? 'h-5 w-5' : 'h-6 w-6']: true
      })),
      loaderSpinnerClasses: computed(() => ({
        [loaderFill[props.variant].spinner]: true
      })),
      loaderRingClasses: computed(() => ({
        [loaderFill[props.variant].ring]: true
      })),
      leftIconClasses: computed(() => ({
        [props.size === 'small' ? 'mt-0.5 h-4 w-4' : 'h-5 w-5']: true
      })),
      rightIconClasses: computed(() => ({
        [props.size === 'small' ? 'h-4 w-4' : 'h-5 w-5']: true
      })),
      onClick() {
        emit('click')
      }
    }
  }
}
</script>

<template>
  <button
    :class="classes"
    :disabled="$attrs.disabled || isLoading"
    :title="$attrs.title"
    :aria-label="$attrs.title"
    :type="$attrs.type || 'button'"
    @click="onClick"
  >
    <span class="relative flex items-center gap-2">
      <span :class="leftIconClasses" v-if="$slots.leftIcon">
        <slot name="leftIcon"></slot>
      </span>
      <svg
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        :class="loaderClasses"
        v-if="isLoading"
      >
        <circle cx="22" cy="22" r="19" :class="loaderRingClasses" stroke-width="6" />
        <path
          d="M22 2.85984C22 1.2804 23.2857 -0.0191305 24.8519 0.185615C27.905 0.58477 30.8515 1.62199 33.495 3.24192C36.9544 5.36185 39.7602 8.39714 41.6021 12.0122C43.4441 15.6273 44.2505 19.6813 43.9322 23.7261C43.6889 26.8169 42.7962 29.8103 41.3245 32.515C40.5696 33.9023 38.7625 34.1787 37.4847 33.2503C36.2069 32.3219 35.95 30.5406 36.6407 29.1202C37.5276 27.2966 38.0697 25.3156 38.2301 23.2773C38.4657 20.2841 37.869 17.2841 36.5059 14.6089C35.1428 11.9337 33.0665 9.68753 30.5064 8.11875C28.7632 7.05046 26.8418 6.32462 24.8452 5.97023C23.2901 5.69419 22 4.43929 22 2.85984Z"
          :class="loaderSpinnerClasses"
        />
      </svg>
      <slot name="label"></slot>
      <span :class="rightIconClasses" v-if="$slots.rightIcon">
        <slot name="rightIcon"></slot>
      </span>
    </span>
    <slot name="children"></slot>
  </button>
</template>
