import vue from 'eslint-plugin-vue'
import ts from '@typescript-eslint/eslint-plugin'
import prettier from '@vue/eslint-config-prettier'
import vueParser from 'vue-eslint-parser'

export default [
  {
    ignores: ['node_modules', 'dist', '.history', '.vscode']
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        parser: '@typescript-eslint/parser'
      }
    },
    plugins: { vue, '@typescript-eslint': ts },
    rules: {
      'vue/multi-word-component-names': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/html-self-closing': ['error', { html: { void: 'never' } }]
    }
  },
  prettier
]
