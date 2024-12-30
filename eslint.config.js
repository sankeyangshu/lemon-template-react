import { defineConfig } from '@sankeyangshu/eslint-config';

export default defineConfig(
  {
    react: true,
    unocss: true,
  },
  {
    rules: {
      // '@typescript-eslint/ban-types': 'off',
      // '@typescript-eslint/no-explicit-any': 'off',
      // '@typescript-eslint/promise-function-async': 'off',
      // 'unocss/order-attributify': 'off',
    },
  }
);
