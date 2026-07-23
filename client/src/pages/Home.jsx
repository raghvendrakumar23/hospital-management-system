import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Doctors from "../components/Doctors/Doctors";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Doctors />
    </>
  );
}

export default Home;