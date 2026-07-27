import "./Appointments.css";
import { useState } from "react";
import { FaPlus, FaTrash } from "react-icons/fa";

export default function Appointments() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      patient: "Rahul Kumar",
      doctor: "Dr. Raj Sharma",
      date: "2026-07-30",
      status: "Pending",
    },
  ]);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    date: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (!form.patient || !form.doctor || !form.date) {
      alert("Fill all fields");
      return;
    }

    setAppointments([
      ...appointments,
      {
        id: Date.now(),
        ...form,
        status: "Pending",
      },
    ]);

    setForm({
      patient: "",
      doctor: "",
      date: "",
    });
  };

  const handleDelete = (id) => {
    setAppointments(appointments.filter((a) => a.id !== id));
  };

  return (
    <div className="appointments-page">

      <h1>Appointments</h1>

      <div className="appointment-form">

        <input
          type="text"
          name="patient"
          placeholder="Patient Name"
          value={form.patient}
          onChange={handleChange}
        />

        <input
          type="text"
          name="doctor"
          placeholder="Doctor Name"
          value={form.doctor}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
        />

        <button onClick={handleAdd}>
          <FaPlus /> Book Appointment
        </button>

      </div>

      <table className="appointment-table">
        <thead>
          <tr>
            <th>Patient</th>
            <th>Doctor</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {appointments.map((item) => (
            <tr key={item.id}>
              <td>{item.patient}</td>
              <td>{item.doctor}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>

              <td>
                <button
                  className="delete-btn"
                  onClick={() => handleDelete(item.id)}
                >
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}