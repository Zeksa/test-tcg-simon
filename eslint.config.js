import eslintRecommended from '@eslint/js'
import typescriptPlugin from '@typescript-eslint/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'
import sortDestructureKeysPlugin from 'eslint-plugin-sort-destructure-keys'
import typescriptSortKeysPlugin from 'eslint-plugin-typescript-sort-keys'
import globals from 'globals'
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import { customEslintRules } from '../eslint.rules.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default [
  {
    files: ['src/**/*.{ts,tsx,js,jsx}'],
    ignores: ['dist'],
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': typescriptPlugin,
      'sort-destructure-keys': sortDestructureKeysPlugin,
      'typescript-sort-keys': typescriptSortKeysPlugin,
    },
    rules: {
      ...eslintRecommended.configs.recommended.rules,
      ...typescriptPlugin.configs['recommended-type-checked'].rules,
      ...typescriptPlugin.configs['stylistic-type-checked'].rules,

      ...customEslintRules,
    },
  },
]
