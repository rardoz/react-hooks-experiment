import React, { useState, useCallback, useContext, useEffect } from 'react'
import { ProfileContext } from '../../providers/profile'
import { SystemAlertContext } from '../../providers/system-alerts'
import './styles.scss'

export default () => {
  const { state, dispatch } = useContext(ProfileContext)
  const alert = useContext(SystemAlertContext)
  const [pendingValues, usePendingValues] = useState({
    email: '',
    password: '',
    password_verify: ''
  })

  const useOnChange = useCallback(e => {
    usePendingValues({ ...pendingValues, [e.target.name]: e.target.value })
  })

  useEffect(() => {
    if (!state.data.id && !state.fetching) {
      dispatch.getProfile()
    } else if (
      state.data.id &&
      !Object.values(pendingValues).find(val => !!val)
    ) {
      usePendingValues({ ...state.data })
    }
    if (state.error && !state.fetching) {
      alert.dispatch.displayAlert({ message: state.error, type: 'error' })
    }
  }, [state])

  const onSubmit = e => {
    e.preventDefault()
    const params = new FormData(e.target)
    dispatch.updateProfile(params).then(e => {
      if (!e.message) {
        alert.dispatch.displayAlert({
          message: 'Successfully updated profile.',
          type: 'success'
        })
      }
    })
  }

  return (
    <div className="profile-form">
      <div className="profile-form-content">
        <h2>Your profile</h2>
        <hr />
        <form onSubmit={onSubmit}>
          <fieldset>
            <label>Email</label>
            <input
              disabled={state.fetching}
              autoComplete="off"
              type="email"
              required
              value={pendingValues.email}
              onChange={useOnChange}
              name="email"
            />
          </fieldset>
          <fieldset>
            <label>Password</label>
            <input
              disabled={state.fetching}
              autoComplete="off"
              type="password"
              name="password"
              required
              value={pendingValues.password}
              onChange={useOnChange}
            />
          </fieldset>
          <fieldset>
            <label>Verify Password</label>
            <input
              disabled={state.fetching}
              autoComplete="off"
              type="password"
              required
              value={pendingValues.password_verify}
              onChange={useOnChange}
              name="password_verify"
            />
          </fieldset>
          <fieldset>
            <input disabled={state.fetching} type="submit" />
          </fieldset>
        </form>
      </div>
    </div>
  )
}
