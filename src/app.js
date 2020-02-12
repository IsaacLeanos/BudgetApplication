import React from 'react'
import ReactDOM from 'react-dom'
import {Provider}from 'react-redux'
import AppRouter,{history}from './router/AppRouter'
import configureStore from './store/configureStore'
import getExpenses from './selectors/expenses'
import {startSetExpenses}from'./actions/expenses'
import {login,logout}from'./actions/authen'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import 'react-dates/lib/css/_datepicker.css'
import LoadingPage from "./components/LoadingPage";
import {firebase} from './firebase/firebase'


const store=configureStore()

let state=store.getState()
console.log('state',state)
// console.log('state',state)

const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
)

let hasRendered=false
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx,document.getElementById('special'))
        hasRendered=true
    }
}



ReactDOM.render(<LoadingPage/>,document.getElementById('special'))

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp()
            if(history.location.pathname==='/'){
                history.push('/dashboard')
            }
        })
    }else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
        //ok
    }
})




