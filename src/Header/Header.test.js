import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Header from './Header';


describe(`Header Component`, () => {

  it('renders no problem', () => {
    const wrapper = shallow(<Header />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})