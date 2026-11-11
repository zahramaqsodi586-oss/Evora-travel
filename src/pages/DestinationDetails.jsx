import { useParams, Link } from "react-router-dom";
import { Compass, MapPin, ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const destinations = [
  {
    name: "Santorini",
    country: "Greece",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=1200",
    description:
      "Discover the beautiful white villages, blue domes, stunning sunsets and peaceful beaches of Santorini.",
    bestTime: "May - October",
    attractions: [
      {
        name: "Oia Village",
        image:
          "https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600",
      },
      {
        name: "Blue Domes",
        image:
          "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600",
      },
      {
        name: "Red Beach",
        image:
          "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600",
      },
      {
        name: "Fira Town",
        image:
          "https://images.unsplash.com/photo-1530841377377-3ff06c0ca713?w=600",
      },
    ],
  },
  {
    name: "Bali",
    country: "Indonesia",
    bestTime: "April - October",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200",
    description:
      "Explore tropical beaches, green rice terraces, beautiful temples and the peaceful nature of Bali.",
    attractions: [
      {
        name: "Uluwatu Temple",
        image:
          "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600",
      },
      {
        name: "Tegallalang Rice Terraces",
        image:
          "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600",
      },
      {
        name: "Nusa Penida",
        image:
          "https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600",
      },
      {
        name: "Ubud Monkey Forest",
        image:
          "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=600",
      },
    ],
  },
  {
    name: "Swiss Alps",
    country: "Switzerland",
    bestTime: "June - September",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200",
    description:
      "Experience breathtaking mountain views, beautiful villages and unforgettable Alpine landscapes.",
    attractions: [
      {
        name: "Matterhorn Mountain",
        image:
          "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200",
      },
      {
        name: "Jungfraujoch",
        image:
          "https://commons.wikimedia.org/wiki/Special:FilePath/Jungfraujoch%2C%20Lauterbrunnen%2C%20Switzerland%20%28Unsplash%29.jpg?width=1200",
      },
      {
        name: "Lake Geneva",
        image:
          "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=1200",
      },
      {
        name: "Lauterbrunnen Valley",
        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1200",
      },
    ],
  },
];

function DestinationDetails() {
  const { name } = useParams();

  const place = destinations.find(
    (item) => item.name.toLowerCase().replaceAll(" ", "-") === name,
  );

  if (!place) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#E9E5DA]">
        <h1 className="text-3xl text-[#34483F] font-semibold">
          Destination Not Found
        </h1>
        <Link to="/destinations" className="mt-5 text-[#C49A70]">
          Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <section className="px-8 md:px-16 py-12 bg-[#E9E5DA]">
        <Link
          to="/destinations"
          className="inline-flex items-center gap-2 text-[#34483F] mb-8"
        >
          <ArrowLeft size={18} />
          Back to Destinations
        </Link>

        <div className="h-75 md:h-125 overflow-hidden rounded-3xl">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-3xl mx-auto py-12">
          <p className="text-[#C49A70] uppercase tracking-[4px] text-sm">
            Discover the world
          </p>

          <h1 className="text-5xl md:text-6xl font-semibold text-[#34483F] mt-4">
            {place.name}
          </h1>

          <p className="flex items-center gap-2 text-gray-500 mt-4">
            <MapPin size={18} />
            {place.country}
          </p>

          <p className="text-gray-600 text-lg leading-8 mt-8">
            {place.description}
          </p>

          <div className="mt-10 p-6 bg-white rounded-2xl flex justify-between items-center">
            <div>
              <p className="text-gray-500 text-sm">Best Time to Visit</p>
              <h2 className="text-xl font-semibold text-[#34483F]">
                {place.bestTime}
              </h2>
            </div>

            <Compass className="text-[#C49A70]" size={36} />
          </div>
          <div className="mt-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-11 h-11 rounded-full bg-[#34483F] flex items-center justify-center">
                <MapPin size={21} className="text-[#E9E5DA]" />
              </div>

              <div>
                <h2 className="text-2xl font-semibold text-[#34483F]">
                  Top Attractions
                </h2>
                <p className="text-sm text-gray-500 mt-1">
                  Places you shouldn't miss
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
              {place.attractions.map((attraction, index) => (
                <div
                  key={attraction.name}
                  className="group h-full rounded-2xl bg-[#F7F5EF] p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-[#34483F]">
                      {attraction.name}
                    </h3>

                    <span className="text-sm text-[#C49A70] font-semibold">
                      0{index + 1}
                    </span>
                  </div>

                  <div className="overflow-hidden rounded-xl">
                    <img
                      src={attraction.image}
                      alt={attraction.name}
                      className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default DestinationDetails;
