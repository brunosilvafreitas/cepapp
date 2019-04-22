import React from 'react'
import { renderToString } from 'react-dom/server'
import { ServerStyleSheet } from 'styled-components'
import { StaticRouter } from 'react-router'
import template from './templates'
import Routes from '../app/Routes'

const render = async (req, res) => {
  if (req.url.includes('ssr=off')) {
    const html = template({
      ssr: false
    })

    const page = renderToString(html)
    return res.send(page)
  }

  const context = {}

  const App = (
    <StaticRouter location={req.url} context={context}>
      <Routes />
    </StaticRouter>
  )

  const sheet = new ServerStyleSheet()
  const content = renderToString(sheet.collectStyles(App))
  const styles = sheet.getStyleElement()

  const html = template({
    ssr: true,
    content,
    styles
  })

  const page = renderToString(html)
  res.send(page)
}

export default render
