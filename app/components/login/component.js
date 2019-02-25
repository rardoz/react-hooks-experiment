import React, { useContext, useRef, useState } from 'react'
import { Redirect } from 'react-router-dom'
import { SystemAlertContext } from '../../providers/system-alerts'
import './styles.scss'

export default () => {
  const alert = useContext(SystemAlertContext)
  const formRef = useRef()
  const [isSubmitting, useDisable] = useState(false)

  const onSubmit = e => {
    e.preventDefault()
    const formData = new FormData(formRef.current)
    useDisable(true)
    setTimeout(() => {
      if (formData.get('email') === 'test@test.com') {
        alert.dispatch.displayAlert({
          message: 'You entered an invalid email.',
          type: 'error'
        })
      } else if (formData.get('password') === 'password') {
        alert.dispatch.displayAlert({
          message: 'You entered an invalid password.',
          type: 'error'
        })
      } else {
        alert.dispatch.displayAlert({
          message: 'You have been logged in. Redirecting...',
          type: 'success'
        })
        setTimeout(() => {
          window.location = '/'
        }, 2000)
      }
      useDisable(false)
    }, 1000)
  }

  return (
    <div className="login-form">
      <div className="login-form-content">
        <h2>Login</h2>
        <hr />
        <form onSubmit={onSubmit} ref={formRef}>
          <fieldset>
            <label>Email</label>
            <input
              autoComplete={false}
              disabled={isSubmitting}
              type="email"
              name="email"
              required
              placeholder="Enter email"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              autoComplete={false}
              disabled={isSubmitting}
              type="password"
              name="password"
              required
              placeholder="Enter password"
            />
          </fieldset>
          <fieldset className="submit-fieldset">
            <input
              disabled={isSubmitting}
              type="submit"
              value={isSubmitting ? 'Logging in...' : 'Submit'}
            />
          </fieldset>
        </form>
      </div>
    </div>
  )
}
