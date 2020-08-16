import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Search from './pages/Search'
import VideoList from './pages/VideoList'

function Routes () {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact={true} component={Search} />
        <Route path='/videolist' component={VideoList}/>
      </Switch>
    </BrowserRouter>
  )
}

export default Routes

