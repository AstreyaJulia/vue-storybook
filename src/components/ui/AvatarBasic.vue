<script>
import { reactive, computed } from 'vue'

/** Размеры аватаров
 * @type {{12: string, 24: string, 14: string, 36: string, 16: string, 28: string, 4: string, 6: string, 8: string, 40: string, 20: string, 10: string, 32: string}}
 */
const sizes = {
  4: 'h-4 w-4 text-[9px] focus:ring-2',
  6: 'h-6 w-6 text-xs font-medium focus:ring-2',
  8: 'h-8 w-8 text-sm font-medium focus:ring-2',
  10: 'h-10 w-10 text-base font-medium focus:ring-2',
  12: 'h-12 w-12 text-xl font-medium focus:ring-[3px]',
  14: 'h-14 w-14 text-2xl font-medium focus:ring-[3px]',
  16: 'h-16 w-16 text-3xl font-medium focus:ring-[3px]',
  20: 'h-20 w-20 text-4xl font-medium focus:ring-[3px]',
  24: 'h-24 w-24 text-5xl font-medium focus:ring-4',
  28: 'h-28 w-28 text-6xl font-medium focus:ring-4',
  32: 'h-32 w-32 text-6xl font-medium focus:ring-4',
  36: 'h-36 w-36 text-7xl font-medium focus:ring-4',
  40: 'h-40 w-40 text-7xl font-medium focus:ring-4'
}

const imageSizes = {
  4: '16',
  6: '24',
  8: '32',
  10: '40',
  12: '48',
  14: '56',
  16: '64',
  20: '80',
  24: '96',
  28: '112',
  32: '128',
  36: '144',
  40: '160'
}

/** Цвета и варианты аватаров
 * @type {{solid: {sky: string, pink: string, green: string, violet: string, teal: string, amber: string, error: string, accent: string, cyan: string, red: string, orange: string, gray: string, blue: string, success: string, warning: string, rose: string, indigo: string, brand: string, slate: string, info: string}, white: {sky: string, pink: string, green: string, violet: string, teal: string, amber: string, error: string, accent: string, cyan: string, red: string, orange: string, gray: string, blue: string, success: string, warning: string, rose: string, indigo: string, brand: string, slate: string, info: string}, soft: {sky: string, pink: string, green: string, violet: string, teal: string, amber: string, error: string, accent: string, cyan: string, red: string, orange: string, gray: string, blue: string, success: string, warning: string, rose: string, indigo: string, brand: string, slate: string, info: string}}}
 */
const colors = {
  soft: {
    brand: 'bg-brand-100 text-brand-700 fill-brand-700 focus:ring-brand-300/50',
    accent: 'bg-accent-100 text-accent-700 fill-accent-700 focus:ring-accent-300/50',
    error: 'bg-error-100 text-error-700 fill-error-700 focus:ring-error-300/50',
    warning: 'bg-warning-100 text-warning-700 fill-warning-700 focus:ring-warning-300/50',
    success: 'bg-success-100 text-success-700 fill-success-700 focus:ring-success-300/50',
    info: 'bg-info-100 text-info-700 fill-info-700 focus:ring-info-300/50',

    gray: 'bg-gray-100 text-gray-700 fill-gray-700 focus:ring-gray-300/50',
    blue: 'bg-blue-100 text-blue-700 fill-blue-700 focus:ring-blue-300/50',
    teal: 'bg-teal-100 text-teal-700 fill-teal-700 focus:ring-teal-300/50',
    violet: 'bg-violet-100 text-violet-700 fill-violet-700 focus:ring-violet-300/50',
    red: 'bg-error-100 text-error-700 fill-error-700 focus:ring-error-300/50',
    amber: 'bg-amber-100 text-amber-700 fill-amber-700 focus:ring-amber-300/50',
    green: 'bg-green-100 text-green-700 fill-green-700 focus:ring-green-300/50',
    slate: 'bg-slate-100 text-slate-600 fill-slate-600 focus:ring-slate-300/50',
    cyan: 'bg-cyan-100 text-cyan-700 fill-cyan-700 focus:ring-cyan-300/50',
    sky: 'bg-sky-100 text-sky-700 fill-sky-700 focus:ring-sky-300/50',
    indigo: 'bg-indigo-100 text-indigo-700 fill-indigo-700 focus:ring-indigo-300/50',
    pink: 'bg-pink-100 text-pink-700 fill-pink-700 focus:ring-pink-300/50',
    rose: 'bg-rose-100 text-rose-700 fill-rose-700 focus:ring-rose-300/50',
    orange: 'bg-orange-100 text-orange-700 fill-orange-700 focus:ring-orange-300/50'
  },
  white: {
    brand: 'bg-white/80 text-brand-50 fill-brand-50 focus:ring-brand-300/50',
    accent: 'bg-white/80 text-accent-50 fill-accent-50 focus:ring-accent-300/50',
    error: 'bg-white/80 text-error-50 fill-error-50 focus:ring-error-300/50',
    warning: 'bg-white/80 text-warning-50 fill-warning-50 focus:ring-warning-300/50',
    success: 'bg-white/80 text-success-50 fill-success-50 focus:ring-success-300/50',
    info: 'bg-white/80 text-info-50 fill-info-50 focus:ring-info-300/50',

    gray: 'bg-white/80 text-gray-50 fill-gray-50 focus:ring-gray-300/50',
    blue: 'bg-white/80 text-blue-50 fill-blue-50 focus:ring-blue-300/50',
    teal: 'bg-white/80 text-teal-50 fill-teal-50 focus:ring-teal-300/50',
    violet: 'bg-white/80 text-violet-50 fill-violet-50 focus:ring-violet-300/50',
    red: 'bg-white/80 text-error-50 fill-error-50 focus:ring-error-300/50',
    amber: 'bg-white/80 text-amber-50 fill-amber-50 focus:ring-amber-300/50',
    green: 'bg-white/80 text-green-50 fill-green-50 focus:ring-green-300/50',
    slate: 'bg-white/80 text-white fill-white focus:ring-slate-300/50',
    cyan: 'bg-white/80 text-cyan-50 fill-cyan-50 focus:ring-cyan-300/50',
    sky: 'bg-white/80 text-sky-50 fill-sky-50 focus:ring-sky-300/50',
    indigo: 'bg-white/80 text-indigo-50 fill-indigo-50 focus:ring-indigo-300/50',
    pink: 'bg-white/80 text-pink-50 fill-pink-50 focus:ring-pink-300/50',
    rose: 'bg-white/80 text-rose-50 fill-rose-50 focus:ring-rose-300/50',
    orange: 'bg-white/80 text-orange-50 fill-orange-50 focus:ring-orange-300/50'
  },
  solid: {
    brand: 'bg-brand-600 text-brand-50 fill-brand-50 focus:ring-brand-300/50',
    accent: 'bg-accent-600 text-accent-50 fill-accent-50 focus:ring-accent-300/50',
    error: 'bg-error-600 text-error-50 fill-error-50 focus:ring-error-300/50',
    warning: 'bg-warning-600 text-warning-50 fill-warning-50 focus:ring-warning-300/50',
    success: 'bg-success-600 text-success-50 fill-success-50 focus:ring-success-300/50',
    info: 'bg-info-600 text-info-50 fill-info-50 focus:ring-info-300/50',

    gray: 'bg-gray-600 text-gray-50 fill-gray-50 focus:ring-gray-300/50',
    blue: 'bg-blue-600 text-blue-50 fill-blue-50 focus:ring-blue-300/50',
    teal: 'bg-teal-500 text-teal-50 fill-teal-50 focus:ring-teal-300/50',
    violet: 'bg-violet-600 text-violet-50 fill-violet-50 focus:ring-violet-300/50',
    red: 'bg-error-600 text-error-50 fill-error-50 focus:ring-error-300/50',
    amber: 'bg-amber-600 text-amber-50 fill-amber-50 focus:ring-amber-300/50',
    green: 'bg-green-600 text-green-50 fill-green-50 focus:ring-green-300/50',
    slate: 'bg-slate-600 text-white fill-white focus:ring-slate-300/50',
    cyan: 'bg-cyan-600 text-cyan-50 fill-cyan-50 focus:ring-cyan-300/50',
    sky: 'bg-sky-600 text-sky-50 fill-sky-50 focus:ring-sky-300/50',
    indigo: 'bg-indigo-600 text-indigo-50 fill-indigo-50 focus:ring-indigo-300/50',
    pink: 'bg-pink-600 text-pink-50 fill-pink-50 focus:ring-pink-300/50',
    rose: 'bg-rose-600 text-rose-50 fill-rose-50 focus:ring-rose-300/50',
    orange: 'bg-orange-600 text-orange-50 fill-orange-50 focus:ring-orange-300/50'
  }
}

/** Формы аватаров
 * @type {{default: string, rounded: string}}
 */
const shapes = {
  default: 'rounded-full',
  rounded: 'rounded-lg'
}

/** Цвета статусов аватаров
 * @type {{sky: string, pink: string, green: string, violet: string, teal: string, amber: string, error: string, accent: string, cyan: string, red: string, orange: string, gray: string, blue: string, success: string, warning: string, rose: string, indigo: string, brand: string, slate: string, info: string}}
 */
const statusColors = {
  brand: 'bg-brand-500',
  accent: 'bg-accent-500',
  error: 'bg-error-500',
  warning: 'bg-warning-500',
  success: 'bg-success-500',
  info: 'bg-info-500',
  gray: 'bg-gray-500',
  blue: 'bg-blue-500',
  teal: 'bg-teal-500',
  violet: 'bg-violet-500',
  red: 'bg-error-500',
  amber: 'bg-amber-500',
  green: 'bg-green-500',
  slate: 'bg-slate-400',
  cyan: 'bg-cyan-500',
  sky: 'bg-sky-500',
  indigo: 'bg-indigo-500',
  pink: 'bg-pink-500',
  rose: 'bg-rose-500',
  orange: 'bg-orange-500'
}

/** Размеры статуса для аватара
 * в 4 раза меньше размера аватара
 * @type {{12: string, 24: string, 14: string, 36: string, 16: string, 28: string, 4: string, 6: string, 8: string, 40: string, 20: string, 10: string, 32: string}}
 */
const statusSizes = {
  4: 'h-1.5 w-1.5 border border-white',
  6: 'h-1.5 w-1.5 border border-white',
  8: 'h-2 w-2 border border-white',
  10: 'h-2.5 w-2.5 border border-white',
  12: 'h-4 w-4 border-2 border-white',
  14: 'h-4 w-4 border-2 border-white',
  16: 'h-4 w-4 border-2 border-white',
  20: 'h-5 w-5 border-[3px] border-white',
  24: 'h-6 w-6 border-[3px] border-white',
  28: 'h-7 w-7 border-[3px] border-white',
  32: 'h-8 w-8 border-[3px] border-white',
  36: 'h-9 w-9 border-4 border-white',
  40: 'h-10 w-10 border-4 border-white'
}

export default {
  name: 'Avatar-Basic',

  slots: ['children', 'icon'],
  props: {
    /** **Текст аватара** */
    label: {
      type: String,
      default: null
    },
    /** **Размер аватара**  */
    size: {
      type: String,
      array: Object.keys(sizes),
      validator: function (value) {
        return Object.keys(sizes).indexOf(value) !== -1
      },
      default: Object.keys(sizes)[3]
    },
    /** **Изображение** */
    image: {
      type: String,
      required: false,
      default: null
    },
    /** **Цвет аватара** */
    color: {
      type: String,
      array: Object.keys(colors['soft']),
      validator: function (value) {
        return Object.keys(colors['soft']).indexOf(value) !== -1
      },
      default: Object.keys(colors['soft'])[0]
    },
    /**  **Вариант дизайна**
     *
     * `soft` - светлый фон, темный текст
     *
     * `white` - полупрозрачный белый фон, просвечивает подложку, темный текст. Для использования поверх темных элементов, например, внутри бейджей.
     *
     * `solid` - темный фон, светлый текст.
     */
    variant: {
      type: String,
      array: Object.keys(colors),
      validator: function (value) {
        return Object.keys(colors).indexOf(value) !== -1
      },
      default: Object.keys(colors)[0]
    },
    /** **Форма аватара**
     *
     *   default - круглый
     *
     *   rounded - со скругленными углами
     */
    shape: {
      type: String,
      array: Object.keys(shapes),
      validator: function (value) {
        return Object.keys(shapes).indexOf(value) !== -1
      },
      default: Object.keys(shapes)[0]
    },
    /** **Цвет статуса аватара** */
    statusColor: {
      type: String,
      array: Object.keys(statusColors),
      validator: function (value) {
        return Object.keys(statusColors).indexOf(value) !== -1
      },
      default: null
    },
    /** **Состояние загрузки** */
    isLoading: {
      type: Boolean,
      default: false
    },
    /** **Дополнительный класс** */
    className: {
      type: String,
      required: false,
      default: ''
    }
  },

  setup(props) {
    props = reactive(props)

    const statusShapeSize = {
      4: props.shape === 'rounded' ? '-bottom-0.5 -right-0.5' : 'bottom-0 right-0',
      6: props.shape === 'rounded' ? '-bottom-0.5 -right-0.5' : 'bottom-0 right-0',
      8: props.shape === 'rounded' ? '-bottom-0.5 -right-0.5' : 'bottom-0 right-0',
      10: props.shape === 'rounded' ? '-bottom-0.5 -right-0.5' : 'bottom-0 right-0',
      12: props.shape === 'rounded' ? '-bottom-1 -right-1' : 'bottom-0 right-0',
      14: props.shape === 'rounded' ? '-bottom-1 -right-1' : 'bottom-0 right-0',
      16: props.shape === 'rounded' ? '-bottom-1 -right-1' : 'bottom-0 right-0',
      20: props.shape === 'rounded' ? '-bottom-1 -right-1' : 'bottom-0 right-0',
      24: props.shape === 'rounded' ? '-bottom-1 -right-1' : 'bottom-0 right-0',
      28: props.shape === 'rounded' ? '-bottom-1 -right-1' : 'bottom-0 right-0',
      32: props.shape === 'rounded' ? '-bottom-1.5 -right-1.5' : 'bottom-0 right-0',
      36: props.shape === 'rounded' ? '-bottom-1.5 -right-1.5' : 'bottom-0 right-0',
      40: props.shape === 'rounded' ? '-bottom-1.5 -right-1.5' : 'bottom-0 right-0'
    }

    return {
      loadingAvatar: computed(() => ({
        'flex-shrink-0 inline-flex items-center justify-center bg-gray-200 animate-pulse': true,
        [shapes[props.shape]]: true,
        [sizes[props.size]]: true
      })),
      loadingLabel: computed(() => ({
        'font-medium leading-none d-flex items-center justify-center text-gray-700 fill-gray-700': true,
        [sizes[props.size]]: true
      })),
      notLoadingAvatar: computed(() => ({
        'relative items-center justify-center flex': true,
        [shapes[props.shape]]: true,
        [sizes[props.size]]: true,
        [colors[props.variant][props.color]]: true,
        [props.className]: true
      })),
      notLoadingImage: computed(() => ({
        'shrink-0': true,
        [shapes[props.shape]]: true
      })),
      notLoadingStatus: computed(() => ({
        'rounded-full absolute shrink-0 z-10': true,
        [statusColors[props.statusColor]]: true,
        [statusSizes[props.size]]: true,
        [statusShapeSize[props.size]]: true
      })),
      imgSize: computed(() => imageSizes[props.size])
    }
  }
}
</script>

<template>
  <span v-if="isLoading" :class="loadingAvatar">
    <span :class="loadingLabel"></span>
  </span>

  <button v-else :class="notLoadingAvatar" :title="$attrs.title">
    <img
      v-if="image"
      :src="image"
      :alt="$attrs.title"
      :class="notLoadingImage"
      :title="$attrs.title"
      :width="imgSize"
      :height="imgSize"
    />
    {{ !image ? label : null }}
    <slot name="icon" v-if="!label"></slot>
    <slot name="children"></slot>
    <span v-if="statusColor" :class="notLoadingStatus"></span>
  </button>
</template>
