import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpenseFilter';
import './Expenses.css';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState('2022');

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterHandler}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
