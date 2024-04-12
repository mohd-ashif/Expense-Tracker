import React, { useEffect } from 'react'
import styled from 'styled-components'
import InnerLayout from "../style/Layouts";
import { useGlobalContext } from '../Context/globalContext';
import Form from './Form.jsx';
import IncomeItem from './IncomeItems.jsx';

const Income = () => {

  const { addIncome, incomes  , deleteIncome, totalIncome} = useGlobalContext()

  useEffect(() => {
    
  
  },[incomes] )
  
  
  return (
    <IncomeStyled>
        <InnerLayout>
         <h1>Incomes</h1>
         <h2 className='total-income'> Total Income <span>${totalIncome}</span></h2>
         <div className='income-content'>
          <div className="form-container">
          <Form /> 
          <br />
            <div className="inomes">
              {incomes.map((incomes)=> {
                const {_id, title , amount,date, category ,type, description , totalIncome} = incomes
                     return <IncomeItem 
                     
                     key={_id}  
                     id={_id} 
                     title= {title}
                     description={description} 
                     amount={amount} 
                     date={date} 
                     type={type} 
                     category={category}
                     deleteItem={deleteIncome} 
                     
                     />
              })}

            </div>
          </div>
             
         </div>
        </InnerLayout>
    </IncomeStyled>
  )
}
const IncomeStyled = styled.div`
display: flex;
overflow: auto;
.total-income{
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
    span{
        font-size: 2.5rem;
        font-weight: 800;
        color: var(--color-green);
    }
}

`;
export default Income;