import{setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate}from'../../actions/filters'
import moment from 'moment'


test('start date action',()=>{
    let action=setStartDate(moment(0))
    expect(action).toEqual({
        type:'SET_START_DATE',
        date:moment(0)
    })
})

test('end date action',()=>{
    let action=setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        date:moment(0)
    })
})

test('sort by amount action',()=>{
    let action=sortByAmount()
    expect(action).toEqual({
        type:'SORT_BY_AMOUNT'
    })
})

test('sort by date action',()=>{
    let action=sortByDate()
    expect(action).toEqual({
        type:'SORT_BY_DATE'
    })
})

test('set text filter action',()=>{
    let action=setTextFilter('text')
    expect(action).toEqual({
        type:'SET_TEXT',
        text:'text'
    })
})

test('set text filter default action',()=>{
    let action=setTextFilter()
    expect(action).toEqual({
        type:'SET_TEXT',
        text:''
    })
})
