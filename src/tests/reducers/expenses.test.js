import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expensesData'
import moment from 'moment'




test('setup default state value',()=>{
    let currentState=[]
    let state=expensesReducer(currentState,{type:'@@INIT'})
    expect(state).toEqual(currentState)
})

test('setup add expense action',()=>{
    let newExpense={description:'new bill',note:'',amount:50000,createdAt:0}
    let action={type:'ADD_EXPENSE',expense:newExpense}
    let state=expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,newExpense])
})

test('setup edit expense action',()=>{
    let id=expenses[0].id
    let note='new note'
    let action={type:'EDIT_EXPENSE',id:id,updates:{note:note}}
    let state=expensesReducer(expenses,action)
    expect(state[0]).toEqual({
        id:'123',
        description:'bll',
        amount:50000,
        note:'new note',
        createdAt:moment(0).valueOf()
    })
})

test('remove expense action',()=>{
    let remove=expenses[0].id
    let action={type:'REMOVE_EXPENSE',id:remove}
    let state=expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1],expenses[2]])
})

test('failed remove expense action',()=>{
    let remove='111'
    let action={type:'REMOVE_EXPENSE',id:remove}
    let state=expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('set expenses action',()=>{
    const action={
        type:'SET_EXPENSES',
        expenses:expenses[1]
    }
    let state=expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})