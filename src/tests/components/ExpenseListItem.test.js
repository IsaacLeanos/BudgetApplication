import React from 'react'
import{shallow}from'enzyme'
import ExpenseListItem from '../../components/ExpenseListItem'
import expenses from '../fixtures/expensesData'



test('render expense link and attributes',()=>{
    let wrapper=shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

