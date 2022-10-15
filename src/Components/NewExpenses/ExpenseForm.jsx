import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const { enteredTitle, enteredAmount, enteredDate } = userInput;

  const titleHandleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    } );
  }
  const amountHandleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    } );
  };
  const dateHandleChange = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    } );
  };

  const handleClick = (event) => {
    event.preventDefault();
    const expenseData = {
      title: userInput.enteredTitle,
      amount: userInput.enteredAmount,
      date: new Date(userInput.enteredDate),
    };
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: '',
    });

    return expenseData;
  }
  

  return (
    <form onSubmit={handleClick}>
      <div className='new-expense__controls'>
         <div className='new-expense__control'>
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleHandleChange} />
        </div>

        <div className='new-expense__control'>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountHandleChange} />
        </div>

        <div className='new-expense__control'>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2023-12-31" onChange={dateHandleChange} value={enteredDate} />
        </div>
        <div className='new-expense__actions'>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  )
}

export default ExpenseForm