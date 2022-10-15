import React from 'react'
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

function Expenses({ expenses }) {
  return (
    <div className='expenses'>
        {expenses.map(({ id, title, amount, date }) => (
        <ExpenseItem id={id} title={title} amount={amount} date={date} />
      ))}
    </div>
  )
}

export default Expenses