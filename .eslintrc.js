module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/no-v-html': 0,
    'vue/no-parsing-error': ['error', {
      'invalid-first-character-of-tag-name': false
    }],
    'no-shadow': 0,
    'linebreak-style': 0,
    'no-param-reassign': ['error', { props: false }],
    'no-useless-return': 2,
    'arrow-parens': 0,
    'max-len': 0,
    'generator-star-spacing': 'off',
    'space-before-function-paren': ['error', 'always'],
    semi: ['error', 'never'],
    'comma-dangle': ['error', 'never'],
    curly: ['error', 'all'],
    eqeqeq: ['error', 'always'],
    'no-empty-function': 'error',
    'no-eq-null': 'error',
    'no-multi-spaces': 'error',
    'no-loop-func': 'error',
    'no-undefined': 'error',
    'no-use-before-define': ['error', { functions: true, classes: true }],
    'array-bracket-spacing': ['error', 'never'],
    'array-element-newline': ['error', 'consistent'],
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs'],
    'no-multi-assign': 0,
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'computed-property-spacing': ['error', 'never'],
    indent: ['error', 2, {
      SwitchCase: 1, VariableDeclarator: 'first', MemberExpression: 1, ObjectExpression: 1, ImportDeclaration: 1
    }],
    'import/prefer-default-export': 'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
