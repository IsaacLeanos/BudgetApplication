import React from 'react'
import {connect} from 'react-redux'
import {setTextFilter,sortByAmount,sortByDate,setStartDate,setEndDate} from '../actions/filters'
import {DateRangePicker} from 'react-dates'
import moment from 'moment'

export class ExpenseListFilters extends React.Component{
    state={
        calendarFocused:null
    }
    onDatesChange=({startDate,endDate})=>{
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange=(calendarFocus)=>{
        this.setState(()=>({calendarFocused:calendarFocus}))
    } 
    onInputChange=(e)=>{
        this.props.setTextFilter(e.target.value)
    }
    onSelectChange=(e)=>{
        if(e.target.value==='date'){
            this.props.selectByDate()
        }else if(e.target.value==='amount'){
            this.props.selectByAmount()
        }
    }
    render(){
        return(
        <div className="content-container">
                <div className="input-group">
                    <div className="input-group__item">
                        <input type="text" className="text-input" placeholder="search expenses" value={this.props.filters.text} onChange={this.onInputChange}/>
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filters.sortBy} onChange={this.onSelectChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item">
                        <DateRangePicker startDate={this.props.filters.startDate} endDate={this.props.filters.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={()=>false}
                        showClearDates={true}
                        />
                    </div>

                </div>

        </div> 

            
            
        )
    }
}
const mapStateToProps=(state)=>({filters:state.filters})

const mapDispatchToProps=(dispatch)=>({
    setStartDate:(date)=>dispatch(setStartDate(date)),
    setEndDate:(date)=>dispatch(setEndDate(date)),
    setTextFilter:(value)=>dispatch(setTextFilter(value)),
    selectByDate:()=>dispatch(sortByDate()),
    selectByAmount:()=>dispatch(sortByAmount())
})


export default connect(mapStateToProps,mapDispatchToProps)(ExpenseListFilters)
