import React, { useContext, useState, useEffect } from 'react'
import { SystemAlertContext } from '../../providers/system-alerts'
import './styles.scss'
const timeouts = []

export default () => {
  const alerts = useContext(SystemAlertContext)

  return alerts.state.notifications.map(notification => (
    <div key={notification.key}>{notification.message}</div>
  ))
}
