import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenses.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expense) => {
        const { id, title, amount, date } = expense;
        return (
          <ExpenseItem key={id} title={title} amount={amount} date={date} />
        );
      })}
    </ul>
  );
};
export default ExpensesList;
