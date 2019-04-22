import React from 'react'

const Html = ({
  ssr = false,
  content,
  styles
}) => {
  return (
    <html lang='pt-br'>
      <head>
        <title>CEP App</title>
        <meta name='viewport' content='initial-scale=1.0,width=device-width' />
        <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
        <meta name='description' content='CEP App' />
        <script src='http://js.api.here.com/v3/3.0/mapsjs-core.js' type='text/javascript' charSet='utf-8' />
        <script src='http://js.api.here.com/v3/3.0/mapsjs-service.js' type='text/javascript' charSet='utf-8' />
        <script src='http://js.api.here.com/v3/3.0/mapsjs-ui.js' type='text/javascript' charSet='utf-8' />
        <script src='https://js.api.here.com/v3/3.0/mapsjs-mapevents.js' type='text/javascript' charSet='utf-8' />
        <link rel='stylesheet' type='text/css' href='http://js.api.here.com/v3/3.0/mapsjs-ui.css' />
        {styles}
        {
          ssr
            ? (<script>var __SSR_DISABLED__ = false;</script>)
            : (<script>var __SSR_DISABLED__ = true;</script>)
        }
      </head>
      <body>
        {ssr
          ? (<div id='root' dangerouslySetInnerHTML={{ __html: content }} />)
          : (<div id='root' />)
        }
        <script src='/public/bundle.js' />
      </body>
    </html>
  )
}

export default Html
