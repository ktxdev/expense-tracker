package com.ktxdev.expensetracker.transactions;

import com.ktxdev.expensetracker.shared.utils.AmountSerializer;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.*;

import javax.persistence.*;
import java.math.BigDecimal;

import static java.util.Objects.nonNull;

@Data
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(nullable = false)
    private String description;

    @Column(nullable = false)
    @JsonSerialize(using = AmountSerializer.class)
    private BigDecimal amount;

    @Enumerated(EnumType.STRING)
    private TransactionType type;

    public void update(TransactionUpdateDTO transactionUpdateDTO) {
        if (nonNull(transactionUpdateDTO.getDescription())) this.setDescription(transactionUpdateDTO.getDescription());
        if (nonNull(transactionUpdateDTO.getAmount())) this.setAmount(transactionUpdateDTO.getAmount());
        if (nonNull(transactionUpdateDTO.getType())) {
            val type = TransactionType.valueOf(transactionUpdateDTO.getType());
            this.setType(type);
        };
    }

    public static Transaction fromDTO(TransactionCreateDTO transactionCreateDTO) {
        return Transaction.builder()
                .description(transactionCreateDTO.getDescription())
                .amount(transactionCreateDTO.getAmount())
                .type(transactionCreateDTO.getType())
                .build();
    }
}
