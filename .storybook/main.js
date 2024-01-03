/** @type { import('@storybook/vue3-vite').StorybookConfig } */
const config = {
  stories: ['../src/stories/**/*.mdx', '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-a11y',
    'storybook-addon-pseudo-states',
    'storybook-addon-vue-slots',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-themes',
    'storybook-addon-vue-mdx'
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {}
  },
  docs: {
    autodocs: false,
    defaultName: 'Документация'
  }
}
export default config
