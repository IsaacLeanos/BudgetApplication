import React from 'react'
import{shallow}from'enzyme'
import expenses from '../fixtures/expensesData'
import {EditExpensePage} from '../../components/EditExpense'


test('render ExpensePage',()=>{
    let remove=jest.fn()
    let edit=jest.fn()
    let history={push:jest.fn()}
    let wrapper=shallow(<EditExpensePage />)
    expect(wrapper).toMatchSnapshot()
})

test('handle edit event',()=>{
    let remove=jest.fn()
    let edit=jest.fn()
    let history={push:jest.fn()}
    let wrapper=shallow(<EditExpensePage edit={edit} remove={remove} history={history} expense={expenses[0]}/>)
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(edit).toHaveBeenLastCalledWith(expenses[0].id,expenses[0])
})

test('handle remove event',()=>{
    let remove=jest.fn()
    let edit=jest.fn()
    let history={push:jest.fn()}
    let wrapper=shallow(<EditExpensePage edit={edit} remove={remove} history={history} expense={expenses[0]}/>)
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(remove).toHaveBeenLastCalledWith({id:expenses[0].id})
})
