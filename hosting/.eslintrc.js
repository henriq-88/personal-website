module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    `plugin:vue/recommended`,
    `@vue/standard`,
    `@vue/typescript`,
  ],
  rules: {
    'array-bracket-newline': [
      `error`,
      `always`,
    ],
    'array-element-newline': [
      `error`,
      `always`,
    ],
    'comma-dangle': [
      `error`,
      {
        arrays: `always`,
        exports: `always`,
        functions: `never`,
        imports: `always`,
        objects: `always`,
      },
    ],
    indent: [
      `error`,
      2,
      {
        ArrayExpression: 1,
      },
    ],
    'newline-per-chained-call': [
      `error`,
      {
        ignoreChainWithDepth: 1,
      },
    ],
    'no-console': process.env.NODE_ENV === `production` ? `warn` : `off`,
    'no-debugger': process.env.NODE_ENV === `production` ? `warn` : `off`,
    'object-curly-newline': [
      `error`,
      `always`,
    ],
    'object-property-newline': `error`,
    quotes: [
      `error`,
      `backtick`,
      {
        avoidEscape: true,
      },
    ],
    semi: [
      `error`,
      `never`,
    ],
    '@typescript-eslint/no-explicit-any': [
      `off`,
      {
        fixToUnknown: false,
        ignoreRestArgs: false,
      },
    ],
    '@typescript-eslint/no-var-requires': 0,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
}
