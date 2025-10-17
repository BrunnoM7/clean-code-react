import { Login } from '@/presentation/pages'
import React from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

type Props = {
  makeLogin?: React.FC
}

const Router: React.FC<Props> = ({ makeLogin }: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={makeLogin} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router