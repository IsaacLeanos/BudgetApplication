import moment from 'moment'


const selectExpenses=(expenses,{text,sortBy,startDate,endDate})=>{
    return expenses.filter((item)=>{
        let createdAtMoment=moment(item.createdAt)
        let startDateMatch=startDate?startDate.isSameOrBefore(createdAtMoment,'day'):true
        let endDateMatch=endDate?endDate.isSameOrAfter(createdAtMoment,'day'):true
        let textMatch=item.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch&&endDateMatch&&textMatch
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt<b.createdAt ? -1:1
        }else if(sortBy==='amount'){
            return a.amount<b.amount ? 1:-1
        }
    })
}

export default selectExpenses