import { fixupConfigRules, fixupPluginRules } from '@eslint/compat'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import react from 'eslint-plugin-react'
import prettier from 'eslint-plugin-prettier'
import workspaces from 'eslint-plugin-workspaces'
import jest from 'eslint-plugin-jest'
import _import from 'eslint-plugin-import'
import jsxA11Y from 'eslint-plugin-jsx-a11y'
import reactHooks from 'eslint-plugin-react-hooks'
import tsParser from '@typescript-eslint/parser'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
})

export default [
  {
    ignores: ['**/node_modules/', 'coverage', '**/lib', '**/*.d.ts'],
  },
  ...fixupConfigRules(
    compat.extends(
      'prettier',
      'plugin:jsx-a11y/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jest/recommended',
      'plugin:jest/style',
    ),
  ),
  {
    plugins: {
      '@typescript-eslint': typescriptEslint,
      react,
      prettier,
      workspaces,
      jest: fixupPluginRules(jest),
      import: fixupPluginRules(_import),
      'jsx-a11y': fixupPluginRules(jsxA11Y),
      'react-hooks': fixupPluginRules(reactHooks),
    },

    languageOptions: {
      globals: {
        ...jest.environments.globals.globals,
      },

      parser: tsParser,
    },

    rules: {
      'prettier/prettier': 2,
      'react/no-unescaped-entities': 0,
      'workspaces/no-relative-imports': 2,
      'workspaces/require-dependency': 1,
      'import/prefer-default-export': 0,
      'jest/no-disabled-tests': 1,
      'jest/no-focused-tests': 2,
      'jest/no-identical-title': 2,
      'jest/prefer-to-have-length': 1,
      'jest/valid-expect': 2,
      'react/no-array-index-key': 0,

      'import/no-extraneous-dependencies': [
        'error',
        {
          devDependencies: [
            '**/*.spec.tsx',
            '**/*.stories.*',
            'src/utils/story-helpers.tsx',
            'eslint.config.mjs',
          ],
          peerDependencies: true,
        },
      ],

      'import/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
        },
      ],
    },
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
  },
  {
    files: ['src/**/*.stories.{ts|tsx}'],

    rules: {
      'import/extensions': ['error', 'ignorePackages'],
    },
  },
]
