import { createContext, useContext, useReducer } from "react";

//for creating react global context
export const StateContext = createContext();

//build a provider for wrapping entire application with the provider to get access to entire app state
export const StateProvider = ({ reducer, initialState, children }) => {
    return <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
}

//this is how we use it in component
export const useStateValue = () => useContext(StateContext)