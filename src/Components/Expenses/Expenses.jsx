import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpenseFilter";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const filterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterHandler}
        />
        {expenses
          .filter(
            (expense) => expense.date.getFullYear().toString() === filteredYear
          )
          .map(({ id, title, amount, date }) => (
            <ExpenseItem key={id} title={title} amount={amount} date={date} />
          ))}
      </Card>
    </div>
  );
};

export default Expenses;
