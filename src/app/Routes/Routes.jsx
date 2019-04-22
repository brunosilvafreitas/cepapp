import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import PostalCodeView from '../Views/PostalCode'

const routes = [
  {
    path: '/cep/:code',
    component: PostalCodeView
  },
  {
    path: '/cep/',
    component: PostalCodeView
  }
]

const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0
  }
`

const Routes = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Switch>
        {routes.map((routeProps, i) => (
          <Route key={i} {...routeProps} />
        ))}
        <Redirect to='/cep/' />
      </Switch>
    </React.Fragment>
  )
}

export default Routes
