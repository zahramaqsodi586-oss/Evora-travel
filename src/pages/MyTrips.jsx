import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyTrips() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#E9E5DA] px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[4px] text-[#C49A70] mb-4">
              EVORA TRAVEL
            </p>

            <h1 className="text-4xl md:text-6xl font-serif text-[#34483F] mb-6">
              Every Journey Has a Story
            </h1>

            <p className="max-w-2xl mx-auto text-[#6B756E] leading-7">
              Keep your travel plans, unforgettable moments, and favorite
              memories together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Upcoming Trips",
                description: "Your next adventures and travel plans.",
                number: "01",
              },
              {
                title: "Travel Wishlist",
                description: "Places and experiences you dream of.",
                number: "02",
              },
              {
                title: "Past Adventures",
                description: "Memories from journeys you've taken.",
                number: "03",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="bg-[#F7F5EF] rounded-2xl p-8 min-h-64 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <span className="text-[#C49A70] text-sm">{item.number}</span>

                <h2 className="text-2xl font-serif text-[#34483F] mt-8 mb-4">
                  {item.title}
                </h2>

                <p className="text-[#6B756E] leading-7">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default MyTrips;
