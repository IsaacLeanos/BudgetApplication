import React from 'react'
import {Router,Route,Switch} from 'react-router-dom'
import ExpenseDashboardPage from '../components/Dashboard'
import AddExpensePage from '../components/AddExpense'
import EditExpensePage from '../components/EditExpense'
import PageNotFound from '../components/NotFound'
import CLoginPage from '../components/LoginPage'
import CPrivateRoute from '../router/PrivateRoute'
import createHistory from 'history/createBrowserHistory'
import CPublicRoute from '../router/PublicRoute'

export const history=createHistory()

const AppRouter=()=>(
    <Router history={history}>
    <div>
    <Switch>
    <CPublicRoute path="/" component={CLoginPage} exact={true}/>
    <CPrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
    <CPrivateRoute path="/create" component={AddExpensePage}/>
    <CPrivateRoute path="/edit/:id" component={EditExpensePage}/>
    <Route component={PageNotFound}/>
    </Switch>
    </div>
    </Router>
)

export default AppRouter