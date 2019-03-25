import { rehydrateMarks } from 'react-imported-component'
import React from 'react'
import ReactDOM from 'react-dom'
import importedComponents from './imported' // eslint-disable-line
import AppComponent from './app'

const element = document.getElementById('app')

class App extends React.Component {
  render() {
    return <AppComponent />
  }
}

// In production, we want to hydrate instead of render
// because of the server-rendering

if (process.env.NODE_ENV === 'production') {
  // rehydrate the bundle marks
  rehydrateMarks().then(() => {
    ReactDOM.hydrate(<App />, element)
  })
} else {
  ReactDOM.render(<App />, element)
}

// Hot reload is that easy with Parcel
if (module.hot) {
  module.hot.accept()
}
