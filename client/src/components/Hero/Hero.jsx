import "./Hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Your Health, Our Priority</h1>

        <p>
          Welcome to MediCare Hospital Management System.
          Book appointments, manage patients, doctors and
          hospital services easily.
        </p>

        <Link to="/register">
          <button>Book Appointment</button>
        </Link>
      </div>

      <div className="hero-right">
        <img
          src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600"
          alt="Doctor"
        />
      </div>
    </section>
  );
}

export default Hero;