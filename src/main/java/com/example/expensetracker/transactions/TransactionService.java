package com.example.expensetracker.transactions;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface TransactionService {
    Transaction create(TransactionCreateDTO transactionCreateDTO);

    Transaction update(TransactionUpdateDTO transactionUpdateDTO);

    Page<Transaction> findAll(Pageable pageable, String type);

    Transaction findById(long id);

    void delete(long id);
}
