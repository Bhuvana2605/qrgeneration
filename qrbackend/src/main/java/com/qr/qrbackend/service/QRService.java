package com.qr.qrbackend.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.qr.qrbackend.model.Employee;
import com.qr.qrbackend.repository.EmployeeRepository;
import com.qr.qrbackend.util.RsaUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.Optional;

@Service
public class QRService {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private ObjectMapper objectMapper;

    private RsaUtil rsaUtil;

    public QRService() {
        try {
            this.rsaUtil = new RsaUtil(); // wrap in try-catch to handle checked exception
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException("Failed to initialize RSA Util", e);
        }
    }

    public String generateEncryptedQR(Long id) throws Exception {
        Optional<Employee> optionalEmployee = employeeRepository.findById(id);
        if (optionalEmployee.isEmpty()) {
            throw new Exception("Employee not found");
        }
        Employee employee = optionalEmployee.get();
        String json = objectMapper.writeValueAsString(employee);
        return rsaUtil.encryptWithPrivateKey(json);
    }

    public Employee decryptEncryptedQR(String encryptedData) throws Exception {
        String decryptedJson = rsaUtil.decryptWithPublicKey(encryptedData);
        System.out.println("Decrypted JSON: " + decryptedJson);  // <-- Add this line
        return objectMapper.readValue(decryptedJson, Employee.class);
    }

}
