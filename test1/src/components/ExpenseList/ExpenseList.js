import React from 'react'
import './ExpenseList.css'

import ExpenseItem from '../Expenseitem/ExpenseItem'

function ExpenseList(props) {
  
if(props.item.length === 0){
   return (
     <h2 className="expenses-list__fallback">
       Found Nothing
     </h2>
   )
  }

    return (
        <ul className="expenses-list">
          {props.item.map((Expense)=>{
      return  <ExpenseItem key={Expense.id} date={Expense.date} title = {Expense.title}  amount={Expense.amount}/>
    })}
        </ul>
    )
}

export default ExpenseList
