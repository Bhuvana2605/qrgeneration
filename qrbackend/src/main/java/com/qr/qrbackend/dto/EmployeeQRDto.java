package com.qr.qrbackend.dto;

public class EmployeeQRDto {
    private Long id;
    private String name;
    private String profession;
    private String organisation;
    private String validFrom;
    private String validTo;
    private String gate;
    private String shift;
    private String encryptedId;

    public EmployeeQRDto(Long id, String name, String profession, String organisation,
                         String validFrom, String validTo, String gate, String shift,
                         String encryptedId) {
        this.id = id;
        this.name = name;
        this.profession = profession;
        this.organisation = organisation;
        this.validFrom = validFrom;
        this.validTo = validTo;
        this.gate = gate;
        this.shift = shift;
        this.encryptedId = encryptedId;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getProfession() { return profession; }
    public String getOrganisation() { return organisation; }
    public String getValidFrom() { return validFrom; }
    public String getValidTo() { return validTo; }
    public String getGate() { return gate; }
    public String getShift() { return shift; }
    public String getEncryptedId() { return encryptedId; }
}

