import React from 'react';
import styled from 'styled-components';
import { useGlobalContext } from '../Context/globalContext';
import InnerLayout from '../style/Layouts'; 

const History = () => {
    const { transactionHistory, incomes, expenses } = useGlobalContext();

    const history = transactionHistory();

    return (
        <HistoryStyled>
            <InnerLayout>

       
            <h2>Recent History</h2>
            {history.map((item) => {
                const { _id, title, amount, type } = item;
                return (
                    <div key={_id} className="history-item">
                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {title}
                        </p>

                        <p style={{
                            color: type === 'expense' ? 'red' : 'var(--color-green)'
                        }}>
                            {
                                type === 'expense' ? `-${amount <= 0 ? 0 : amount}` : `+${amount <= 0 ? 0 : amount}`
                            }
                        </p>
                    </div>
                );
            })}
            <div className="history-con">
            <h2 className='salary-title'> Min <span> Salary</span> Max </h2>
            <div className="salary-item">
           
                <p>
                    {Math.min(...incomes.map(item => item.amount))}
                </p>
                <p> 
                    {Math.max(...incomes.map(item => item.amount))}
                </p>
            </div>
            <h2 className='salary-title'> Min <span>Expense</span> Max </h2>
            <div className="salary-item">
                <p>
                    {Math.min(...expenses.map(item => item.amount))}
                </p>
                <p>
                    {Math.max(...expenses.map(item => item.amount))}
                </p>
            </div>
            </div>
            </InnerLayout>
        </HistoryStyled>
    );
};


const HistoryStyled = styled.div`
    display: flex;
    flex-direction: column;
   
    gap: 1rem;
    .history-item{
        
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .salary-container {
  display: flex;
  flex-direction: column;
  gap:5px;
  align-items: center;
}

.salary-title{
    font-size: 1.2rem;
    span{
        font-size: 1.8rem;
    }
}.history-con{
    grid-column: 4 / -1;
    h2{
        margin: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
   
    .salary-item{
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        padding: 1rem;
        border-radius: 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        p{
            font-weight: 600;
            font-size: 1.6rem;
            
        }
    }
}
}
`;


export default History;
