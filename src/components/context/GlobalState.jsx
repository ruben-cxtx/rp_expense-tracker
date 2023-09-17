import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
    transaction: [
        {id: 1}
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provide component
export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{ transactions: state.transaction }}>
            {children}
        </GlobalContext.Provider>
    )
}
