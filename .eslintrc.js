module.exports = {
  root: true, // 是否开启 eslint。
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:prettier/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 2021,
  },
  plugins: ['require-sort'],
  rules: {
    // 项目导入顺序检测
    'require-sort/require-sort': [
      'error',
      {
        // 默认false, 大小写敏感
        ignoreCase: false,
        // 默认false, 按照导入的大小写排序
        ignoreDeclarationSort: false,
        // 默认false, 多个导入的时候也会对导入属性排序
        ignorePropertySort: false,
        // 单个导入和多个导入的排序
        propertySyntaxSortOrder: ['none', 'single', 'multiple'],
      },
    ],
    'no-unused-vars': 'error', // 开启没有用过的变量检测
    'prettier/prettier': 'error', // 开启规则
  },
}
