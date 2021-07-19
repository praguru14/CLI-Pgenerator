import Card from '../Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';




function ExpenseItem(props) {

 

//   const [title, setTitle] = useState(props.title)

// const click =  () => {
//    setTitle('Hello')
//   console.log(title);
    
// }

  return (
   
    <Card className='expense-item'>
    
     <ExpenseDate date = {props.date}/>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
        <div className='expense-item__price'>{props.amount}</div>
      
      </div>
     
    </Card>
   
  );
}

export default ExpenseItem;