import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'
import './ExpenseItem.css'
import { useState } from 'react'

const ExpenseItem = ({ id, title, amount, date }) => {

  const [titleState, setTitleState] = useState(title);

  const handleClick = () => {
    setTitleState('Updated!');
  }
  
  return (
    <Card id={id} className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{titleState}</h2>
        <div className='expense-item__price'>{amount}</div>
        <button onClick={handleClick}>Change Title</button>
      </div>
    </Card>
  )
}

export default ExpenseItem