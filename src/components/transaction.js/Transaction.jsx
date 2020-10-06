import React from 'react'

export const Transaction = ({ transaction: { amount, text } }) => {
    const sign = amount < 0 ? '-' : '+';

    return (
        <li className="minus">
            {text} <span>{sign}€{amount}</span><button className="delete-btn">x</button>
        </li>
    )
}
