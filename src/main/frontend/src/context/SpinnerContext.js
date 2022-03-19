import { createContext, useContext, useState } from "react";


const SpinnerContext = createContext();

export const useSpinner = () => {
    return useContext(SpinnerContext)
}

export const SpinnerProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(false)

    const showSpinner = () => {
        setIsLoading(true)
    }

    const hideSpinner = () => {
        setIsLoading(false)
    }

    return (
        <SpinnerContext.Provider value={{isLoading, showSpinner, hideSpinner}}>
            {children}
        </SpinnerContext.Provider>
    )
}