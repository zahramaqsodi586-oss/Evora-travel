
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Footer from "../components/Footer";
import Destinations from "../components/Destinations";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <WhyChooseUs />
      <Footer />
    </>
  );
}

export default Home;