import React,{useState} from 'react'
import Card from '../Card/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
import ExpenseItem from '../Expenseitem/ExpenseItem'
// import Expenses from '../../App'
import './Render.css'






 
function Render(props) {

const [filteredDate,setDate]= useState('2020')

 const fliterChangeHandler = res=>{
    setDate(res)
    console.log(filteredDate);
 }
    return (
      <div>
        <Card className="render">
        <ExpensesFilter selected={filteredDate} onYearValue={fliterChangeHandler}/>
              {props.items.map((Expense)=>{
      return  <ExpenseItem date={Expense.date} title = {Expense.title}  amount={Expense.amount}/>
    })}
        </Card>
        </div>
       
    )
}

export default Render
