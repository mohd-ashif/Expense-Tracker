import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import InnerLayout from '../style/Layouts';
import Chart from './Chart';
import { dollar } from '../utils/icons';
import { useGlobalContext } from '../Context/globalContext';



const Dashboard = () => {

  const {totalIncome , totalExpense , totalBalance , incomes , expenses} = useGlobalContext();

 
  

 
 
  return (
    <DashboardStyled>

      <InnerLayout>
        <h1>All Transactions </h1>
        <div className="stats-con">
          <div className="chart-con">
            <Chart />

            <div className="amount-con">
              <div className="income">
                <h2>Total income</h2>
                <p>
                  {dollar} {totalIncome} 
                </p>
              </div>

              <div className="expense">
                <h2>Total Expenses</h2>
                <p>{dollar} {totalExpense}</p>
              </div>
                 <div className="balance">
                  <h2>Total Balance </h2>
                  <p>{dollar} {totalBalance()}</p>
                 </div>

            </div>
          </div>
        </div>
      </InnerLayout>
    </DashboardStyled>
  )
}
const DashboardStyled = styled.div`
.stats-con{
  display: flex;
  gap: 2rem;
  .chart-con{

      height: 400px;
      .amount-con{
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-top: 2rem;
          .income, .expense{
              grid-column: span 2;
          }
          .income, .expense, .balance{
              background: #FCF6F9;
              border: 2px solid #FFFFFF;
              box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
              border-radius: 20px;
              padding: 1rem;
              p{
                  font-size: 3.5rem;
                  font-weight: 700;
              }
          }

          .balance{
              grid-column: 2 / 4;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              p{
                  color: var(--color-green);
                  opacity: 0.6;
                  font-size: 4.5rem;
              }
          }
      }
  }

`;
export default Dashboard