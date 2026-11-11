

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Destinations from "../components/Destinations";

function DestinationsPage() {
  return (
    <>
      <Navbar />
      <div className="pt-16 text-center">
        <h1 className="text-5xl font-semibold text-[#34483F]">
          Explore Destinations
        </h1>
        <p className="mt-4 text-gray-500">
          Discover beautiful places around the world.
        </p>
      </div>

     <Destinations />
      <Footer />
    </>
  );
}

export default DestinationsPage;