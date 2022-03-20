import axios from "axios"

const BASE_URL = "https://ktxdev-expense-tracker.herokuapp.com/api/v1/transactions"

export const fetchAllTransactions = async (page = 0, size = 10, type = '') => {
    const url = `${BASE_URL}?page=${page}&size=${size}${type !== '' && `&type=${type}`}`
    return await axios.get(url)
}

export const fetchTransactionById = async (id) => {
    const url = `${BASE_URL}/${id}`
    return await axios.get(url)
}

export const addTransaction = async (transaction) => {
    const url = `${BASE_URL}`
    return await axios.post(url, transaction)
}

export const updateTransaction = async (transaction) => {
    const url = `${BASE_URL}/${transaction.id}`
    return await axios.put(url, transaction)
}

export const deleteTransaction = async (id) => {
    const url = `${BASE_URL}/${id}`
    return await axios.delete(url)
}

