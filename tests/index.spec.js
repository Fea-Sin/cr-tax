import React from 'react'
import { mount } from 'enzyme'
import Comp from '../src'


describe('cr-tax', () => {
  it('base test comp', () => {
    const wrapper = mount(
      <Comp />
    )
    expect(wrapper.find('.hello').text()).toBe('COMP IS DONE')
  })
})