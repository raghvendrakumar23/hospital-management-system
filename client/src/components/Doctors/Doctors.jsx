import "./Doctors.css";

function Doctors() {

const doctors = [
{
name:"Dr. Rajesh Kumar",
specialist:"Cardiologist"
},
{
name:"Dr. Priya Sharma",
specialist:"Neurologist"
},
{
name:"Dr. Aman Verma",
specialist:"Orthopedic"
}
];

return(
<section className="doctors">

<h2>Our Doctors</h2>

<div className="doctor-container">

{
doctors.map((doctor,index)=>(

<div className="doctor-card" key={index}>

<img
src={`https://ui-avatars.com/api/?name=${doctor.name}&background=0D6EFD&color=fff&size=256`}
alt={doctor.name}
/>

<h3>{doctor.name}</h3>

<p>{doctor.specialist}</p>

</div>

))
}

</div>

</section>
)

}

export default Doctors;