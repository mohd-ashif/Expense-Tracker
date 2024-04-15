import React, { useContext, useState, useEffect } from "react";
import axios from 'axios';

const BASE_URL = "http://localhost:5000/api/v1/";

const GlobalContext = React.createContext();

export const GlobalProvider = ({ children }) => {
    const [incomes, setIncomes] = useState([]);
    const [expenses , setExpenses] = useState([])
    const [error, setError] = useState(null);

    // Calculate total income
    const calculateTotalIncome = (incomes) => {
        let totalIncome = 0;
        incomes.forEach((income) => {
            totalIncome += income.amount;
        });
        return totalIncome;
    };

    // Fetch income data
    useEffect(() => {
        const fetchIncomeData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}get-incomes`);
                setIncomes(response.data);
            } catch (error) {
                setError(error.response.data.message);
            }
        };

        fetchIncomeData();
    }, []);

    // Add income
    const addIncome = async (income) => {
        try {
            await axios.post(`${BASE_URL}add-income`, income);
            
            const response = await axios.get(`${BASE_URL}get-incomes`);
            setIncomes(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    // Delete income
    const deleteIncome = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-income/${id}`);
           
            const response = await axios.get(`${BASE_URL}get-incomes`);
            setIncomes(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    // Calculate total income
    const totalIncome = calculateTotalIncome(incomes);


    // Calculate total expenses
    const calculateTotalExpenses = (expenses) => {
        let totalExpense = 0;
        expenses.forEach((expense) => {
            totalExpense += expense.amount;
        });
        return totalExpense;
    };

    // Fetch expense data
    useEffect(() => {
        const fetchExpenseData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}get-expense`);
                setExpenses(response.data);
            } catch (error) {
                setError(error.response.data.message);
            }
        };

        fetchExpenseData();
    }, []);

    // Add expense
    const addExpense = async (expense) => {
        try {
            await axios.post(`${BASE_URL}add-expense`, expense);
            
            const response = await axios.get(`${BASE_URL}get-expense`); 
            setExpenses(response.data); 
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    // Delete expense
    const deleteExpense = async (id) => {
        try {
            await axios.delete(`${BASE_URL}delete-expense/${id}`);
           
            const response = await axios.get(`${BASE_URL}get-expense`);
            setExpenses(response.data);
        } catch (error) {
            setError(error.response.data.message);
        }
    };

    // Calculate total expenses
    const totalExpense = calculateTotalExpenses(expenses);


    //Calculate Balance 
    const totalBalance = ()=> {
        return totalIncome - totalExpense

    }
    const transactionHistory = () => {
        const history = [...incomes, ...expenses];
        history.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
        });
        return history; 
    };
    
    
  
    
    return (
        <GlobalContext.Provider value={{ addIncome, incomes, deleteIncome, totalIncome , expenses , addExpense ,  deleteExpense , totalExpense , totalBalance , transactionHistory}}>
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
