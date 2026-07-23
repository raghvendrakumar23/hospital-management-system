import "./Services.css";

function Services() {
  const services = [
    {
      title: "Appointment Booking",
      desc: "Book appointments with doctors easily."
    },
    {
      title: "Qualified Doctors",
      desc: "Experienced specialists for every department."
    },
    {
      title: "Emergency Care",
      desc: "24×7 emergency medical support."
    },
    {
      title: "Medical Records",
      desc: "Secure patient history and reports."
    }
  ];

  return (
    <section className="services">
      <h2>Our Services</h2>

      <div className="service-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;