import React, { Component } from 'react'
import AlertStateProvider from '../../providers/system-alerts'
import { Login } from '../../components/login'
import { SystemAlert } from '../../components/system-alert'

// additional routing and context logic goes here
export default class extends Component {
  render() {
    return (
      <AlertStateProvider>
        <Login />
        <SystemAlert />
      </AlertStateProvider>
    )
  }
}
