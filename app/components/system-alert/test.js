import React, { useContext, useEffect } from 'react'
import { shallow, mount } from 'enzyme'
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
    <div>
      <AlertProvider>
        <SetupContext message={props.message} />
      </AlertProvider>
    </div>
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
      setTimeout(resolve, 1000)
    }).then(() => {
      return expect(wrapper.text()).toBe('test')
    })
  })
})
