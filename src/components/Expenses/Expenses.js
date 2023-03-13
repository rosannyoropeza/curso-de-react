
import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = (selectYear)=> {
    setFilteredYear(selectYear);
  }

  return <Card className="expenses">
    <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      { 
        props.expenses.map(item => 
          <ExpenseItem 
            expenseDate={item.date} 
            expenseTitle={item.title} 
            expenseAmount={item.amount}
          />
        )
      }
  </Card>
  
}

export default Expenses;