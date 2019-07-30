import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Summary from './Summary';


describe(`Summary Component`, () => {

  const selected = {
    Processor: {
        name: '17th Generation Intel Core HB (7 Core with donut spare)',
        cost: 700
      },
    "Operating System": {
        name: 'Ubuntu Linux 16.04',
        cost: 200
      },
    "Video Card":{
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      },
    Display: {
        name: '15.6" UHD (3840 x 2160) 60Hz Bright Lights and Knobs',
        cost: 1500
      }
  };

  it('renders Summary with data', () => {
    const wrapper = 
        shallow(<Summary
                    selected={selected}
                />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
