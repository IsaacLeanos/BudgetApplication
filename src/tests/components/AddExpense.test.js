import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/AddExpense'
import expenses from '../fixtures/expensesData'

test('render AddExpensePage',()=>{
    let startAddExpense=jest.fn()
    let history={push:jest.fn()}
    let wrapper=shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
    expect(wrapper).toMatchSnapshot()
})

test('handle onSubmit',()=>{
    let startAddExpense=jest.fn()
    let history={push:jest.fn()}
    let wrapper=shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startAddExpense).toHaveBeenCalledWith(expenses[1])
})