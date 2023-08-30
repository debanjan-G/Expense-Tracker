import Chart from "../Chart/Chart";

const ExpenseChart = (props) => {
  const chartDataArray = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  for (const expense of props.filteredExpenseArray) {
    let amountInNumber = parseInt(expense.amount);
    const expenseMonth = expense.date.getMonth();
    chartDataArray[expenseMonth].value += amountInNumber;
    // console.log(typeof(expense.amount));
  }

  return <Chart expenseArray={chartDataArray} />;
};

export default ExpenseChart;
