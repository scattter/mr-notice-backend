module.exports = {
    root: true, // 是否开启 eslint。
    "env": {
        "commonjs": true,
        "es2021": true,
        "node": true
    },
    "extends": [
      "eslint:recommended",
      "prettier"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    "plugins": [
        'require-sort',
    ],
    "rules": {
        // 项目导入顺序检测
        "require-sort/require-sort": ["error", {
            // 默认false, 大小写敏感
            "ignoreCase": false,
            // 默认false, 按照导入的大小写排序
            "ignoreDeclarationSort": false,
            // 默认false, 多个导入的时候也会对导入属性排序
            "ignorePropertySort": false,
            // 单个导入和多个导入的排序
            "propertySyntaxSortOrder": ["none", "single", "multiple"]
        }]
    }
}
