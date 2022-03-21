package com.ktxdev.expensetracker.statistics;

import com.ktxdev.expensetracker.transactions.TransactionDAO;
import com.ktxdev.expensetracker.transactions.TransactionType;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class StatisticsServiceImpl implements StatisticsService {

    private final TransactionDAO transactionDAO;

    @Override
    public Statistics getStatistics() {
        val transactions = transactionDAO.findAll();

        val totalExpenses = transactions.stream()
                .filter(transaction -> transaction.getType().equals(TransactionType.EXPENSE))
                .mapToDouble(t -> t.getAmount().doubleValue())
                .sum();

        val totalIncome = transactions.stream()
                .filter(transaction -> transaction.getType().equals(TransactionType.INCOME))
                .mapToDouble(t -> t.getAmount().doubleValue())
                .sum();

        return Statistics.builder()
                .totalTransactions(transactions.size())
                .totalIncome(BigDecimal.valueOf(totalIncome))
                .totalExpenses(BigDecimal.valueOf(totalExpenses))
                .balance(BigDecimal.valueOf(totalIncome - totalExpenses))
                .build();
    }
}
