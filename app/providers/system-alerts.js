import React, { createContext, useReducer } from 'react'
const actionTypes = {
  DISPLAY_ALERT: 'DISPLAY_ALERT',
  REMOVE_ALERT: 'REMOVE_ALERT'
}
// Initialize a context
const Context = createContext('app-system-alerts')

const { Provider } = Context

const defaultState = {
  notifications: []
}

const displayAlertAction = notification => ({
  type: actionTypes.DISPLAY_ALERT,
  notification: {
    key: new Date().getTime() + Math.random(),
    ...notification
  }
})

const removeAlertAction = key => ({
  type: actionTypes.REMOVE_ALERT,
  key
})

const StateProvider = props => {
  const [items = defaultState, dispatch] = useReducer(
    (state = defaultState, action) => {
      switch (action.type) {
        case actionTypes.DISPLAY_ALERT:
          return {
            ...state,
            notifications: [...state.notifications, action.notification]
          }

        case actionTypes.REMOVE_ALERT:
          return {
            ...state,
            notifications: state.notifications.filter(
              notification => notification.key !== action.key
            )
          }

        default:
          return state
      }
    }
  )

  return (
    <Provider
      {...props}
      value={{
        state: items,
        dispatch: {
          displayAlert: notification =>
            dispatch(displayAlertAction(notification)),
          removeAlert: key => dispatch(removeAlertAction(key))
        }
      }}
    />
  )
}

export { Context as SystemAlertContext, StateProvider as default }
