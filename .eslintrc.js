// .eslintrc.js
require('@bigcommerce/eslint-config/patch');

module.exports = {
  extends: ['@bigcommerce/eslint-config'],
  overrides: [
    {
      files: '*.js',
      rules: {
        'no-console': 'off',
        'no-restricted-syntax': 'off',
        'consistent-return': 'off',
      },
    },
  ],
};
