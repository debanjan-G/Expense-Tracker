import Card from "../../UI/Card/Card";
import ExpenseItem from "../ExpenseItems/ExpenseItem";
import FilterByYear from "../../FilterByYear/FilterByYear";
import ExpenseChart from "../ExpenseChart";
import { useState } from "react";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedOption, setSelectedOption] = useState("2023");

  const selectedYear = (year) => {
    setSelectedOption(year);
  };

  const filteredExpenses = props.expenseItem.filter(
    (expense) => expense.date.getFullYear().toString() === selectedOption
  );

  let expensesContent =
    filteredExpenses.length === 0 ? (
      <p className="empty-list-message">No Expense Found !</p>
    ) : (
      filteredExpenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))
    );

  return (
    <Card className="expenses-container">
     
      <FilterByYear
        activeYear={selectedOption}
        onChangeDropdown={selectedYear}
      />
       <ExpenseChart filteredExpenseArray={filteredExpenses} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
