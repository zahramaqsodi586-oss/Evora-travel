
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <Navbar />

      <section className="px-8 md:px-16 py-24 bg-[#E9E5DA]">
        <p className="text-sm uppercase tracking-[4px] text-[#C49A70] mb-5">
          Our Story
        </p>

        <h1 className="text-5xl md:text-6xl font-semibold text-[#34483F] max-w-3xl leading-tight">
          Travel is more than visiting places.
          <span className="italic text-[#C49A70]"> It's about experiences.</span>
        </h1>

        <p className="text-gray-600 text-lg leading-8 max-w-2xl mt-8">
          At Evora Travel, we believe every journey has a story.
          Our goal is to inspire people to explore beautiful destinations,
          discover different cultures, and create unforgettable memories.
        </p>
      </section>

      <Footer />
    </>
  );
}

export default About;