import React, { useContext } from 'react'
import { SystemAlertContext } from '../../providers/system-alerts'
import './styles.scss'

export default () => {
  const alerts = useContext(SystemAlertContext)
  return (
    <div className="system-alert-container">
      {alerts.state.notifications.map(notification => (
        <div
          className={`system-alert ${notification.type}`}
          key={notification.key}
        >
          {notification.message}
        </div>
      ))}
    </div>
  )
}
