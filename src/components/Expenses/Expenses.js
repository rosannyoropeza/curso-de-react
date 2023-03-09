
import React from 'react';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = (props) => {

  return <Card className="expenses">
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