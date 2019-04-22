import React from 'react'
import { hydrate, render } from 'react-dom'
import App from './App'

if (window.__SSR_DISABLED__) {
  render(<App />, document.getElementById('root'))
} else {
  hydrate(<App />, document.getElementById('root'))
}
