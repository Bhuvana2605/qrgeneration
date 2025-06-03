package com.qr.qrbackend.controller;

import com.qr.qrbackend.model.Employee;
import com.qr.qrbackend.service.QRService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.HttpStatus;


import java.util.Map;


@RestController
@RequestMapping("/api/qr")
public class QRController {

    @Autowired
    private QRService employeeService;

    private static final String VALID_PASSWORD = "root123"; // Change this!

    // Endpoint to generate encrypted QR string
    @GetMapping("/generate/{employeeId}")

    public ResponseEntity<String> generateEncryptedQR(@PathVariable Long employeeId) {
        try {
            String encrypted = employeeService.generateEncryptedQR(employeeId);

            return ResponseEntity.ok(encrypted);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("Error: " + e.getMessage());
        }
    }



    // Endpoint to decrypt and verify with password
    @PostMapping("/decrypt")
    public ResponseEntity<?> decryptData(@RequestBody Map<String, String> request) {
        System.out.println("Request received: " + request);
        String encryptedData = request.get("encryptedData");
        String password = request.get("password");

        if (!VALID_PASSWORD.equals(password)) {
            return ResponseEntity.status(403).body(Map.of("error", "Invalid password"));
        }

        try {
            Employee employee = employeeService.decryptEncryptedQR(encryptedData);
            return ResponseEntity.ok(employee);
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", "Decryption failed"));
        }
    }
}

