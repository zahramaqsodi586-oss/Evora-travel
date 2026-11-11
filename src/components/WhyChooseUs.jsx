
import { Compass, ShieldCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: Compass,
    title: "Handpicked Destinations",
    description: "Discover carefully selected destinations around the world.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Experiences",
    description: "Enjoy your journeys with confidence and peace of mind.",
  },
  {
    icon: Headphones,
    title: "Personal Support",
    description: "We are here to help you plan every step of your journey.",
  },
];

function WhyChooseUs() {
  return (
    <section className="px-8 md:px-16 py-24 bg-[#F7F5EF]">

      <div className="text-center mb-14">
        <p className="text-sm uppercase tracking-[4px] text-[#C49A70] mb-4">
          The Evora Experience
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-[#34483F]">
          Why Travel With Us?
        </h2>

        <p className="text-gray-500 mt-5 max-w-xl mx-auto">
          Every journey deserves thoughtful planning and unforgettable moments.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="bg-white p-9 rounded-2xl text-center hover:-translate-y-2 transition duration-300 shadow-sm"
            >
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E9E5DA] flex items-center justify-center mb-6">
                <Icon size={28} className="text-[#34483F]" />
              </div>

              <h3 className="text-xl font-semibold text-[#34483F] mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-500 leading-7">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

    </section>
  );
}

export default WhyChooseUs;