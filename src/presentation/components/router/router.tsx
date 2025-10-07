import { Login } from '@/presentation/pages'
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import '@/presentation/styles/global.scss'

const Router: React.FC = ({ children }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Login} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router