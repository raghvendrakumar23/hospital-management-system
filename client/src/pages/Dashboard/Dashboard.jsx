import { useEffect, useState } from "react";
import DashboardLayout from "../../layouts/DashboardLayout";
import DashboardCards from "../../components/DashboardCards/DashboardCards";
import Analytics from "../../components/Analytics/Analytics";
import "./Dashboard.css";

export default function Dashboard() {
  const [user, setUser] = useState({
    name: "Admin",
  });

  useEffect(() => {
    const loggedUser = localStorage.getItem("user");

    if (loggedUser) {
      setUser(JSON.parse(loggedUser));
    }
  }, []);

  return (
    <DashboardLayout>

      <div className="dashboard-header">

        <h1>Dashboard</h1>

        <p>
          Welcome back, <strong>{user.name}</strong> 👋
        </p>

      </div>

      <DashboardCards />

      <Analytics />

    </DashboardLayout>
  );
}