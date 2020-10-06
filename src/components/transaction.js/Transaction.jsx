import React from 'react'

export const Transaction = ({ transaction: { amount, text } }) => {
    const sign = amount < 0 ? '-' : '+';

    return (
        <li className={amount < 0 ? 'minus' : 'plus'}>
            {text} <span>{sign}€{Math.abs(amount)}</span><button className="delete-btn">x</button>
        </li>
    )
}
