import filtersReducer from '../../reducers/filters'
import moment from 'moment'

test('setup default filter values',()=>{
    let state=filtersReducer(undefined,{type:'@@INIT'})
    expect(state).toEqual({
    text:'',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
    })
})

test('set sort by to amount',()=>{
    let state=filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
    expect(state).toEqual({
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
        })
})

test('set sort by to date',()=>{
    let currentState={
        text:'',
        sortBy:'amount',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
        }
    let action={type:'SORT_BY_DATE'}
    let state=filtersReducer(currentState,action)
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
        })
})

test('set text action',()=>{
    let currentState={
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    let action={type:'SET_TEXT',text:'some text'}
    let state=filtersReducer(currentState,action)
    expect(state).toEqual({
        text:'some text',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    })
})

test('set start date',()=>{
    let currentState={
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    let action={type:'SET_START_DATE',date:moment(0)}
    let state=filtersReducer(currentState,action)
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment(0),
        endDate:moment().endOf('month')
    })
})

test('set end date',()=>{
    let currentState={
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment().endOf('month')
    }
    let action={type:'SET_END_DATE',date:moment(0)}
    let state=filtersReducer(currentState,action)
    expect(state).toEqual({
        text:'',
        sortBy:'date',
        startDate:moment().startOf('month'),
        endDate:moment(0)
    })
})
