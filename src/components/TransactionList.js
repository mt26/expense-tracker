import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState';
import {Transaction} from './Transaction';

// we can pull out anything from global state by using useContext.
export const TransactionList = () => {
const {transactions} =useContext(GlobalContext);


    return (
        <div>
            <h3>History</h3>
      <ul className="list">
      {transactions.map(transaction=>( <Transaction key={transaction.id} transaction={transaction}/> ))}
        
      </ul>
        </div>
    )
}
