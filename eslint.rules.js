export const customEslintRules = {
  'no-unreachable': 'warn',
  '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
  '@typescript-eslint/no-unused-vars': [
    'warn',
    {
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_',
      caughtErrorsIgnorePattern: '^_',
    },
  ],
  'sort-destructure-keys/sort-destructure-keys': ['error', { caseSensitive: false }],
  'typescript-sort-keys/interface': ['error', 'asc', { caseSensitive: false }],
  'typescript-sort-keys/string-enum': ['error', 'asc', { caseSensitive: false }],

  '@typescript-eslint/no-unsafe-call': 'off',
  '@typescript-eslint/no-unsafe-assignment': 'off',
  '@typescript-eslint/no-explicit-any': 'off',
  '@typescript-eslint/no-unsafe-member-access': 'off',
  '@typescript-eslint/no-unsafe-argument': 'off',
  '@typescript-eslint/no-unsafe-return': 'off',
  '@typescript-eslint/prefer-nullish-coalescing': 'off',
}
