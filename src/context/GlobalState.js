import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
}

// Starting app context
// Adds .Provider
export const GlobalContext = createContext(initialState)

// Provides the context to the app
// Wraps the app
export const GlobalProvider = () => ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Adds value prop
    //
    return <GlobalContext.Provider value={{ transactions: state.transactions }}>{children}</GlobalContext.Provider>
}