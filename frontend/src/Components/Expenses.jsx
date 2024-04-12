import React, { useEffect } from 'react';
import styled from 'styled-components';
import InnerLayout from "../style/Layouts";
import { useGlobalContext } from '../Context/globalContext';
import IncomeItem from './IncomeItems.jsx';
import ExpenseForm from './ExpenseForm.jsx';

const Expenses = () => {

  const { expenses, deleteExpense, totalExpense } = useGlobalContext();

  useEffect(() => {
   
  }, [expenses]);

  return (
    <ExpenseStyled>
      <InnerLayout> 
        <h1>Expenses</h1>
        <h2 className='total-expense'>Total Expense <span>${totalExpense}</span></h2>
        <div className='expense-content'>
          <div className="form-container">
            <ExpenseForm /> 
            <br />
            <div className="expense">
              {expenses.map((expense) => ( 
                     
                <IncomeItem 
                  key={expense._id}  
                  id={expense._id} 
                  title={expense.title}
                  description={expense.description} 
                  amount={expense.amount} 
                  date={expense.date} 
                  category={expense.category}
                  deleteItem={deleteExpense} 
                />
              ))}
            </div>
          </div>
        </div>
      </InnerLayout>
    </ExpenseStyled>
  );
};

const ExpenseStyled = styled.div`
  display: flex;
  overflow: auto;
  .total-expense {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: 1rem;
    margin: 1rem 0;
    font-size: 2rem;
    gap: .5rem;
    span {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--color-green);
    }
  }
`;

export default Expenses;
