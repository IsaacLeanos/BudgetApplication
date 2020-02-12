import React from 'react'
import{shallow}from'enzyme'
import ExpenseDashboardPage from '../../components/Dashboard'

test('render dashboard component',()=>{
    let wrapper=shallow(<ExpenseDashboardPage/>)
    expect(wrapper).toMatchSnapshot()
})