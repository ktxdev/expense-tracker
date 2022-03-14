package com.example.expensetracker.transactions;

import lombok.RequiredArgsConstructor;
import lombok.val;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@CrossOrigin
@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/transactions")
public class TransactionRestController {

    private final TransactionService transactionService;

    @PostMapping
    public ResponseEntity<Transaction> create(
            @RequestBody TransactionCreateDTO createDTO,
            HttpServletRequest request
    ) {
        val transaction = transactionService.create(createDTO);
        val uri = ServletUriComponentsBuilder.fromRequestUri(request)
                .path(String.format("/%d", transaction.getId()))
                .build().toUri();
        return ResponseEntity.created(uri).body(transaction);
    }

    @GetMapping
    public ResponseEntity<Page<Transaction>> findAll(
            @PageableDefault Pageable pageable,
            @RequestParam(name = "type", required = false) String type
    ) {
        return ResponseEntity.ok(transactionService.findAll(pageable, type));
    }

    @PutMapping("{id}")
    public ResponseEntity<Transaction> update(
            @PathVariable long id,
            @RequestBody TransactionUpdateDTO updateDTO
    ) {
        updateDTO.setId(id);
        return ResponseEntity.ok(transactionService.update(updateDTO));
    }

    @GetMapping("{id}")
    public ResponseEntity<Transaction> findById(
            @PathVariable long id
    ) {
        return ResponseEntity.ok(transactionService.findById(id));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Object> delete(
            @PathVariable long id
    ) {
        transactionService.delete(id);
        return ResponseEntity.noContent().build();
    }
}
