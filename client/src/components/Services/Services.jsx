import "./services.css";
import {
  FaUserMd,
  FaHeartbeat,
  FaAmbulance,
  FaFlask,
  FaNotesMedical,
  FaCapsules,
} from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaUserMd />,
      title: "Expert Doctors",
      desc: "Highly qualified specialists available for every department.",
    },
    {
      icon: <FaHeartbeat />,
      title: "Cardiology",
      desc: "Advanced heart care with modern medical technology.",
    },
    {
      icon: <FaAmbulance />,
      title: "Emergency",
      desc: "24/7 emergency ambulance and trauma services.",
    },
    {
      icon: <FaFlask />,
      title: "Laboratory",
      desc: "Fast and accurate pathology & diagnostic tests.",
    },
    {
      icon: <FaNotesMedical />,
      title: "Health Checkup",
      desc: "Complete body health packages at affordable prices.",
    },
    {
      icon: <FaCapsules />,
      title: "Pharmacy",
      desc: "All medicines available with certified pharmacists.",
    },
  ];

  return (
    <section className="services">

      <h2>Our Services</h2>

      <p className="sub-title">
        We provide world-class healthcare services with experienced doctors.
      </p>

      <div className="service-grid">

        {services.map((item, index) => (

          <div className="service-card" key={index}>

            <div className="service-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.desc}</p>

          </div>

        ))}

      </div>

    </section>
  );
}