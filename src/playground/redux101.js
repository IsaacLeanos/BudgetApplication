import {createStore} from 'redux'



const increment=({incrementBy=1}={})=>{
    return {
        type:'INCREMENT',
        incrementBy:incrementBy
    }
}


const decrement=({decrementBy=1}={})=>{
    return{
        type:'DECREMENT',
        decrementBy:decrementBy
    }
}
const reset=({resetTo=0}={})=>{
    return{
        type:'RESET',
        resetTo:resetTo
    }
}


const store=createStore((state={count:0},action)=>{
    switch(action.type){
        case 'INCREMENT':
        return{
            count:state.count+action.incrementBy
        }
        case 'DECREMENT':
        return{
            count:state.count-action.decrementBy
        }
        case 'RESET':
        return{
            count:action.resetTo
        }
        default:
        return state
    }
})

const unsubscribe=store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch(increment({incrementBy:6}))

store.dispatch(decrement({decrementBy:3}))

store.dispatch(reset({resetTo:0}))
