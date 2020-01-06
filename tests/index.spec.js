import React from 'react';
import { mount, render } from 'enzyme';
import { renderToJson } from 'enzyme-to-json';
import Comp from '../src';


describe('cr-tax', () => {
  it('base test comp', () => {
    const wrapper = mount(
      <Comp />
    )
    expect('COMP IS DONE').toBe('COMP IS DONE')
  })
  it('snapshot to match', () => {
    const wrapper = render(
      <Comp />
    )
    expect( renderToJson(wrapper) ).toMatchSnapshot()
  })
})
