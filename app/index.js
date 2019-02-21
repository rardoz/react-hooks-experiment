import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { lazyLoader } from './components/lazy-loader'

const LazyHome = React.lazy(() => import('./pages/home'))
const LazyError = React.lazy(() => import('./pages/error'))
const LazyLogin = React.lazy(() => import('./pages/login'))
const LazyLogout = React.lazy(() => import('./pages/logout'))
const LazyProfile = React.lazy(() => import('./pages/profile'))

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={lazyLoader(LazyHome)} />
          <Route path="/login" exact render={lazyLoader(LazyLogin)} />
          <Route path="/logout" exact render={lazyLoader(LazyLogout)} />
          <Route path="/profile" exact render={lazyLoader(LazyProfile)} />
          <Route component={lazyLoader(LazyError)} />
        </Switch>
      </BrowserRouter>
    )
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
