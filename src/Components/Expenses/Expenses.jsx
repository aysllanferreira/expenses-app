import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = ({ expenses }) => {
  return (
    <Card className='expenses'>
        {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem id={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  )
}

export default Expenses