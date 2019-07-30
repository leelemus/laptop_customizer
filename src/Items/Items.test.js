import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Items from './Items';


describe(`Items Component`, () => {

    const key = 'name'
    const index = 1
    const item = {
        name: 'Toyota Corolla 1.5v',
        cost: 1150.98
      };
    const featureClass = 'feature__option '
    
    it('renders Items with data', () => {
        const wrapper = 
            shallow(<Items 
                        key = {index}
                        index = {index}
                        item = {item}
                        featureName = {key}
                        featureClass = {featureClass}
                    />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
