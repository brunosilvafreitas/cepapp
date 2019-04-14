import { configure } from '@storybook/react'

const sortFiles = (a, b) => ~a.indexOf('storybook') ? -1 : a.localeCompare(b)

function loadStories() {
  const req = require.context('../src', true, /^(?!.*(?:node_modules|coverage|build|dist|flow-typed)).*stories\.js$/)
  req.keys().sort(sortFiles).forEach(req)
}

configure(loadStories, module)
