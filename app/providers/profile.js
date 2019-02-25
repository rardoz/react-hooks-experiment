import React, { createContext, useReducer } from 'react'
const actionTypes = {
  GET_PROFILE: 'GET_PROFILE',
  UPDATE_PROFILE: 'UPDATE_PROFILE'
}

// Initialize a context
const Context = createContext('app-profile')

const { Provider } = Context

const defaultState = {
  data: {},
  fetching: false,
  error: ''
}

const getAction = response => ({
  type: actionTypes.GET_PROFILE,
  payload: response
})

const updateAction = response => ({
  type: actionTypes.UPDATE_PROFILE,
  payload: response
})

const fetchProfile = dispatch => {
  dispatch(getAction({ fetching: true }))

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = {
        email: 'myemail@gmail.com',
        id: 333,
        password: '',
        password_verify: ''
      }
      dispatch(getAction({ fetching: false, data, error: '' }))
      return resolve(data)
    }, 500)
  })
}

const updateProfile = (dispatch, formData) => {
  dispatch(updateAction({ fetching: true }))
  return new Promise((resolve, reject) => {
    if (formData.get('password') != formData.get('password_verify')) {
      reject({ message: 'Passwords do not match' })
    } else {
      setTimeout(() => {
        const data = {
          email: formData.get('email'),
          id: 333,
          password: formData.get('password'),
          password_verify: formData.get('password_verify')
        }
        dispatch(updateAction({ fetching: false, data, error: '' }))
        return resolve(data)
      }, 500)
    }
  }).catch(e => {
    dispatch(updateAction({ fetching: false, error: e.message }))
    return e
  })
}

const StateProvider = props => {
  const [items = defaultState, dispatch] = useReducer(
    (state = defaultState, action) => {
      switch (action.type) {
        case actionTypes.GET_PROFILE:
          return {
            ...state,
            ...action.payload
          }

        case actionTypes.UPDATE_PROFILE:
          return {
            ...state,
            ...action.payload
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
          getProfile: () => fetchProfile(dispatch),
          updateProfile: formData => updateProfile(dispatch, formData)
        }
      }}
    />
  )
}

export { Context as ProfileContext, StateProvider as default }
