import antfu from '@antfu/eslint-config';

export default antfu(
  {
    formatters: true,
    react: true,
    typescript: {
      tsconfigPath: 'tsconfig.json',
    },
    stylistic: {
      indent: 2,
      quotes: 'single',
      semi: true,
    },
  },
  {
    rules: {
      'style/arrow-parens': ['error', 'always'], // 箭头函数参数始终添加括号
    },
  },
);
