<script>
import { computed, reactive } from 'vue'

const sizes = {
  default: {
    default: 'px-2.5 py-0.5 text-sm leading-5',
    small: 'px-2 py-0.5 text-xs leading-4',
    large: 'px-3.5 py-1 text-base leading-6'
  },
  square: {
    default: 'p-0.5 text-sm leading-5',
    small: 'p-0.5 text-xs leading-4',
    large: 'p-1 text-base leading-6'
  }
}

const colors = {
  soft: {
    brand: 'bg-brand-400/20 text-brand-800 dark:text-brand-100 border-brand-400/20',
    accent: 'bg-accent-400/20 text-accent-800 dark:text-accent-100 border-accent-400/20',
    error: 'bg-error-400/20 text-error-800 dark:text-error-100 border-error-400/20',
    warning: 'bg-warning-400/20 text-warning-800 dark:text-warning-100 border-warning-400/20',
    success: 'bg-success-400/20 text-success-800 dark:text-success-100 border-success-400/20',
    info: 'bg-info-400/20 text-info-800 dark:text-info-100 border-info-400/20',
    slate: 'bg-slate-400/20 text-slate-800 dark:text-slate-100 border-slate-400/20',
    gray: 'bg-gray-400/20 text-gray-800 dark:text-gray-100 border-gray-400/20',
    zinc: 'bg-zinc-400/20 text-zinc-800 dark:text-zinc-100 border-zinc-400/20',
    neutral: 'bg-neutral-400/20 text-neutral-800 dark:text-neutral-100 border-neutral-400/20',
    stone: 'bg-stone-400/20 text-stone-800 dark:text-stone-100 border-stone-400/20',
    red: 'bg-red-400/20 text-red-800 dark:text-red-100 border-red-400/20',
    orange: 'bg-orange-400/20 text-orange-800 dark:text-orange-100 border-orange-400/20',
    amber: 'bg-amber-400/20 text-amber-800 dark:text-amber-100 border-amber-400/20',
    yellow: 'bg-yellow-400/20 text-yellow-800 dark:text-yellow-100 border-yellow-400/20',
    lime: 'bg-lime-400/20 text-lime-800 dark:text-lime-100 border-lime-400/20',
    green: 'bg-green-400/20 text-green-800 dark:text-green-100 border-green-400/20',
    emerald: 'bg-emerald-400/20 text-emerald-800 dark:text-emerald-100 border-emerald-400/20',
    teal: 'bg-teal-400/20 text-teal-800 dark:text-teal-100 border-teal-400/20',
    cyan: 'bg-cyan-400/20 text-cyan-800 dark:text-cyan-100 border-cyan-400/20',
    sky: 'bg-sky-400/20 text-sky-800 dark:text-sky-100 border-sky-400/20',
    blue: 'bg-blue-400/20 text-blue-800 dark:text-blue-100 border-blue-400/20',
    indigo: 'bg-indigo-400/20 text-indigo-800 dark:text-indigo-100 border-indigo-400/20',
    violet: 'bg-violet-400/20 text-violet-800 dark:text-violet-100 border-violet-400/20',
    purple: 'bg-purple-400/20 text-purple-800 dark:text-purple-100 border-purple-400/20',
    fuchsia: 'bg-fuchsia-400/20 text-fuchsia-800 dark:text-fuchsia-100 border-fuchsia-400/20',
    pink: 'bg-pink-400/20 text-pink-800 dark:text-pink-100 border-pink-400/20',
    rose: 'bg-rose-400/20 text-rose-800 dark:text-rose-100 border-rose-400/20'
  },
  solid: {
    brand: 'bg-brand-600 dark:bg-brand-100 text-brand-50 text-brand-50 dark:text-brand-900 border-brand-600',
    accent: 'bg-accent-600 dark:bg-accent-100 text-accent-50 text-accent-50 dark:text-accent-900 border-accent-600',
    error: 'bg-error-600 dark:bg-error-100 text-error-50 text-error-50 dark:text-error-900 border-error-600',
    warning:
      'bg-warning-600 dark:bg-warning-100 text-warning-50 text-warning-50 dark:text-warning-900 border-warning-600',
    success:
      'bg-success-600 dark:bg-success-100 text-success-50 text-success-50 dark:text-success-900 border-success-600',
    info: 'bg-info-600 dark:bg-info-100 text-info-50 text-info-50 dark:text-info-900 border-info-600',
    slate: 'bg-slate-600 dark:bg-slate-100 text-slate-50 text-slate-50 dark:text-slate-900 border-slate-600',
    gray: 'bg-gray-600 dark:bg-gray-100 text-gray-50 text-gray-50 dark:text-gray-900 border-gray-600',
    zinc: 'bg-zinc-600 dark:bg-zinc-100 text-zinc-50 text-zinc-50 dark:text-zinc-900 border-zinc-600',
    neutral:
      'bg-neutral-600 dark:bg-neutral-100 text-neutral-50 text-neutral-50 dark:text-neutral-900 border-neutral-600',
    stone: 'bg-stone-600 dark:bg-stone-100 text-stone-50 text-stone-50 dark:text-stone-900 border-stone-600',
    red: 'bg-red-600 dark:bg-red-100 text-red-50 text-red-50 dark:text-red-900 border-red-600',
    orange: 'bg-orange-600 dark:bg-orange-100 text-orange-50 text-orange-50 dark:text-orange-900 border-orange-600',
    amber: 'bg-amber-600 dark:bg-amber-100 text-amber-50 text-amber-50 dark:text-amber-900 border-amber-600',
    yellow: 'bg-yellow-600 dark:bg-yellow-100 text-yellow-50 text-yellow-50 dark:text-yellow-900 border-yellow-600',
    lime: 'bg-lime-600 dark:bg-lime-100 text-lime-50 text-lime-50 dark:text-lime-900 border-lime-600',
    green: 'bg-green-600 dark:bg-green-100 text-green-50 text-green-50 dark:text-green-900 border-green-600',
    emerald:
      'bg-emerald-600 dark:bg-emerald-100 text-emerald-50 text-emerald-50 dark:text-emerald-900 border-emerald-600',
    teal: 'bg-teal-600 dark:bg-teal-100 text-teal-50 text-teal-50 dark:text-teal-900 border-teal-600',
    cyan: 'bg-cyan-600 dark:bg-cyan-100 text-cyan-50 text-cyan-50 dark:text-cyan-900 border-cyan-600',
    sky: 'bg-sky-600 dark:bg-sky-100 text-sky-50 text-sky-50 dark:text-sky-900 border-sky-600',
    blue: 'bg-blue-600 dark:bg-blue-100 text-blue-50 text-blue-50 dark:text-blue-900 border-blue-600',
    indigo: 'bg-indigo-600 dark:bg-indigo-100 text-indigo-50 text-indigo-50 dark:text-indigo-900 border-indigo-600',
    violet: 'bg-violet-600 dark:bg-violet-100 text-violet-50 text-violet-50 dark:text-violet-900 border-violet-600',
    purple: 'bg-purple-600 dark:bg-purple-100 text-purple-50 text-purple-50 dark:text-purple-900 border-purple-600',
    fuchsia:
      'bg-fuchsia-600 dark:bg-fuchsia-100 text-fuchsia-50 text-fuchsia-50 dark:text-fuchsia-900 border-fuchsia-600',
    pink: 'bg-pink-600 dark:bg-pink-100 text-pink-50 text-pink-50 dark:text-pink-900 border-pink-600',
    rose: 'bg-rose-600 dark:bg-rose-100 text-rose-50 text-rose-50 dark:text-rose-900 border-rose-600'
  },
  transparent: {
    brand: 'bg-transparent text-brand-700 dark:text-brand-100',
    accent: 'bg-transparent text-accent-700 dark:text-accent-100',
    error: 'bg-transparent text-error-700 dark:text-error-100',
    warning: 'bg-transparent text-warning-700 dark:text-warning-100',
    success: 'bg-transparent text-success-700 dark:text-success-100',
    info: 'bg-transparent text-info-700 dark:text-info-100',
    slate: 'bg-transparent text-slate-700 dark:text-slate-100',
    gray: 'bg-transparent text-gray-700 dark:text-gray-100',
    zinc: 'bg-transparent text-zinc-700 dark:text-zinc-100',
    neutral: 'bg-transparent text-neutral-700 dark:text-neutral-100',
    stone: 'bg-transparent text-stone-700 dark:text-stone-100',
    red: 'bg-transparent text-red-700 dark:text-red-100',
    orange: 'bg-transparent text-orange-700 dark:text-orange-100',
    amber: 'bg-transparent text-amber-700 dark:text-amber-100',
    yellow: 'bg-transparent text-yellow-700 dark:text-yellow-100',
    lime: 'bg-transparent text-lime-700 dark:text-lime-100',
    green: 'bg-transparent text-green-700 dark:text-green-100',
    emerald: 'bg-transparent text-emerald-700 dark:text-emerald-100',
    teal: 'bg-transparent text-teal-700 dark:text-teal-100',
    cyan: 'bg-transparent text-cyan-700 dark:text-cyan-100',
    sky: 'bg-transparent text-sky-700 dark:text-sky-100',
    blue: 'bg-transparent text-blue-700 dark:text-blue-100',
    indigo: 'bg-transparent text-indigo-700 dark:text-indigo-100',
    violet: 'bg-transparent text-violet-700 dark:text-violet-100',
    purple: 'bg-transparent text-purple-700 dark:text-purple-100',
    fuchsia: 'bg-transparent text-fuchsia-700 dark:text-fuchsia-100',
    pink: 'bg-transparent text-pink-700 dark:text-pink-100',
    rose: 'bg-transparent text-rose-700 dark:text-rose-100'
  }
}

const shapes = {
  default: 'rounded-full',
  rounded: 'rounded-md',
  'default-square': 'rounded-full',
  'rounded-square': 'rounded-md'
}

export default {
  name: 'Badge-Basic',

  props: {
    /** **Размер бейджа**  */
    size: {
      type: String,
      array: Object.keys(sizes['default']),
      validator: function (value) {
        return Object.keys(sizes['default']).indexOf(value) !== -1
      },
      default: Object.keys(sizes['default'])[0]
    },
    /**  **Вариант дизайна**
     *
     * `transparent` - прозрачный фон, темный текст
     *
     * `soft` - светлый фон, темный текст
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
    /** **Цвет бейджа** */
    color: {
      type: String,
      array: Object.keys(colors['soft']),
      validator: function (value) {
        return Object.keys(colors['soft']).indexOf(value) !== -1
      },
      default: Object.keys(colors['soft'])[0]
    },
    /** **Форма бейджа**
     *
     * `default` - круглый. По-умолчанию.
     *
     * `rounded` - со скругленными углами.
     *
     * `default-square` - круглый, отступ внутри одинаковый по 4 сторонам, для квадратной формы бейджа (без текста, только значок).
     *
     * `rounded-square` - со скругленными углами, отступ внутри одинаковый по 4 сторонам, для квадратной формы бейджа (без текста, только значок).
     */
    shape: {
      type: String,
      array: Object.keys(shapes),
      validator: function (value) {
        return Object.keys(shapes).indexOf(value) !== -1
      },
      default: Object.keys(shapes)[0]
    }
  },

  setup(props) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        'inline-flex items-center justify-center font-medium border': true,
        [props.variant === 'solid' || props.variant === 'soft' ? 'shadow-sm dark:shadow-none' : '']:
          true,
        [props.shape.includes('square') ? sizes.square[props.size] : sizes.default[props.size]]:
          true,
        [colors[props.variant][props.color]]: true,
        [shapes[props.shape]]: true
      }))
    }
  }
}
</script>

<template>
  <span :class="classes">
    <slot></slot>
  </span>
</template>
