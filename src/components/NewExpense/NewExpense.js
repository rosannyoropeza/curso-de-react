import React,{useState} from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
    const[isEditing, setIdEditing] = useState(false);

    const saveExpenseData = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        //Funcion para enviar mis datos enriquecidos al componente padre.
        props.onAddExpense(expenseData);
        setIdEditing(false);
    };

    const startEditingHandler = () => {
        setIdEditing(true);
    };

    const stopEditingHandler = () => {
        setIdEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseData} onCancel={stopEditingHandler}/>}
        </div>
    );

}

export default NewExpense;