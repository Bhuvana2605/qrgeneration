import React, { useEffect, useState } from "react";
import QRCode from "react-qr-code";
import './Home.css';

export default function EmployeeListPage() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch employee list from backend
  useEffect(() => {
    fetch("http://localhost:8080/api/employees")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch employees");
        return res.json();
      })
      .then(data => {
        setEmployees(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading employees...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="home-root">
      <section className="employee-table-container">
        <h1 style={{ color: "#ef4444", textAlign: "center", marginBottom: "2rem" }}>Employee List</h1>
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Profession</th>
              <th>Organisation</th>
              <th>QR Code</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{emp.name}</td>
                <td>{emp.profession}</td>
                <td>{emp.organisation}</td>
                <td>
                  <QRCode
                    value={`http://localhost:8080/api/qr/generate/${emp.id}`}
                    size={64}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
