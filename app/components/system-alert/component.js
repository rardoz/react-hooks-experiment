import React, { useContext, useState, useEffect } from 'react'
import { SystemAlertContext } from '../../providers/system-alerts'
import './styles.scss'
const timeouts = []

export default () => {
  const alerts = useContext(SystemAlertContext)
  const [displayed, useDisplayed] = useState([])

  const storeDisplayed = key => {
    useDisplayed([...displayed, key])
  }

  const killDisplays = []
  alerts.state.notifications.forEach(notification => {
    if (displayed.indexOf(notification.key) > -1) return
    storeDisplayed(notification.key)
    killDisplays.push(notification.key)
  })

  timeouts.push(
    setTimeout(() => {
      killDisplays.forEach(key => alerts.dispatch.removeAlert(key))
      useDisplayed(displayed.filter(key => !killDisplays.includes(key)))
    }, 3000)
  )

  useEffect(
    () => {},
    () => {
      timeouts.forEach(timeout => clearTimeout(timeout))
    }
  )

  return alerts.state.notifications.map(
    notification =>
      displayed.find(key => key === notification.key) && (
        <div key={notification.key}>{notification.message}</div>
      )
  )
}
