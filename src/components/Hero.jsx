import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="px-8 md:px-16 pt-12 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-sm uppercase tracking-[5px] text-[#C49A70] mb-6">
            Discover the world with Evora
          </p>

          <h1 className="text-5xl md:text-7xl font-semibold text-[#34483F] leading-tight">
            Find Your Next
            <br />
            <span className="text-[#C49A70] italic">Great Adventure</span>
          </h1>

          <p className="text-gray-600 text-lg mt-6 max-w-xl leading-8">
            Explore beautiful destinations, discover hidden places, and create
            unforgettable memories around the world.
          </p>

          <Link
            to="/destinations"
            className="group inline-flex items-center gap-4 mt-10 bg-[#34483F] text-[#F7F5EF] px-9 py-4 rounded-full text-sm 
            font-semibold tracking-wide shadow-md transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-105 hover:bg-[#C49A70]
             hover:shadow-xl"
          >
            Explore Destinations
            <span className="text-lg transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="h-112.5 overflow-hidden rounded-[30px] shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=1000"
            alt="Beautiful Italian coastal village"
            className="w-full h-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
