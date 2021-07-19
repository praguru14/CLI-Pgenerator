import React,{useState} from "react";
// import ExpensesFilter from "./components/ExpenseFilter/ExpenseFilter";
import NewExpense from "./components/NewExpense/NewExpense";
import Dummy_Expense from "./components/Expenseitem/Expense";
import Render from "./components/Render/Render";



function App() {

const [expense,setExpense]=useState(Dummy_Expense)

  const addUpTheArray = expenses=>{
   setExpense(prevEx=>{
     return [expenses,...prevEx  ]
   })
   
  }

  return (
    <div>
    <NewExpense onAddUpTheArray={addUpTheArray} />
    
    <Render items={expense}/>
 
    </div>
  );
}

export  default App;
