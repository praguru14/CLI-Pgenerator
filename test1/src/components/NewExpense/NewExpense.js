import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpense.css'
function NewExpense(props) {


const saveIt=(expenseDataD)=>{
        const expenseData = {
            ...expenseDataD,
            id:Math.random().toString()
        }

       props.onAddUpTheArray(expenseData)
}

    return (
        <div className="new-expense">
            <ExpenseForm onSaveIt={saveIt}/>
        </div>
    )
}

export default NewExpense
