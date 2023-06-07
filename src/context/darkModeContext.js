import { createContext, useEffect, useReducer, useState } from "react";
import DarkModeReducer from "./darkModeReducer";
import Cookies from "js-cookie";

const INITIAL_STATE = {
    darkMode: false,
}


export const DarkModeContext = createContext(INITIAL_STATE)

export const DarkModeContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(DarkModeReducer, INITIAL_STATE);
    const [isLogged, setIsLogged] = useState(false)
    const [shownModal, setShownModal] = useState(false);   

    
    return (
        <DarkModeContext.Provider value={{
            darkMode: state.darkMode,
            dispatch,
            setIsLogged,
            isLogged,
            setShownModal,
            shownModal

        }}>
            {children}
        </DarkModeContext.Provider>
    )
} 