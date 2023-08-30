import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../../UI/Card/Card";

const ExpenseItem = (props) => {
  return (
    <Card className="container">
      <ExpenseDate date={props.date} />
      <div className="item-description">{props.title}</div>
      <div className="item-price">
        <button className="btn">{"₹"+props.amount}</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;
