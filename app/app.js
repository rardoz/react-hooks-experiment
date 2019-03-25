import React from 'react'
import importedComponent from 'react-imported-component'
import { Navbar } from './components/navbar'
import './styles.scss'

const LazyHome = importedComponent(() => import('./pages/home'))
const LazyError = importedComponent(() => import('./pages/error'))
const LazyLogin = importedComponent(() => import('./pages/login'))
const LazyProfile = importedComponent(() => import('./pages/profile'))

const routes = {
  '/': lazyLoader(LazyHome),
  '/login': lazyLoader(LazyLogin),
  '/profile': lazyLoader(LazyProfile),
  '/404': lazyLoader(LazyError)
}

const App = () => {
  const routeResult = useRoutes(routes)
  const Error = routes['/404']
  return (
    <div>
      <NavBar />
      {routeResult || <Error />}
    </div>
  )
}

export default App
