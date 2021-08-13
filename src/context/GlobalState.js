import React,{createContext,useReducer} from 'react';
import AppReducer from './AppReducer';
// initial state

const initialState={
    transactions: []
         
}
// create context
export const GlobalContext=createContext(initialState);
// Provider Component -what basically does is wraps up all the components passed in app.js
// so that everyone can have access to our global data
// since we're gonna wrap up components in app.js
// they are going to be children component
export const GlobalProvider=({children})=>{
     const [state,dispatch]=useReducer(AppReducer,initialState);
    //  whenever we have to call reducer action we will need dispatch

    // Actions
    function deleteTransaction(id){
        dispatch({  type:"DELETE_TRANSACTION",
        payload: id
    });
    }
      
      function addTransaction(transaction){
        dispatch({  type:"ADD_TRANSACTION",
        payload: transaction
    });
      

      }
    return(
        <GlobalContext.Provider value={{
            transactions: state.transactions,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    );
    
}
