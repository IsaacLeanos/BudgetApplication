export const setTextFilter=(text='')=>{
    return{
        type:'SET_TEXT',
        text:text
    }
}
export const sortByDate=()=>{ 
    return{
        type:'SORT_BY_DATE'
    }
}
export const sortByAmount=()=>{ 
    return{
        type:'SORT_BY_AMOUNT'
    }
}
export const setStartDate=(date)=>{
    return{
        type:'SET_START_DATE',
        date:date
    }
}
export const setEndDate=(date)=>{
    return{
        type:'SET_END_DATE',
        date:date
    }
}