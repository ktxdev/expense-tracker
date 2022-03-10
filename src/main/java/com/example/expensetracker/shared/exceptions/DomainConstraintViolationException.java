package com.example.expensetracker.shared.exceptions;

import lombok.extern.slf4j.Slf4j;

import javax.validation.ConstraintViolation;
import javax.validation.ConstraintViolationException;
import java.util.Set;
import java.util.stream.Collectors;

@Slf4j
public class DomainConstraintViolationException extends ConstraintViolationException {
    public DomainConstraintViolationException(Set<? extends ConstraintViolation<?>> constraintViolations) {
        super(toString(constraintViolations), constraintViolations);
    }

    private static String toString(Set<? extends ConstraintViolation<?>> constraintViolations) {
        return constraintViolations.stream()
                .map( cv -> cv == null ? "null" : cv.getMessage() )
                .collect( Collectors.joining( ", \n" ) );
    }
}
