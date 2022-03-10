package com.example.expensetracker.transactions;

import com.example.expensetracker.shared.RecordNotFoundException;
import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import static java.util.Objects.nonNull;

@Service
@RequiredArgsConstructor
public class TransactionServiceImpl implements TransactionService {

    private final TransactionDAO transactionDAO;

    @Override
    public Transaction create(TransactionCreateDTO transactionCreateDTO) {
        val transaction = Transaction.fromDTO(transactionCreateDTO);
        return transactionDAO.save(transaction);
    }

    @Override
    public Transaction update(TransactionUpdateDTO transactionUpdateDTO) {
        val transaction = findById(transactionUpdateDTO.getId());
        transaction.update(transactionUpdateDTO);
        return transactionDAO.save(transaction);
    }

    @Override
    public Page<Transaction> findAll(Pageable pageable, String type) {
        if (nonNull(type)) {
            val transactionType = TransactionType.valueOf(type.toUpperCase());
            return transactionDAO.findAllByType(pageable, transactionType);
        }
        return transactionDAO.findAll(pageable);
    }

    @Override
    public Transaction findById(long id) {
        return transactionDAO.findById(id)
                .orElseThrow(() -> new RecordNotFoundException(String.format("Transaction with id: %d not found", id)));
    }

    @Override
    public void delete(long id) {
        val transaction = findById(id);
        transactionDAO.delete(transaction);
    }
}
