import React from 'react'
import{shallow}from'enzyme'
import HelpExpensePage from '../../components/HelpExpense'


test('renderer Help component',()=>{
    let wrapper=shallow(<HelpExpensePage/>)
    expect(wrapper).toMatchSnapshot()
})