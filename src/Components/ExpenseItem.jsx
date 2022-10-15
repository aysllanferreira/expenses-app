import ExpenseDate from './ExpenseDate'
import Card from './Card'
import './ExpenseItem.css'

function ExpenseItem({ id, title, amount, date }) {

  return (
    <Card id={id} className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem