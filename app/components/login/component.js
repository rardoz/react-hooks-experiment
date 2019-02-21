import React, { useContext } from 'react'
import { SystemAlertContext } from '../../providers/system-alerts'

export default () => {
  const alert = useContext(SystemAlertContext)

  return (
    <div>
      <div>hello login</div>
      <button
        onClick={() =>
          alert.dispatch.displayAlert({ message: 'test123', type: 'success' })
        }
      >
        Add alert
      </button>
    </div>
  )
}
