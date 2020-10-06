import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    const income = transactions.map((transaction) => transaction > 0)
    const expenses = transactions.map((transaction) => transaction < 0)


    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">€{income}</p>
            </div>
            <div>
                <h4>Expenses</h4>
                <p className="money minus">-€{expenses}</p>
            </div>
        </div>
    )
}
