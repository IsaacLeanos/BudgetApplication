import{createStore,combineReducers,applyMiddleware,compose}from'redux'
import thunk from 'redux-thunk'
import expensesReducer from '../reducers/expenses'
import filtersReducer from '../reducers/filters'
import authenReducer from '../reducers/authen'

const composeEnhancer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose

export default()=>{
    const store=createStore(combineReducers({
        expenses:expensesReducer,
        filters:filtersReducer,
        authen:authenReducer
    }),
    composeEnhancer(applyMiddleware(thunk))

)
    return store
}