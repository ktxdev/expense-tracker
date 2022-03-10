package com.example.expensetracker.transactions;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TransactionDAO extends JpaRepository<Transaction, Long> {
    Page<Transaction> findAllByType(Pageable pageable, TransactionType type);
}
