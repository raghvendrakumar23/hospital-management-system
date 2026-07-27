import "./Sidebar.css";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaUserMd,
  FaUsers,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirmLogout = window.confirm(
      "Are you sure you want to logout?"
    );

    if (!confirmLogout) return;

    localStorage.removeItem("token");
    localStorage.removeItem("user");

    navigate("/login");
  };

  return (
    <aside className="sidebar">

      <div className="logo">
        <span>🏥</span>
        <h2>MediCare</h2>
      </div>

      <ul className="menu">

        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/doctors"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUserMd />
            <span>Doctors</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/patients"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaUsers />
            <span>Patients</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/appointments"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaCalendarAlt />
            <span>Appointments</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/billing"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaMoneyBillWave />
            <span>Billing</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/settings"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <FaCog />
            <span>Settings</span>
          </NavLink>
        </li>

      </ul>

      <button
        className="logout-btn"
        onClick={handleLogout}
      >
        <FaSignOutAlt />
        Logout
      </button>

    </aside>
  );
}