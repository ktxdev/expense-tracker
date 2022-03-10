package com.example.expensetracker.shared.validations;

import com.example.expensetracker.shared.exceptions.DomainConstraintViolationException;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.HashSet;
import java.util.Set;

public class Validations {
    public static <T> void validate(T t) {
        ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
        Validator validator = factory.getValidator();

        Set<ConstraintViolation<T>> violations = validator.validate(t);
        if (!violations.isEmpty()) {
            throw new DomainConstraintViolationException(new HashSet<ConstraintViolation<?>>(violations));
        }
    }
}
