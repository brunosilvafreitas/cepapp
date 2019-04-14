const presets = [
  ['@babel/preset-env', {
    'targets': {
      'node': '10'
    }
  }],
  '@babel/preset-react'
]

const plugins = [
  ['babel-plugin-styled-components', {
    ssr: true,
    displayName: false,
    fileName: false,
    minify: true,
    pure: true
  }]
]

module.exports = { presets, plugins }
