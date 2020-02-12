import React from 'react'
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm'
import {startEditExpense,startRemoveExpense} from '../actions/expenses'

export class EditExpensePage extends React.Component{

    onClick=()=>{
        this.props.remove({id:this.props.expense.id})
        this.props.history.push('/')
    }
    onSubmit=(formData)=>{
        this.props.startEditExpense(this.props.expense.id,formData)
        this.props.history.push('/')
    }
    render(){
        return(
        <div>
            <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title">Edit Expense</h1>
                </div>
            </div>
            <div className="content-container">
            <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit}/>
            <button className="button button--secondary" onClick={this.onClick}>Remove</button>
            </div>
        </div>
    )}
}
const mapStateToProps=(state,props)=>({
        expense:state.expenses.find((item)=>item.id===props.match.params.id)
    })

const mapDispatchToProps=(dispatch)=>({
    remove:(item)=>dispatch(startRemoveExpense(item)),
    startEditExpense:(id,item)=>dispatch(startEditExpense(id,item))
})

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage)