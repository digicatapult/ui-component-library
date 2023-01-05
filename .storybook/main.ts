export default {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  core: {
    builder: 'webpack5'
  },
  framework: '@storybook/react',
  features: {
    babelModeV7: true
  },
  webpackFinal(config) {
    delete config.resolve.extensions
    config.resolve.extensionAlias = {
      '.js': ['.ts', '.js', '.tsx'],
    }
    return config
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false
      }
    }
  }
}
