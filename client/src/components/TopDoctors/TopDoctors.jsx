import "./TopDoctors.css";

const doctors = [
  {
    id: 1,
    name: "Dr. Raj Sharma",
    department: "Cardiologist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Dr. Priya Singh",
    department: "Neurologist",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Dr. Amit Verma",
    department: "Orthopedic",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
  },
];

export default function TopDoctors() {
  return (
    <section className="top-doctors">

      <h2>Our Top Doctors</h2>

      <p>
        Meet our experienced specialists committed to your health.
      </p>

      <div className="doctor-grid">

        {doctors.map((doctor) => (

          <div className="doctor-card" key={doctor.id}>

            <img src={doctor.image} alt={doctor.name} />

            <h3>{doctor.name}</h3>

            <span>{doctor.department}</span>

            <button>Book Appointment</button>

          </div>

        ))}

      </div>

    </section>
  );
}