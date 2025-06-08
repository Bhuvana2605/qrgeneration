import React, { useEffect, useState, useRef } from "react";
import QRCode from "qrcode";
import './Home.css';

export default function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [encryptedStrings, setEncryptedStrings] = useState({});
  const qrRefs = useRef({});

  // Fetch employee list and encrypted strings
  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch employees");
        return res.json();
      })
      .then(async data => {
        setEmployees(data);

        const encStrings = {};
        for (const emp of data) {
          try {
            const res = await fetch(`http://localhost:8080/api/qr/generate/${emp.id}`);
            const enc = await res.text();
            encStrings[emp.id] = enc;
          } catch (err) {
            console.error(`Error generating QR for employee ${emp.id}:`, err);
          }
        }
        setEncryptedStrings(encStrings);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  // Generate QR codes after encryptedStrings and canvases are ready
  useEffect(() => {
    employees.forEach(emp => {
      const enc = encryptedStrings[emp.id];
      const canvas = qrRefs.current[emp.id];
      if (enc && canvas) {
        QRCode.toCanvas(canvas, enc, {
          errorCorrectionLevel: "M",
          width: 300,
          height: 300,
          margin: 2,
          color: {
            dark: "#000000",
            light: "#ffffff"
          }
        }, (error) => {
          if (error) console.error(`QR generation error for employee ${emp.id}:`, error);
        });
      }
    });
  }, [employees, encryptedStrings]);

  if (loading) return <p style={{ color: "black" }}>Loading employees...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div className="home-root" style={{ backgroundColor: "white", color: "black", minHeight: "100vh", padding: "20px" }}>
      <section className="employee-table-container">
        <h1 style={{ color: "#ef4444", textAlign: "center", marginBottom: "2rem" }}>Employee List</h1>
        <table className="employee-table" style={{ color: "black" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Profession</th>
              <th>Organisation</th>
              <th>QR Code</th>
              <th>Encrypted String</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.profession}</td>
                <td>{emp.organisation}</td>
                <td>
                  <canvas
                    ref={el => {
                      if (el) qrRefs.current[emp.id] = el;
                    }}
                    width={300}   // Updated canvas width
                    height={300}  // Updated canvas height
                    style={{ width: 300, height: 300 }} // Updated style dimensions
                  />
                </td>
                <td style={{ wordBreak: "break-word", maxWidth: 300 }}>
                  {encryptedStrings[emp.id] || ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
