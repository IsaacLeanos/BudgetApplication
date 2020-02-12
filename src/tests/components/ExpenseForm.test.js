import React from 'react'
import{shallow}from'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../fixtures/expensesData'
import moment from 'moment'

test('render ExpenseForm',()=>{
    let wrapper=shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('render ExpenseForm with data',()=>{
    let wrapper=shallow(<ExpenseForm expense={expenses[2]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('render error with invlalid data',()=>{
    let wrapper=shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('change descr. state on input change',()=>{
    let newValue='new description'
    let wrapper=shallow(<ExpenseForm/>)
    wrapper.find('input').at(0).simulate('change',{
        target:{
            value:newValue
        }
    })
    expect(wrapper.state('description')).toBe(newValue)
})

test('change note state on input change',()=>{
    let newValue='new note'
    let wrapper=shallow(<ExpenseForm/>)
    wrapper.find('textarea').simulate('change',{
        target:{
            value:newValue
        }
    })
    expect(wrapper.state('note')).toBe(newValue)
})

test('change amount state on input change',()=>{
    let newValue='50.00'
    let wrapper=shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{
            value:newValue
        }
    })
    expect(wrapper.state('amount')).toBe(newValue)
})

test('no change to amount state with invalid data',()=>{
    let newValue='50.0000'
    let wrapper=shallow(<ExpenseForm/>)
    wrapper.find('input').at(1).simulate('change',{
        target:{
            value:newValue
        }
    })
    expect(wrapper.state('amount')).toBe('')
})

test('form sent object data',()=>{
    let onSubmitSpy=jest.fn()
    let wrapper=shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />)
    wrapper.find('form').simulate('submit',{
        preventDefault:()=>{}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        createdAt:0,
        note:expenses[0].note
    })
})

test('change createdAt date',()=>{
    let wrapper=shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(moment())
    expect(wrapper.state('createdAt')).toEqual(moment())
})

test('change focus state',()=>{
    let wrapper=shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused:true})
    expect(wrapper.state('calendarFocused')).toBe(true)
})