import "./Doctors.css";
import { useState, useEffect } from "react";
import { FaPlus, FaSearch, FaEdit, FaTrash } from "react-icons/fa";
import DashboardLayout from "../../layouts/DashboardLayout";
import AddDoctorModal from "../../components/AddDoctorModal/AddDoctorModal";

export default function Doctors() {
  const [search, setSearch] = useState("");
  const [openModal, setOpenModal] = useState(false);

  const [doctors, setDoctors] = useState(() => {
    const savedDoctors = localStorage.getItem("doctors");

    return savedDoctors
      ? JSON.parse(savedDoctors)
      : [
          {
            id: 1,
            name: "Dr. Raj Sharma",
            department: "Cardiology",
            experience: "10 Years",
            phone: "9876543210",
          },
          {
            id: 2,
            name: "Dr. Priya Singh",
            department: "Neurology",
            experience: "7 Years",
            phone: "9876543211",
          },
        ];
  });

  useEffect(() => {
    localStorage.setItem("doctors", JSON.stringify(doctors));
  }, [doctors]);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this doctor?"
    );

    if (!confirmDelete) return;

    const updatedDoctors = doctors.filter(
      (doctor) => doctor.id !== id
    );

    setDoctors(updatedDoctors);
  };

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <DashboardLayout>
      <div className="doctors-page">

        <div className="doctor-header">
          <h1>Doctors</h1>

          <button
            className="add-btn"
            onClick={() => setOpenModal(true)}
          >
            <FaPlus />
            Add Doctor
          </button>
        </div>

        <div className="search-box-doctor">
          <FaSearch />

          <input
            type="text"
            placeholder="Search doctor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="doctor-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Experience</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {filteredDoctors.map((doctor) => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.department}</td>
                <td>{doctor.experience}</td>
                <td>{doctor.phone}</td>

                <td>
                  <button className="edit-btn">
                    <FaEdit />
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(doctor.id)}
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <AddDoctorModal
          isOpen={openModal}
          onClose={() => setOpenModal(false)}
          doctors={doctors}
          setDoctors={setDoctors}
        />

      </div>
    </DashboardLayout>
  );
}