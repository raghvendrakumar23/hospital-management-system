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

  const [showNotification, setShowNotification] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const [notifications] = useState([
    "🩺 New patient registered",
    "📅 Appointment booked",
    "👨‍⚕️ Doctor added successfully",
  ]);

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

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

        {/* Notification */}

        <div className="notification">

          <div
            className="notification-icon"
            onClick={() => {
              setShowNotification(!showNotification);
              setShowProfile(false);
            }}
          >
            <FaBell />
            <span className="badge">{notifications.length}</span>
          </div>

          {showNotification && (
            <div className="notification-dropdown">
              <h4>Notifications</h4>

              {notifications.map((item, index) => (
                <div className="notification-item" key={index}>
                  {item}
                </div>
              ))}
            </div>
          )}

        </div>

        {/* Profile */}

        <div className="profile">

          <div
            className="profile-card"
            onClick={() => {
              setShowProfile(!showProfile);
              setShowNotification(false);
            }}
          >
            <FaUserCircle className="avatar" />

            <div>
              <h4>{user.name}</h4>
              <p>Administrator</p>
            </div>

          </div>

          {showProfile && (
            <div className="profile-dropdown">

              <h4>{user.name}</h4>
              <p>Administrator</p>

              <hr />

              <div className="profile-item">👤 My Profile</div>

              <div className="profile-item">⚙️ Settings</div>

              <div className="profile-item">🔒 Change Password</div>

              <div className="profile-item">🌙 Dark Mode</div>

              <div
                className="profile-item logout"
                onClick={handleLogout}
              >
                🚪 Logout
              </div>

            </div>
          )}

        </div>

      </div>

    </header>
  );
}