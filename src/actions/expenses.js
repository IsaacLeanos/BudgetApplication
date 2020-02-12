import uuid from 'uuid'
import database from '../firebase/firebase'


export const addExpense=(expense)=>{
    return{
        type:'ADD_EXPENSE',
        expense:expense
    }
}
export const startAddExpense=({description='',note='',amount=0,createdAt=0}={})=>{
    return(dispatch,getState)=>{
        const uid=getState().authen.uid
        const expense={description,note,amount,createdAt}
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref)=>{
            dispatch(addExpense({
                id:ref.key,
                ...expense
            }))
        }).catch((e)=>{console.log(e)})
    }
}
export const startRemoveExpense=({id}={})=>{
    return(dispatch,getState)=>{
        const uid=getState().authen.uid
        return database.ref(`users/${uid}/expenses/${id}`).remove().then(()=>{
            dispatch(removeExpense({id:id}))
        })
    }
}

export const removeExpense=({id}={})=>{
    return{
        type:'REMOVE_EXPENSE',
        id:id
    }
}
export const editExpense=(id,updates)=>{
    return{
        type:'EDIT_EXPENSE',
        id:id,
        updates
    }
}
// export const startEditExpense=(id,formData)=>{
//     const updates={amount,description,note,createdAt}
//     return(dispatch,getState)=>{
//         const uid=getState().authen.uid
//         return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(()=>{
//             dispatch(editExpense(id,updates))
//         })
//     }
// }
export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
      const uid = getState().authen.uid;
      return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
        dispatch(editExpense(id, updates));
      });
    };
  };

export const setExpenses=(expenses)=>{
    return{
        type:'SET_EXPENSES',
        expenses
    }
}
export const startSetExpenses=()=>{
    return(dispatch,getState)=>{
        const uid=getState().authen.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapshot)=>{
            const expenses=[]
            snapshot.forEach((childSnapshot)=>{
                expenses.push({id:childSnapshot.key,...childSnapshot.val()})
            })
            dispatch(setExpenses(expenses))
        })
    }
}
