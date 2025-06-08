package com.qr.qrbackend.controller;

import com.qr.qrbackend.model.Employee;
import com.qr.qrbackend.repository.EmployeeRepository;
import com.qr.qrbackend.service.QRService;
import com.qr.qrbackend.dto.EmployeeQRDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Autowired
    private QRService qrService;

    // GET /api/employees - return list of all employees with encrypted ID
    @GetMapping("/employees")
    public ResponseEntity<List<EmployeeQRDto>> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();
        List<EmployeeQRDto> dtoList = new ArrayList<>();

        for (Employee emp : employees) {
            try {
                String encryptedId = qrService.generateEncryptedQR(emp.getId());

                EmployeeQRDto dto = new EmployeeQRDto(
                        emp.getId(),
                        emp.getName(),
                        emp.getProfession(),
                        emp.getOrganisation(),
                        emp.getValidFrom().toString(),
                        emp.getValidTo().toString(),
                        emp.getGate(),
                        emp.getShift(),
                        encryptedId
                );

                dtoList.add(dto);
            } catch (Exception e) {
                System.err.println("Failed to encrypt ID for employee: " + emp.getId());
            }
        }

        return ResponseEntity.ok(dtoList);
    }
}
