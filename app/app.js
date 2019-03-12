import React from 'react'
import importedComponent from 'react-imported-component'
import { Route, Switch } from 'react-router-dom'
import { Navbar } from './components/navbar'
import './styles.scss'

const LazyHome = importedComponent(() => import('./pages/home'))
const LazyError = importedComponent(() => import('./pages/error'))
const LazyLogin = importedComponent(() => import('./pages/login'))
const LazyProfile = importedComponent(() => import('./pages/profile'))

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={LazyHome} />
          <Route path="/login" exact component={LazyLogin} />
          <Route path="/profile" exact component={LazyProfile} />
          <Route component={LazyError} />
        </Switch>
      </div>
    )
  }
}

export default App
