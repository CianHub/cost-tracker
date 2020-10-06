import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    let income = 0, expenses = 0;

    transactions.forEach(({ amount }) => {
        income = amount > 0 ? income + amount : income;
        expenses = amount < 0 ? expenses + amount : expenses;
    })

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">€{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">€{expenses}</p>
            </div>
        </div>
    )
}
