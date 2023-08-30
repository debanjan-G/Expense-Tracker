import "./styles.css";
import Expenses from "./components/Expenses/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const expenses = [
  {
    id: "e1",
    title: "Restuarant Expenses",
    amount: "2000",
    date: new Date(2023, 7, 15),
  },
  {
    id: "e2",
    title: "Electricity Bill",
    amount: "10000",
    date: new Date(2023, 8, 3),
  },
  { id: "e3", title: "Shopping", amount: "5000", date: new Date(2023, 8, 15) },
  {
    id: "e4",
    title: "Medicines",
    amount: "1500",
    date: new Date(2022, 9, 3),
  },
  { id: "e5", title: "Gifts", amount: "1000", date: new Date(2021, 10, 12) },
  { id: "e6", title: "Gym Fees", amount: "600", date: new Date(2021, 11, 25) },
];

const App = () => {
  const [enteredExpenseItems, setEnteredExpenseItems] = useState(expenses);

  const newExpenseData = (data) => {
    //The 'data' argument actually contains the new expense object entered by user
    setEnteredExpenseItems((prev) => [data, ...prev]);
  };
  return (
    <div>
      <NewExpense onSendDataToApp={newExpenseData} />
      <Expenses expenseItem={enteredExpenseItems} />
    </div>
  );
};

export default App;
