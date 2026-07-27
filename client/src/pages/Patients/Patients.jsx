import "./Patients.css";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";
import { FaPlus, FaSearch, FaTrash } from "react-icons/fa";

export default function Patients() {
  const [search, setSearch] = useState("");

  const [patients, setPatients] = useState([
    {
      id: 1,
      name: "Rahul Kumar",
      age: 25,
      gender: "Male",
      phone: "9876543210",
      disease: "Fever",
    },
    {
      id: 2,
      name: "Priya Singh",
      age: 22,
      gender: "Female",
      phone: "9876543211",
      disease: "Migraine",
    },
  ]);

  const [form, setForm] = useState({
    name: "",
    age: "",
    gender: "",
    phone: "",
    disease: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleAdd = () => {
    if (
      !form.name ||
      !form.age ||
      !form.gender ||
      !form.phone ||
      !form.disease
    ) {
      alert("Please fill all fields");
      return;
    }

    setPatients([
      ...patients,
      {
        id: Date.now(),
        ...form,
      },
    ]);

    setForm({
      name: "",
      age: "",
      gender: "",
      phone: "",
      disease: "",
    });
  };

  const handleDelete = (id) => {
    if (window.confirm("Delete this patient?")) {
      setPatients(patients.filter((patient) => patient.id !== id));
    }
  };

  const filteredPatients = patients.filter((patient) =>
    patient.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="patients-page">
        <h1>Patients</h1>

        <div className="patient-form">
          <input
            type="text"
            name="name"
            placeholder="Patient Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />

          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="disease"
            placeholder="Disease"
            value={form.disease}
            onChange={handleChange}
          />

          <button onClick={handleAdd}>
            <FaPlus />
            Add Patient
          </button>
        </div>

        <div className="search-box">
          <FaSearch />

          <input
            type="text"
            placeholder="Search Patient..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="patient-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Phone</th>
              <th>Disease</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredPatients.map((patient) => (
              <tr key={patient.id}>
                <td>{patient.name}</td>
                <td>{patient.age}</td>
                <td>{patient.gender}</td>
                <td>{patient.phone}</td>
                <td>{patient.disease}</td>

                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(patient.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </DashboardLayout>
  );
}