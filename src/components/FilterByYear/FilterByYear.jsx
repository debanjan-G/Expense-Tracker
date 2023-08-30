import "./FilterByYear.css";

const FilterByYear = (props) => {
  const handleChange = (event) => {
    props.onChangeDropdown(event.target.value);
  };

  return (
    <div className="filter-items">
      <p>Filter By Year</p>
      <select
        name="expenseYear"
        value={props.activeYear}
        onChange={handleChange}
      >
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default FilterByYear;
