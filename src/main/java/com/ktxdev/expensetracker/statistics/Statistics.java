package com.ktxdev.expensetracker.statistics;

import com.ktxdev.expensetracker.shared.utils.AmountSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Statistics {

    private long totalTransactions;

    @JsonSerialize(using = AmountSerializer.class)
    private BigDecimal balance;

    @JsonSerialize(using = AmountSerializer.class)
    private BigDecimal totalIncome;

    @JsonSerialize(using = AmountSerializer.class)
    private BigDecimal totalExpenses;
}
