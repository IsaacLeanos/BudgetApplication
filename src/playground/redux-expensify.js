import{createStore,combineReducers}from'redux'
import uuid from 'uuid'


// ACTIONS
const addExpense=({description='',note='',amount=0,createdAt=0}={})=>{
    return{
        type:'ADD_EXPENSE',
        expense:{
            id:uuid(),
            description,
            note,
            amount,
            createdAt
        }
    }
}
const removeExpense=({id}={})=>{
    return{
        type:'REMOVE_EXPENSE',
        id:id
    }
}
const editExpense=(id,updates)=>{
    return{
        type:'EDIT_EXPENSE',
        id:id,
        updates:updates
    }
}

// EXPENSE REDUCER
const expensesDefaults=[]
const expensesReducer=(state=expensesDefaults,action)=>{
    switch(action.type){
        case 'ADD_EXPENSE':
        return [...state,action.expense]
        case 'REMOVE_EXPENSE':
        return state.filter(({id})=>{
            return id !== action.id
        })
        case 'EDIT_EXPENSE':
        return state.map((item)=>{
            if(item.id===action.id){
                return{...item,...action.updates}
            }else{
                return item
            }
        })
        default:
        return state
    }
}
// 2nd ACTIONS
const setTextFilter=(text='')=>{
    return{
        type:'SET_TEXT',
        text:text
    }
}
const sortByDate=()=>{
    return{
        type:'SORT_BY_DATE'
    }
}
const sortByAmount=()=>{
    return{
        type:'SORT_BY_AMOUNT'
    }
}
const setStartDate=(date)=>{
    return{
        type:'SET_START_DATE',
        date:date
    }
}
const setEndDate=(date)=>{
    return{
        type:'SET_END_DATE',
        date:date
    }
}
// filter reducer 
const filterDefaults={
    text:'',
    sortBy:'date',
    startDate:undefined,
    endDate:undefined
}
const filterReducer=(state=filterDefaults,action)=>{
    switch(action.type){
        case 'SET_TEXT':
        return{
            ...state,text:action.text
        }
        case 'SORT_BY_DATE':
        return{
            ...state,sortBy:'date'
        }
        case 'SORT_BY_AMOUNT':
        return{
            ...state,sortBy:'amount'
        }
        case 'SET_START_DATE':
        return{
            ...state,startDate:action.date
        }
        case 'SET_END_DATE':
        return{
            ...state,endDate:action.date
        }
        default:
        return state
    }    
}
// STORE
const store=createStore(combineReducers({
    expenses:expensesReducer,
    filters:filterReducer
}))

const getExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((item)=>{
        let startDateMatch=typeof startDate!=='number'||item.createdAt>=startDate
        let endDateMatch=typeof endDate!=='number'||item.createdAt<=endDate
        let textMatch=item.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch&&endDateMatch&&textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt ? 1:-1
        }else if(sortBy==='amount'){
            return a.amount<b.amount ? 1:-1
        }
    })
}

store.subscribe(()=>{
    let state=store.getState()
    let visibleExpenses=getExpenses(state.expenses,state.filters)
    console.log('expenses',visibleExpenses)
})


// DISPATCH
let firstDispatch=store.dispatch(addExpense({description:'rent',amount:'100',createdAt:1000}))
let secondDispatch=store.dispatch(addExpense({description:'coffee',amount:'300',createdAt:-1000}))
// store.dispatch(removeExpense({id:firstDispatch.expense.id}))
// store.dispatch(editExpense(secondDispatch.expense.id,{amount:500}))
// let thirdDispatch=store.dispatch(setTextFilter('rent'))
// store.dispatch(sortByDate())
// store.dispatch(sortByAmount())
// store.dispatch(setStartDate(125))
// store.dispatch(setEndDate(4000))


// state
const demoState={
    expenses:[{
        id:'randomID',
        description:'Pay rent',
        note:'January',
        amount:54500,
        createdAt:0
    }],
    filters:{
        text:'rent',
        sortBy:'amount',
        startDate:undefined,
        endDate:undefined
    }
}