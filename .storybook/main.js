/** @type { import('@storybook/react-webpack5').StorybookConfig } */
const config = {
  stories: ["../src/stories/**/*.mdx", "../src/stories/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-coverage',
      options: {
        istanbul: {
          include: ['**/components/**'],
          excludeNodeModules: true,
        },
      },
    },
  ],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
