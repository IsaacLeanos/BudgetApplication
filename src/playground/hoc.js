import React from 'react'
import ReactDOM from 'react-dom'


const Info=(props)=>{
    return(
        <div>
        <p>Hello?</p>
        <p>{props.extra}</p>
        </div>
    )
}
const adminWarning=(Wrapped)=>{
    return(props)=>(
        <div>
        {props.isAdmin&&<p>ADMIN info here</p>}
        <Wrapped {...props}/>
        </div>
    )
}
const AdminInfo=adminWarning(Info)



ReactDOM.render(<AdminInfo isAdmin={true} extra="i am extra"></AdminInfo>,document.getElementById('special'))