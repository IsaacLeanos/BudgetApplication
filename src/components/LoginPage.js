import React from 'react'
import{connect}from'react-redux'
import{startLogin}from'../actions/authen'


export const LoginPage=({startLogin})=>{
    return(
        <div className="boxLayout">
        <div className="boxLayout__box">
        <h1 className="boxLayout__title">Expensify</h1>
        <p>It's time to get your expenses under control.</p>
        <button className='button' onClick={startLogin}>Login with Google</button>
        </div>
        </div>
    )
}

const mapDispatchToProps=(dispatch)=>{
    return{
        startLogin:()=>dispatch(startLogin())
    }
}

export default connect(undefined,mapDispatchToProps)(LoginPage)