import { createContext, useContext, useState } from "react"
import Alert from "../components/Alert"

const AlertContext = createContext()

export const useAlert = () => {
    return useContext(AlertContext)
}

export const AlertProvider = ({ children }) => {
    const initAlertState = { show: false, message: '', error: false }
    const [alertState, setAlertState] = useState(initAlertState)

    const showSuccess = (message) => {
        showAlert(message)
    }

    const showError = (message) => {
        showAlert(message, true)
    }

    const showAlert = (message, isError = false) => {
        setAlertState({ show: true, message, error: isError })
        setTimeout(() => {
            setAlertState(initAlertState)
        }, 3000);
    }

    const hideAlert = () => {
        setAlertState(initAlertState)
    }

    return (
        <AlertContext.Provider value={{ showSuccess, showError }}>
            {alertState.show && <Alert message={alertState.message} isError={alertState.error} onClose={hideAlert} />}
            {children}
        </AlertContext.Provider>
    )
}