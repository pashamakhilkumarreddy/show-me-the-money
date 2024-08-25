module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsdoc/recommended',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'react-refresh',
    'jsx-a11y',
    'import',
    'prettier',
    'filename-rules',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.ts', '.tsx', '.css'],
      },
    },
  },
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': ['warn'],
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['error', { allowAsProps: true }],
    '@typescript-eslint/naming-convention': [
      'warn',
      {
        selector: 'default',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'variable',
        format: ['PascalCase', 'camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'import',
        format: ['PascalCase', 'camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'parameter',
        format: ['camelCase'],
        leadingUnderscore: 'allow',
      },
      {
        selector: 'property',
        format: null,
        leadingUnderscore: 'allow',
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
      },
    ],

    'jsdoc/require-throws': 'error',
    'jsdoc/check-indentation': 'warn',
    'jsdoc/no-blank-blocks': 'warn',
    'jsdoc/require-asterisk-prefix': 'warn',
    'jsdoc/require-description': 'warn',
    'jsdoc/sort-tags': 'warn',
    'jsdoc/check-syntax': 'warn',
    'jsdoc/tag-lines': ['warn', 'never', { startLines: 1 }],
    'jsdoc/require-param': ['warn', { checkDestructuredRoots: false }],
    'jsdoc/require-jsdoc': [
      'warn',
      {
        publicOnly: true,
        require: {
          FunctionDeclaration: true,
          FunctionExpression: true,
          ArrowFunctionExpression: false,
          ClassDeclaration: true,
          ClassExpression: true,
          MethodDefinition: true,
        },
        contexts: ['VariableDeclaration'],
        enableFixer: true,
      },
    ],
    'jsdoc/require-hyphen-before-param-description': 'off',
    'jsdoc/require-returns': 'off',
  },
};
