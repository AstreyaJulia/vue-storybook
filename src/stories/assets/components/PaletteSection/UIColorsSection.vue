<script>
import { luminance } from '@/utils/colorUtils.js'
import TypographyElement from '@/components/ui/TypographyElement.vue'
import themeConfig from '../../../../../configs/themeConfig.js'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../../../../tailwind.config.js'
const fullConfig = resolveConfig(tailwindConfig)
const colors = fullConfig.theme.colors

export default {
  name: 'UI-Colors-Section',
  computed: {
    themeConfig() {
      return themeConfig
    }
  },
  methods: { luminance },
  components: { TypographyElement },

  setup() {
    return {
      colors
    }
  }
}
</script>

<template>
  <div class="pt-10 w-full flex flex-col gap-5">
    <TypographyElement variant="h3"> Светлая тема </TypographyElement>
    <div class="grid grid-cols-6 gap-8 bg-white p-5">
      <div
        v-for="color in [
          ...themeConfig.colors.main,
          ...themeConfig.colors.states,
          ...themeConfig.colors.secondary
        ].map((c) => c)"
        :key="color"
        class="flex flex-col gap-3"
      >
        <TypographyElement variant="text-main" text-color="text-gray-700">
          <span class="capitalize"> {{ color.name }} </span> (<span class="capitalize">
            {{ color.color.toString() }} </span
          >)
        </TypographyElement>
        <div
          v-for="variant in Object.keys(color.ui.light)"
          :key="variant"
          class="h-16 w-28 flex items-center rounded-md shadow"
          :style="{
            backgroundColor:
              color.ui.light[variant] === 'white'
                ? '#ffffff'
                : colors[color.color][color.ui.light[variant]]
          }"
        >
          <div class="flex flex-col p-3">
            <TypographyElement
              variant="text-main"
              :class="'text-sm'"
              :text-color="
                luminance(
                  color.ui.light[variant] === 'white'
                    ? '#ffffff'
                    : colors[color.color][color.ui.light[variant]].toString()
                ).toFixed(2) >= 0.25
                  ? 'text-gray-900'
                  : 'text-gray-50'
              "
            >
              {{ variant }}
            </TypographyElement>
            <TypographyElement
              variant="text-main"
              :class="'text-sm'"
              :text-color="
                luminance(
                  color.ui.light[variant] === 'white'
                    ? '#ffffff'
                    : colors[color.color][color.ui.light[variant]].toString()
                ).toFixed(2) >= 0.25
                  ? 'text-gray-900'
                  : 'text-gray-50'
              "
            >
              {{
                color.name +
                '-' +
                (color.ui.light[variant] === 'white' ? 'white' : color.ui.light[variant])
              }}
            </TypographyElement>
          </div>
        </div>
      </div>
    </div>
    <TypographyElement variant="h3"> Тёмная тема </TypographyElement>
    <div class="grid grid-cols-6 gap-8 bg-black p-5">
      <div
        v-for="color in [
          ...themeConfig.colors.main,
          ...themeConfig.colors.states,
          ...themeConfig.colors.secondary
        ].map((c) => c)"
        :key="color"
        class="flex flex-col gap-3"
      >
        <TypographyElement variant="text-main" text-color="text-gray-300">
          <span class="capitalize"> {{ color.name }} </span> (<span class="capitalize">
            {{ color.color.toString() }} </span
          >)
        </TypographyElement>
        <div
          v-for="variant in Object.keys(color.ui.dark)"
          :key="variant"
          class="h-16 w-28 flex items-center rounded-md shadow"
          :style="{
            backgroundColor:
              color.ui.dark[variant] === 'white'
                ? '#ffffff'
                : colors[color.color][color.ui.dark[variant]]
          }"
        >
          <div class="flex flex-col p-3">
            <TypographyElement
              variant="text-main"
              :class="'text-sm'"
              :text-color="
                luminance(
                  color.ui.dark[variant] === 'white'
                    ? '#ffffff'
                    : colors[color.color][color.ui.dark[variant]].toString()
                ).toFixed(2) >= 0.25
                  ? 'text-gray-900'
                  : 'text-gray-50'
              "
            >
              {{ variant }}
            </TypographyElement>
            <TypographyElement
              variant="text-main"
              :class="'text-sm'"
              :text-color="
                luminance(
                  color.ui.dark[variant] === 'white'
                    ? '#ffffff'
                    : colors[color.color][color.ui.dark[variant]].toString()
                ).toFixed(2) >= 0.25
                  ? 'text-gray-900'
                  : 'text-gray-50'
              "
            >
              {{
                color.name +
                '-' +
                (color.ui.dark[variant] === 'white' ? 'white' : color.ui.dark[variant])
              }}
            </TypographyElement>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
