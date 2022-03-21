import axios from "axios"

const BASE_URL = "https://ktxdev-expense-tracker.herokuapp.com/api/v1/dashboard"

export const getStatistics = async () => {
    return await axios.get(BASE_URL)
}