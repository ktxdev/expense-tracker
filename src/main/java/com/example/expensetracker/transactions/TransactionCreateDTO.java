package com.example.expensetracker.transactions;

import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
public class TransactionCreateDTO {
    @NotNull(message = "Description should be provided")
    private String description;

    @Min(value = 0, message = "Amount should be equal or greater than 0")
    @NotNull(message = "Amount should be provided")
    private BigDecimal amount;


    @NotNull(message = "Transaction type should be provided")
    private TransactionType type;
}
