import React, { useContext, useEffect } from 'react'
import { mount } from 'enzyme'
import { SystemAlert } from './index'
import AlertProvider, {
  SystemAlertContext
} from '../../providers/system-alerts'

const SetupContext = props => {
  const { dispatch } = useContext(SystemAlertContext)
  useEffect(() => {
    if (props.message)
      dispatch.displayAlert({ message: props.message, type: 'success' })
  }, [props])

  return <SystemAlert />
}

function setup(props = {}) {
  return mount(
    <AlertProvider>
      <SetupContext message={props.message} />
    </AlertProvider>
  )
}

describe('System Alert', () => {
  let wrapper = setup()

  it('Should not have any alerts', () => {
    expect(wrapper.text()).toBe('')
  })

  it('Should have an alert', () => {
    wrapper = setup({ message: 'test', type: 'success' })

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 500)
    }).then(() => {
      return expect(wrapper.text()).toBe('test')
    })
  })
})
