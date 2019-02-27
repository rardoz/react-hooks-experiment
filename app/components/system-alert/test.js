// https://github.com/mpeyper/react-hooks-testing-library
// https://testing-library.com/docs/react-testing-library/api#render-options
// enzyme does not support hooks yet

import React, { useContext } from 'react'
import { mount } from 'enzyme'
import { SystemAlert } from './index'
import { renderHook, cleanup, act } from 'react-hooks-testing-library'

import AlertProvider, {
  SystemAlertContext
} from '../../providers/system-alerts'

const Wrapper = ({ children }) => {
  return (
    <AlertProvider>
      {children}
      <SystemAlert />
    </AlertProvider>
  )
}

describe('System Alert', () => {
  afterEach(cleanup)

  it('Should not have any alerts', () => {
    expect(mount(<Wrapper />).text()).toBe('')
  })

  it('Should have an alert', () => {
    const hook = renderHook(() => useContext(SystemAlertContext), {
      wrapper: Wrapper
    })

    const { dispatch } = hook.result.current

    act(() => {
      dispatch.displayAlert({ message: 'test', type: 'success' })
    })

    expect(
      document.body.getElementsByClassName('system-alert')[0].textContent
    ).toBe('test')
  })
})
