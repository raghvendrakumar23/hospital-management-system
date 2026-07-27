import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2>MediCare</h2>
          <p>
            Providing world-class healthcare with experienced doctors and
            advanced medical facilities.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <p>Home</p>
          <p>Doctors</p>
          <p>Appointments</p>
          <p>Contact</p>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p>📍 Lucknow, Uttar Pradesh</p>
          <p>📞 +91 9876543210</p>
          <p>✉ medicare@gmail.com</p>
        </div>

      </div>

      <hr />

      <p className="copyright">
        © 2026 MediCare Hospital Management System. All Rights Reserved.
      </p>

    </footer>
  );
}