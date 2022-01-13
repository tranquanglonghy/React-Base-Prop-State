import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

const NewExpense = (props) => {
  const [formState, setFormState] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const setForm = ()=>{
    (formState === true) ? setFormState(false) : setFormState(true); 
  }

  let formContent =
    formState === true ? (
      <ExpenseForm onHideForm={setForm} onSaveExpenseData={saveExpenseDataHandler} />
    ) : (
      <button onClick={setForm}>Add New Expense</button>
    );

  return (
    <div className="new-expense">
      {formContent}
    </div>
    );
};

export default NewExpense;
