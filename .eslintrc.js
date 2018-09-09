module.exports = {
  'env': {
    'browser': true,
    'jest': true,
    'es6': true,
    'node': true,
  },
  'extends': [
    'airbnb',
    'prettier',
  ],
  'plugins': [
    
  ],
  'rules': {
    
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-underscore-dangle": ["error", { "allow": ["__REDUX_DEVTOOLS_EXTENSION__"] }],
    "linebreak-style": ["error", "windows"],
    "linebreak-style": 0,
    "global-require": 0
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    }
  }
}
// 'prettier',

// 'prettier/prettier': ['error', {
//   'singleQuote': true,
//   'trailingComma': 'es6',
// }],
