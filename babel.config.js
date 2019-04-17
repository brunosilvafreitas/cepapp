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
  }],
  '@babel/plugin-proposal-export-default-from',
  '@babel/plugin-proposal-export-namespace-from'
]

module.exports = { presets, plugins }
