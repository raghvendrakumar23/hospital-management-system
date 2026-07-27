import Sidebar from "../components/Sidebar/Sidebar";
import Topbar from "../components/Topbar/Topbar";
import "./DashboardLayout.css";

export default function DashboardLayout({ children }) {
  return (
    <div className="layout">

      <Sidebar />

      <main className="main-content">

        <Topbar />

        {children}

      </main>

    </div>
  );
}