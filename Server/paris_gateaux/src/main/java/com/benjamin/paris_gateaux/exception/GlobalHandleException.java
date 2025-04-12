package com.benjamin.paris_gateaux.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.util.HashMap;
import java.util.Map;

@ControllerAdvice
public class GlobalHandleException {

	@ExceptionHandler(ResourceNotFoundException.class)
	public ResponseEntity<?> resourceNotFound(ResourceNotFoundException e) {
		Map<String, String> error = new HashMap<>();
		error.put("message", "Resource not found");
		error.put("error details", e.getMessage());
		return ResponseEntity.badRequest().body(error);
	}
}
