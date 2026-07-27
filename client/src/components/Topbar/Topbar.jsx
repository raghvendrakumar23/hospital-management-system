import "./Topbar.css";
import { useEffect, useState } from "react";
import {
  FaBell,
  FaSearch,
  FaUserCircle,
} from "react-icons/fa";

export default function Topbar() {

  const [user, setUser] = useState({
    name: "Administrator",
  });

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  return (
    <header className="topbar">

      <div className="search-box">
        <FaSearch className="search-icon" />

        <input
          type="text"
          placeholder="Search doctors, patients..."
        />
      </div>

      <div className="topbar-right">

        <div className="notification">
          <FaBell />
          <span className="badge">3</span>
        </div>

        <div className="profile">

          <FaUserCircle className="avatar" />

          <div>
            <h4>{user.name}</h4>
            <p>Administrator</p>
          </div>

        </div>

      </div>

    </header>
  );
}