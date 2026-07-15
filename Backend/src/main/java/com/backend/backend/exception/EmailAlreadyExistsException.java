package com.backend.backend.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

public class EmailAlreadyExistsException  extends RuntimeException{
    public EmailAlreadyExistsException(String message) {
        super(message);
    }



}
