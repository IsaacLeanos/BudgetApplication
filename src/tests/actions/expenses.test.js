import{startAddExpense,addExpense,removeExpense,startRemoveExpense,editExpense,setExpenses,startSetExpenses}from'../../actions/expenses'
import expenses from '../fixtures/expensesData'
import thunk from 'redux-thunk'
import configureMockStore from 'redux-mock-store'
import database from '../../firebase/firebase';

let createMockStore=configureMockStore([thunk])
const uid='mycreateduid'
const defaultStore={authen:{uid}}

beforeEach((done)=>{
    let expense={}
    expenses.forEach(({id,description,amount,note,createdAt})=>{
        expense[id]={description,amount,note,createdAt}
    })
    database.ref(`users/${uid}/expenses`).set(expense).then(()=>done())
})
// ---edit
test('edit expense object',()=>{
    const action=editExpense('123',{description:'new description'})
    expect(action).toEqual({
        type:'EDIT_EXPENSE',
        id:'123',
        updates:{description:'new description'}
    })
})
// ----add
test('add expense object',()=>{
    const expense={
        description:'some bill',
        note:'something',
        amount:44500,
        createdAt:1000
    }
    const action=addExpense(expenses[2])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense:expenses[2]
    })
})

test('add expense to database and store',(done)=>{
    const store=createMockStore({authen:{uid:uid}})
    let expense={
    description:'aBill',
    note:'something',
    amount:40000,
    createdAt:1000
    }
    store.dispatch(startAddExpense(expense)).then(()=>{
        let actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'ADD_EXPENSE',
            expense:{
                id:expect.any(String),
                ...expense
            }
        })
        database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toEqual(expense)
            done()
        })
    })
})
// ---set/fetch
test('setExpenses object',()=>{
    const action=setExpenses(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    })
})

test('fetch expenses from firebase',(done)=>{
    const store=createMockStore(defaultStore)
    store.dispatch(startSetExpenses()).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done()
    })
})
// --remove
test('remove expense object',()=>{
    const action=removeExpense({id:'123'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123'
    })
})

test('remove expense from firebase',(done)=>{
    const id=expenses[1].id
    const store=createMockStore(defaultStore)
    store.dispatch(startRemoveExpense({id})).then(()=>{
        const actions=store.getActions()
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id:id
        })
        database.ref(`users/${uid}/expenses/${id}`).once('value').then((snapshot)=>{
            expect(snapshot.val()).toBeFalsy()
            done()
        })
    })
})