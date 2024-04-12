import React from 'react';
import styled from 'styled-components';
import  InnerLayout  from '../style/Layouts'; // Corrected import path

const ExpensesStyled = styled.div`
  /* Add your styles here */
`;

const Expenses = () => {
  return (
    <ExpensesStyled>
      <InnerLayout>
        Expenses
      </InnerLayout>
    </ExpensesStyled>
  );
};

export default Expenses;
