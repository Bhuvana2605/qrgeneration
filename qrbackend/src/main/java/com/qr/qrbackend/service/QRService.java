package com.qr.qrbackend.service;

import com.qr.qrbackend.model.Employee;
import com.qr.qrbackend.repository.EmployeeRepository;
import com.qr.qrbackend.util.RsaUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class QRService {

    @Autowired
    private EmployeeRepository employeeRepository;

    private RsaUtil rsaUtil;

    public QRService() throws Exception {
        rsaUtil = new RsaUtil();
    }

    // Encrypt only employee ID to generate QR content
    public String generateEncryptedQR(Long employeeId) throws Exception {
        if (!employeeRepository.existsById(employeeId)) {
            throw new Exception("Employee not found");
        }
        String idString = employeeId.toString();
        // Encrypt employee ID string with RSA private key
        return rsaUtil.encryptWithPrivateKey(idString);
    }

    // Decrypt encrypted QR string, get employee ID, fetch employee details
    public Employee decryptEncryptedQR(String encryptedData) throws Exception {
        String decryptedIdStr = rsaUtil.decryptWithPublicKey(encryptedData);
        Long employeeId = Long.parseLong(decryptedIdStr);

        return employeeRepository.findById(employeeId)
                .orElseThrow(() -> new Exception("Employee not found"));
    }
}
