import { createContext, useReducer, useState } from "react";
import DarkModeReducer from "./darkModeReducer";

const INITIAL_STATE = {
    darkMode: false,
}


export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
    const [isLogged, setIsLogged] = useState(false)


    return (
        <DarkModeContext.Provider value={{
            darkMode: state.darkMode,
            dispatch,
            setIsLogged,
            isLogged

        }}>
            {children}
        </DarkModeContext.Provider>
    )
} 