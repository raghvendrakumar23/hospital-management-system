import "./DashboardCards.css";
import {
  FaUserMd,
  FaUsers,
  FaCalendarCheck,
  FaRupeeSign,
} from "react-icons/fa";

const cards = [
  {
    title: "Doctors",
    value: "45",
    icon: <FaUserMd />,
  },
  {
    title: "Patients",
    value: "1,245",
    icon: <FaUsers />,
  },
  {
    title: "Appointments",
    value: "86",
    icon: <FaCalendarCheck />,
  },
  {
    title: "Revenue",
    value: "₹2.4L",
    icon: <FaRupeeSign />,
  },
];

export default function DashboardCards() {
  return (
    <div className="cards-container">
      {cards.map((card, index) => (
        <div className="dashboard-card" key={index}>
          <div className="card-icon">
            {card.icon}
          </div>

          <div className="card-content">
            <h4>{card.title}</h4>
            <h2>{card.value}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}