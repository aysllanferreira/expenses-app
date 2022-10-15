import React from 'react'
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import './Expenses.css'

function Expenses({ expenses }) {
  return (
    <Card className='expenses'>
        {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem id={id} title={title} amount={amount} date={date} />
      ))}
    </Card>
  )
}

export default Expenses