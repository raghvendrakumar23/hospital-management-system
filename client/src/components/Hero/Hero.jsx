import "./Hero.css";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="hero">

      <div className="hero-left">

        <h1>
          Your Health,
          <br />
          Our Priority
        </h1>

        <p>
          Welcome to MediCare Hospital Management System.
          Book appointments, manage patients and consult
          experienced doctors with ease.
        </p>

        <button
          className="hero-btn"
          onClick={() => navigate("/login")}
        >
          Book Appointment
        </button>

      </div>

      <div className="hero-right">

        <img
          src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=900"
          alt="Doctor"
        />

      </div>

    </section>
  );
}