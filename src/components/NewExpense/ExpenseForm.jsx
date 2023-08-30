import { useState } from "react";
import "./NewExpense.css";

const ExpenseForm = (props) => {
  //USING MULTIPLE STATES
  const [enteredTitle, setEnteredTitle] = useState(""); //The enteredTitle will contain the updated value of title field
  const [enteredDate, setEnteredDate] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");

  const handleTitleChange = (event) => {
    setEnteredTitle(event.target.value);
  };

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value);
  };

  const handleDateChange = (event) => {
    setEnteredDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const enteredData = {
      title: enteredTitle,
      date: new Date(enteredDate),
      amount: enteredAmount,
    };

    props.onSendFormData(enteredData);

    setEnteredAmount("");
    setEnteredDate("");
    setEnteredTitle("");
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <div className="expense-form-field">
        <label>Title</label>
        <input type="text" value={enteredTitle} onChange={handleTitleChange} />
      </div>
      <div className="expense-form-field">
        <label>Amount</label>
        <input
          onChange={handleAmountChange}
          value={enteredAmount}
          type="number"
        />
      </div>
      <div className="expense-form-field">
        <label>Date</label>
        <input
          onChange={handleDateChange}
          type="date"
          value={enteredDate}
          min="2023-01-01"
          max="2023-08-31"
        />
      </div>
      <div className="form-button">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
