import React, { Component } from 'react'
import { Profile } from '../../components/profile'
import AlertStateProvider from '../../providers/system-alerts'
import ProfileProvider from '../../providers/profile'
import { SystemAlert } from '../../components/system-alert'

// additional routing and context logic goes here
export default class extends Component {
  render() {
    return (
      <AlertStateProvider>
        <ProfileProvider>
          <Profile />
          <SystemAlert />
        </ProfileProvider>
      </AlertStateProvider>
    )
  }
}
