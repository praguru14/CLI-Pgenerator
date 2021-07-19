import React,{useState} from 'react'
import Card from '../Card/Card'
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter'
// import Expenses from '../../App'
import ExpenseList from '../ExpenseList/ExpenseList'
import './Render.css'






 
function Render(props) {

const [filteredDate,setDate]= useState('2021')

 const fliterChangeHandler = res=>{
    setDate(res)
    
 }

const filteredYear = props.items.filter(expense=>{
    return expense.date.getFullYear().toString() === filteredDate
});





    return (
      <div>
        <Card className="render">
        <ExpensesFilter selected={filteredDate} onYearValue={fliterChangeHandler}/>
           

    <ExpenseList item={filteredYear}/>
        </Card>
        </div>
       
    )
}

export default Render
