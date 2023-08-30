import Card from "../../UI/Card/Card";
import "./ExpenseDate.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { year: "numeric" });
  const day = props.date.toLocaleString("en-US", { day: "numeric" });
  return (
    <Card className="expense-date">
      <h3 className="expense-date__month">{month}</h3>
      <h4 className="expense-date__year">{year}</h4>
      <h1 className="expense-date__day">{day}</h1>
    </Card>
  );
};

export default ExpenseDate;
