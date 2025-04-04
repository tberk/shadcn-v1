import antfu from '@antfu/eslint-config'

export default antfu(
  {
    // Configures for antfu's config
    typescript: true,
    vue: true,
    ignores: ['node_modules', 'dist', '.nuxt', '.output'],
  },
  // From the second arguments they are ESLint Flat Configs
  // you can have multiple configs
  {
    rules: {
      // 'no-alert': 'off',
      'no-console': 'off',
      // 'node/prefer-global/process': ['error', 'always'],
    },
  },
)
