import "./Settings.css";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useState } from "react";

export default function Settings() {
  const [profile, setProfile] = useState({
    hospital: "MediCare Hospital",
    admin: "Raghvendra Kumar",
    email: "admin@medicare.com",
    phone: "9876543210",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    alert("Settings Saved Successfully ✅");
  };

  return (
    <DashboardLayout>
      <div className="settings-page">

        <h1>Settings</h1>

        <div className="settings-card">

          <input
            type="text"
            name="hospital"
            value={profile.hospital}
            onChange={handleChange}
            placeholder="Hospital Name"
          />

          <input
            type="text"
            name="admin"
            value={profile.admin}
            onChange={handleChange}
            placeholder="Admin Name"
          />

          <input
            type="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            placeholder="Email"
          />

          <input
            type="text"
            name="phone"
            value={profile.phone}
            onChange={handleChange}
            placeholder="Phone Number"
          />

          <button onClick={handleSave}>
            Save Changes
          </button>

        </div>

      </div>
    </DashboardLayout>
  );
}