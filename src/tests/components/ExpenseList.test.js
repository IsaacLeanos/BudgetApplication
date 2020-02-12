import React from 'react'
import{shallow}from'enzyme'
import{ExpenseList}from'../../components/ExpenseList'
import expenses from '../fixtures/expensesData'



test('render a list of expenses',()=>{
    let wrapper=shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('render a paragraph with no expenses',()=>{
    let wrapper=shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})

