package com.ktxdev.expensetracker.transactions;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import java.math.BigDecimal;

@Data
public class TransactionUpdateDTO {
    @JsonIgnore
    private long id;

    private String description;

    private BigDecimal amount;

    private String type;
}
