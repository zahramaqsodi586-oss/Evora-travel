import { useState } from "react";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image: "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=800",
    bestTime: "May - Ocotber",
  },
  {
    name: "Bali",
    country: "Indonesia",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
    bestTime: "April - october",
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
    bestTime: "June - Septemeber",
  },
];

function Destinations() {
  const [search, setSearch] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("All");

  const filteredDestinations = destinations.filter((place) => {
    const matchesSearch =
      place.name.toLowerCase().includes(search.toLowerCase()) ||
      place.country.toLowerCase().includes(search.toLowerCase());

    const matchesCountry =
      selectedCountry === "All" || place.country === selectedCountry;

    return matchesSearch && matchesCountry;
  });

  return (
    <section className="px-8 md:px-16 py-20">
      <div className="flex flex-col md:flex-row gap-4 mb-10">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search destinations..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-6 py-4 rounded-full bg-white border border-gray-200 outline-none focus:border-[#C49A70]"
        />

        {/* Country Filter */}
        <select
          value={selectedCountry}
          onChange={(e) => setSelectedCountry(e.target.value)}
          className="px-6 py-4 rounded-full bg-white border border-gray-200 outline-none focus:border-[#C49A70]"
        >
          <option value="All">All Countries</option>
          <option value="Greece">Greece</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Switzerland">Switzerland</option>
        </select>
      </div>

      <div className="flex  items-end mb-10">
        <div>
          <p className="text-sm uppercase tracking-[4px] text-[#C49A70] mb-3">
            Explore the world
          </p>

          <h2 className="text-4xl font-semibold text-[#34483F]">
            Popular Destinations
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((place) => (
          <Link
            to={`/destinations/${place.name.toLowerCase().replaceAll(" ", "-")}`}
            key={place.name}
            className="group cursor-pointer block"
          >
            <div className="h-[350px] overflow-hidden rounded-2xl">
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
            </div>

            <div className="flex justify-between items-center mt-5">
              <div>
                <h3 className="text-xl font-semibold text-[#34483F]">
                  {place.name}
                </h3>
                <p className="text-gray-500 mt-1">{place.country}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Best Time to Visit</p>
                <p className="font-semibold text-[#34483F]">{place.bestTime}</p>
              </div>
            </div>
          </Link>
        ))}

        {filteredDestinations.length === 0 && (
          <p className="text-gray-500 col-span-full text-center py-10">
            No destinations found. Try another search.
          </p>
        )}
      </div>
    </section>
  );
}

export default Destinations;
