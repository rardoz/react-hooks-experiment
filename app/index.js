import React from 'react'
import ReactDOM from 'react-dom'
import { useRoutes } from 'hookrouter'
import { lazyLoader } from './components/lazy-loader'

import './styles.scss'

const LazyHome = React.lazy(() => import('./pages/home'))
const LazyError = React.lazy(() => import('./pages/error'))
const LazyLogin = React.lazy(() => import('./pages/login'))
const LazyProfile = React.lazy(() => import('./pages/profile'))

const routes = {
  '/': lazyLoader(LazyHome),
  '/login': lazyLoader(LazyLogin),
  '/profile': lazyLoader(LazyProfile),
  '/404': lazyLoader(LazyError)
}

const App = () => {
  const routeResult = useRoutes(routes)
  const Error = routes['/404']
  return routeResult || <Error />
}

var mountNode = document.getElementById('app')
ReactDOM.render(<App />, mountNode)
