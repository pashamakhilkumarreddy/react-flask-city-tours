module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/forbid-prop-types': 'off',
    'react/state-in-constructor': 'off',
    'react/jsx-filename-extension': 'off',
    'react/require-default-props': 'off',
    'object-curly-newline': [
      'error',
      {
        ImportDeclaration: 'never',
        ExportDeclaration: 'never',
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['info', 'warn', 'error'],
      },
    ],
    quotes: ['error', 'single'],
  },
};
