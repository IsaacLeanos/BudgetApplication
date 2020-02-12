import React from 'react'
import {connect} from 'react-redux'
import {Route,Redirect} from 'react-router-dom'
import ExpenseDashboardPage from '../components/Dashboard'



export const PublicRoute=({component:Component,isAuthenticated,...rest})=>{
    return(
        <Route {...rest} component={(props)=>{
            return(
                isAuthenticated?
                <Redirect to='/dashboard'/>
                :<Component {...props}/>
            )
        }}/>
    )
}

const mapStateToProps=(state)=>{
    return{
        isAuthenticated:!!state.authen.uid
    }
}

export default connect(mapStateToProps)(PublicRoute)