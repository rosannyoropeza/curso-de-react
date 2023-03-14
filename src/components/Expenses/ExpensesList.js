import React from "react";

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {

  if (props.items.length === 0) { 
    return <h2 className="expenses-list__fallback">Found no expenses. </h2>;
  }

  return (
    <ul className="expenses-list">
        {
            props.items.map((item) => ( 
                <ExpenseItem 
                    key={item.id}
                    expenseDate={item.date} 
                    expenseTitle={item.title} 
                    expenseAmount={item.amount}
                />
            ))
        }
    </ul>
  );
}

export default ExpensesList;