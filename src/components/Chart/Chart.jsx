import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.expenseArray.map((obj) => obj.value);
  const maxAmount = Math.max(...valueArray);
  console.log(typeof maxAmount); 


  return (
    <div className="chart">
      {props.expenseArray.map((dataObject) => (
        <ChartBar
          key={dataObject.id}
          value={dataObject.value}
          label={dataObject.label}
          maxValue={maxAmount}
        />
      ))}
    </div>
  );
};

export default Chart;
