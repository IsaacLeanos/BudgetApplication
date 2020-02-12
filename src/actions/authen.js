import {firebase,googleAuthProvider}from'../firebase/firebase'


export const login=(uid)=>{
    return{
        type:'LOGIN',
        uid:uid
    }
}

export const startLogin=()=>{
    return()=>{
        firebase.auth().signInWithPopup(googleAuthProvider)
    }
}

export const logout=()=>{
    return{
        type:'LOGOUT'
    }
}

export const startLogout=()=>{
    return()=>{
        firebase.auth().signOut()
    }
}