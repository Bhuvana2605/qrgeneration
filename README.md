#  Encrypted QR Code System

A full-stack web application to securely generate and scan QR codes for employee data using encryption.

---

## Tech Stack

- **Backend**: Java + Spring Boot (Spring MVC, Spring Data JPA)
- **Frontend**: React (JavaScript) + CSS
- **Database**: MySQL
- **Encryption**: AES + RSA hybrid encryption
- **QR Tools**: ZXing (Java), react-qr-scanner

---

##  Features

- Encrypts employee ID using AES, and AES key using RSA
- Generates a secure QR code for each employee
- Scans and decrypts QR codes via webcam in frontend
- Displays full employee details after decryption

---

## make sure to import sql file into your local system for the database

## Run the App

**Backend:**
```bash
cd backend
./mvnw spring-boot:run
```


**For frontend:**
```bash 
cd frontend
npm install
npm run dev
```

