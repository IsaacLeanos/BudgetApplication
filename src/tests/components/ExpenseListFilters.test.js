import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/ExpenseListFilters'
import{filters,altFilters}from'../fixtures/filtersData'
import moment from 'moment'

let setStartDate,setEndDate,setTextFilter,selectByDate,selectByAmount,wrapper
beforeEach(()=>{
    setTextFilter=jest.fn()
    setStartDate=jest.fn()
    setEndDate=jest.fn()
    selectByDate=jest.fn()
    selectByAmount=jest.fn()
    wrapper=shallow(
    <ExpenseListFilters
    filters={filters}
    setTextFilter={setTextFilter}
    setStartDate={setStartDate}
    setEndDate={setEndDate}
    selectByDate={selectByDate}
    selectByAmount={selectByAmount}
    />)
})

test('render filter component',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('render component with filtered data',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('handle set text filter',()=>{
    let newText='money'
    wrapper.find('input').simulate('change',{
        target:{value:newText}
    })
    expect(setTextFilter).toHaveBeenLastCalledWith('money')
})

test('sort by date',()=>{
    wrapper.setProps({
        filters:altFilters
    })
    let value='date'
    wrapper.find('select').simulate('change',{
        target:{value:value}
    })
    expect(selectByDate).toHaveBeenCalled()
})

test('sort by amount',()=>{
    let value='amount'
    wrapper.find('select').simulate('change',{
        target:{value:value}
    })
    expect(selectByAmount).toHaveBeenCalled()
})

test('handle date change - start/end ',()=>{
    let startDate=moment(0).add(5,'years')
    let endDate=moment(0).add(10,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)

})

test('handle focus change',()=>{
    let focus='endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(focus)
    expect(wrapper.state('calendarFocused')).toBe(focus)
})


