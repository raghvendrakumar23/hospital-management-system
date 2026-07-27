import "./AddDoctorModal.css";
import { useState } from "react";

export default function AddDoctorModal({
  isOpen,
  onClose,
  doctors,
  setDoctors,
}) {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    experience: "",
    phone: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.department ||
      !formData.experience ||
      !formData.phone
    ) {
      alert("Please fill all fields");
      return;
    }

    const newDoctor = {
      id: Date.now(),
      ...formData,
    };

    setDoctors([...doctors, newDoctor]);

    setFormData({
      name: "",
      department: "",
      experience: "",
      phone: "",
    });

    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="modal">

        <h2>Add Doctor</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Doctor Name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="text"
            name="department"
            placeholder="Department"
            value={formData.department}
            onChange={handleChange}
          />

          <input
            type="text"
            name="experience"
            placeholder="Experience"
            value={formData.experience}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <div className="modal-buttons">

            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>

            <button
              type="submit"
              className="save-btn"
            >
              Save Doctor
            </button>

          </div>

        </form>

      </div>
    </div>
  );
}