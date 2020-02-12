import React from 'react'
import ConnectedExpenseList from './ExpenseList'
import ExpensesSummary from './ExpensesSummary'

const ExpenseDashboardPage=()=>{
    return(
        <div>
        <ExpensesSummary/>
        <ConnectedExpenseList/>
        </div>
    )
}


export default ExpenseDashboardPage