module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: [
    'react',
    'flowtype'
  ],
  env: {
    mocha: true,
    browser: true,
  },
  rules: {
    'no-console': 0,
    camelcase: 0,
    'global-require': 0,
    'no-underscore-dangle': 0,
    'object-property-newline': 0,
    'flowtype/define-flow-type': 1,
    'flowtype/use-flow-type': 1,
    'flowtype/space-after-type-colon': [2, 'always'],
    'react/sort-comp': [2, {
      order: [
        'type-annotations',
        'static-methods',
        '/^(props|state)$/',
        'lifecycle',
        'everything-else',
        'render'
      ]
    }],
    'react/jsx-filename-extension': [1, {
      extensions: ['.js', '.jsx']
    }],
    'import/no-unresolved': [2, { ignore: ['gatsby-helpers'] } ],
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true
    }],
    'import/prefer-default-export': 0,
    'import/newline-after-import': 0,
  },
  settings: {
    'import/resolver': 'webpack',
  },
};
