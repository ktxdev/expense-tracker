import { createContext, useContext, useState } from "react";
import Loading from "../components/Loading";


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
        <SpinnerContext.Provider value={{ showSpinner, hideSpinner }}>
            {isLoading && <Loading />}
            {children}
        </SpinnerContext.Provider>
    )
}