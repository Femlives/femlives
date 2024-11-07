/**
 * This is the eslint config for the lint-staged pre-commit hook
 */

import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import customRules from './es-lint-rules/index.mjs'; // Import your custom rule
import nextOnPages from 'eslint-plugin-next-on-pages';

export default [
  { files: ['**/*'] },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,

  {
    plugins: {
      'custom-rules': customRules,
      'next-on-pages': nextOnPages,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'custom-rules/sort-enums': 'error',
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
      'no-process-env': 'error',
      'no-restricted-imports': ['error', '..'],
    },
  },
];
