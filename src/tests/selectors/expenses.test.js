import selectExpenses from '../../selectors/expenses'
import moment from 'moment'
import expenses from '../fixtures/expensesData'



test('filter by text value',()=>{
    let filters={text:'i',sortBy:'date',startDate:undefined,endDate:undefined}
    let result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[2]])
})

test('filter by start date',()=>{
    let filters={text:'',sortBy:'date',startDate:moment(0),endDate:undefined}
    let result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[2]])
})

test('filter by end date',()=>{
    let filters={text:'',sortBy:'date',startDate:undefined,endDate:moment(0)}
    let result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[0]])
})

test('filter by date',()=>{
    let filters={text:'',sortBy:'date',startDate:undefined,endDate:undefined}
    let result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[1],expenses[0],expenses[2]])
})

test('filter by amount',()=>{
    let filters={text:'',sortBy:'amount',startDate:undefined,endDate:undefined}
    let result=selectExpenses(expenses,filters)
    expect(result).toEqual([expenses[0],expenses[1],expenses[2]])
})