import React, { useContext } from 'react'
import { mount } from 'enzyme'
import { SystemAlert } from './index'
import AlertProvider, {
  SystemAlertContext
} from '../../providers/system-alerts'

const SetupContext = props => {
  const { dispatch } = useContext(SystemAlertContext)
  if (props.message) dispatch.displayAlert({ message, type: 'success' })
  return nil
}

function setup() {
  return mount(
    <AlertProvider>
      <SystemAlert />
    </AlertProvider>
  )
}

describe('System Alert', () => {
  let wrapper = setup()

  it('Should not have any alerts', () => {
    expect(wrapper.text()).toBe('')
  })

  // it('Should have an alert', () => {
  //   mount(<SetupContext message="test123" />)
  //   wrapper = setup()
  //   expect(wrapper.text()).toBe('test')
  // })
})
