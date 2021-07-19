import React ,{useState} from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {
    const [enteredTitle,setEntertedTitle]= useState('')
    const [enteredAmount,setEntertedAmount]= useState('')
    const [enteredDate,setEntertedDate]= useState('')
    const [btn,setBtn]=useState(0)

  
    const titleChangeHandler = (event) => {
      setEntertedTitle(event.target.value);
    };
   
    const amountChangeHandler = (event) => {
      setEntertedAmount(event.target.value);
    };
   
    const dateChangeHandler = (event) => {
      setEntertedDate(event.target.value);
    };

const check = (e)=>{
 
    e.preventDefault()

    const expenseData = {
        title:enteredTitle,
        amount:enteredAmount,
        date:new Date(enteredDate),
    }

    props.onSaveIt(expenseData)
  
    setEntertedTitle("");
    setEntertedAmount("");
    setEntertedDate("");
    setBtn(0)
    
}



// Adding Add Expense Button


const onClickHandler=()=>{
    
  setBtn(1)
}


    return (

   
        <form onSubmit={check}>
           {btn===1?(
           <div>
           <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01'  value={enteredAmount} onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
      <button type='submit' onClick={onClickHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
        
     
      </div>
           </div>
           ):(
            <div>
              <div className="new-expense__control">
                <button type="button" onClick={onClickHandler}>Add new Expense</button>
              </div>
            </div>
           )}
      
    </form>
    )
}

export default ExpenseForm













    // const[userInput,setUserInput]=  useState({
  //       enteredTitle:'',
  //       enteredAmount:'',
  //       enteredDate:'',
  //   })
// const titleChangeHandler=(event)=>{
//     // setUserInput({
//     //     ...userInput,
//     //     enteredTitle:event.target.value,
//     // })

//     setUserInput((prevState)=>{
//         return {
//             ...prevState,
//             enteredTitle:event.target.value,
//         } 
//     })
  
// }
// const amountChangeHandler=(event)=>{
//     setUserInput({
//         ...userInput,
//         enteredAmount:event.target.value,
//     })
  
// }
// const dateChangeHandler=(event)=>{
//     setUserInput({
//         ...userInput,
//         enteredDate:event.target.value,
//     })
  
// }
  // setUserInput({
    //     enteredTitle:'',
    //     enteredAmount:'',
    //     enteredDate:'',
        
    // })







