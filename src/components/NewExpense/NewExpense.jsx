import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  let keyValue = 7;
  const formData = (data) => {
    const userData = {
      ...data,
      id: "e" + keyValue++,
    };
    props.onSendDataToApp(userData);
  };

  return (
    <div className="new_expense">
      <ExpenseForm onSendFormData={formData} />
    </div>
  );
};

export default NewExpense;
