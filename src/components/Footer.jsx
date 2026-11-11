import { Compass } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-[#34483F] text-[#E9E5DA] px-8 md:px-16 pt-16 pb-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-14">
          {/* About EVORA */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Compass size={30} className="text-[#C49A70]" />

              <h2 className="text-2xl font-bold tracking-widest">EVORA</h2>
            </div>

            <p className="text-sm text-[#D1D5D0] leading-7 max-w-md">
              Discover beautiful places, explore different cultures, and find
              inspiration for your next adventure with Evora Travel.
            </p>
          </div>

          {/* Travel Inspiration */}
          <div className="md:pl-12">
            <p className="text-xs uppercase tracking-[4px] text-[#C49A70] mb-5">
              Travel Inspiration
            </p>

            <h3 className="text-2xl md:text-3xl font-serif italic leading-relaxed">
              Discover new places.
              <br />
              Create your own story.
            </h3>

            <p className="text-sm text-[#D1D5D0] mt-5">
              The world is full of stories waiting to be discovered.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-[#718078]/40 pt-7 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#D1D5D0] tracking-wide">
            ©️ 2026 EVORA TRAVEL. All rights reserved.
          </p>

          <p className="text-xs text-[#C49A70] tracking-widest uppercase">
            Explore • Dream • Discover
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
