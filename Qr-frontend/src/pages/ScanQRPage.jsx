import React, { useEffect, useRef, useState } from "react";
import { Html5Qrcode } from "html5-qrcode";

function ScanQRPage() {
  const [qrData, setQrData] = useState("");
  const [password, setPassword] = useState("");
  const [employee, setEmployee] = useState(null);
  const [error, setError] = useState("");
  const html5QrCodeRef = useRef(null);

  useEffect(() => {
    const qrRegionId = "qr-reader";
    let isMounted = true;

    setTimeout(() => {
      if (!isMounted) return;
      const qrReaderElem = document.getElementById(qrRegionId);
      if (!qrReaderElem) return;

      html5QrCodeRef.current = new Html5Qrcode(qrRegionId);
      Html5Qrcode.getCameras().then((devices) => {
        if (devices && devices.length) {
          html5QrCodeRef.current
            .start(
              { facingMode: "environment" },
              { fps: 10, qrbox: 250 },
              (decodedText) => {
                setQrData(decodedText);
              },
              (err) => {
                // ignore scan errors
              }
            )
            .catch((err) => setError("Camera error: " + err));
        } else {
          setError("No camera found");
        }
      });
    }, 100);

    return () => {
      isMounted = false;
      if (html5QrCodeRef.current) {
        html5QrCodeRef.current
          .stop()
          .catch(() => {})
          .finally(() => {
            html5QrCodeRef.current.clear().catch(() => {});
          });
      }
    };
  }, []);

  const handleDecrypt = () => {
    if (!qrData || !password) {
      setError("Both encrypted data and password are required");
      return;
    }

    setError("");
    fetch("http://localhost:8080/api/qr/decrypt", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ encryptedData: qrData, password }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Decryption failed");
        return res.json();
      })
      .then((data) => {
        setEmployee(data);
        setError("");
      })
      .catch(() => {
        setEmployee(null);
        setError("Invalid QR data or password");
      });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Scan or Paste Encrypted QR Code</h2>
      <div id="qr-reader" style={{ width: 350, margin: "0 auto" }}></div>

      <div style={{ marginTop: "20px" }}>
        <label><strong>Or paste encrypted string manually:</strong></label>
        <textarea
          rows={4}
          style={{ width: "100%", marginTop: "5px" }}
          placeholder="Paste encrypted QR data here..."
          value={qrData}
          onChange={(e) => setQrData(e.target.value)}
        />
      </div>

      <div style={{ marginTop: "10px" }}>
        <input
          type="password"
          placeholder="Enter password to decrypt"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "10px" }}
        />
        <button onClick={handleDecrypt}>Decrypt</button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {employee && (
        <div style={{ marginTop: "20px" }}>
          <h3>Employee Details</h3>
          <p><strong>ID:</strong> {employee.id}</p>
          <p><strong>Name:</strong> {employee.name}</p>
          <p><strong>Profession:</strong> {employee.profession}</p>
          <p><strong>Organisation:</strong> {employee.organisation}</p>
          <p><strong>Valid From:</strong> {employee.validFrom}</p>
          <p><strong>Valid To:</strong> {employee.validTo}</p>
          <p><strong>Gate:</strong> {employee.gate}</p>
          <p><strong>Shift:</strong> {employee.shift}</p>
        </div>
      )}
    </div>
  );
}

export default ScanQRPage;
// This component allows users to scan a QR code or paste an encrypted string,
// enter a password to decrypt it, and view employee details.