package com.qr.qrbackend.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "employee")
public class Employee {

    @Id
    private Long id;

    private String name;
    private String profession;
    private String organisation;

    private LocalDate validFrom;
    private LocalDate validTo;

    private String gate;
    private String shift;

    // Constructors
    public Employee() {}

    public Employee(Long id, String name, String profession, String organisation,
                    LocalDate validFrom, LocalDate validTo,
                    String gate, String shift) {
        this.id = id;
        this.name = name;
        this.profession = profession;
        this.organisation = organisation;
        this.validFrom = validFrom;
        this.validTo = validTo;
        this.gate = gate;
        this.shift = shift;
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getProfession() {
        return profession;
    }

    public void setProfession(String profession) {
        this.profession = profession;
    }

    public String getOrganisation() {
        return organisation;
    }

    public void setOrganisation(String organisation) {
        this.organisation = organisation;
    }

    public LocalDate getValidFrom() {
        return validFrom;
    }

    public void setValidFrom(LocalDate validFrom) {
        this.validFrom = validFrom;
    }

    public LocalDate getValidTo() {
        return validTo;
    }

    public void setValidTo(LocalDate validTo) {
        this.validTo = validTo;
    }

    public String getGate() {
        return gate;
    }

    public void setGate(String gate) {
        this.gate = gate;
    }

    public String getShift() {
        return shift;
    }

    public void setShift(String shift) {
        this.shift = shift;
    }
}
