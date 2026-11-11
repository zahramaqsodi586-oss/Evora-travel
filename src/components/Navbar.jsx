import { Link, NavLink } from "react-router-dom";
import { Compass } from "lucide-react";

function Navbar() {
  return (
    <nav className=" relative w-full px-8 md:px-16 py-6 flex items-center justify-between sticky top-0 bg-[#E9E5DA] boder-b shadow ">
      <Link to="/" className="flex items-center gap-2">
        <Compass size={28} className="text-[#C49A70]" />

        <span className="text-2xl font-bold tracking-widest text-[#34483F]">
          EVORA
        </span>
      </Link>
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-8 text-md font-semibold">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-[#34483F]"
              : "text-gray-500 hover:text-[#34483F] transition"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/destinations"
          className={({ isActive }) =>
            isActive
              ? "text-[#34483F]"
              : "text-gray-500 hover:text-[#34483F] transition"
          }
        >
          Destinations
        </NavLink>

        <NavLink
          to="/my-trips"
          className={({ isActive }) =>
            isActive
              ? "text-[#34483F]"
              : "text-gray-500 hover:text-[#34483F] transition"
          }
        >
          My Trips
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-[#34483F]"
              : "text-gray-500 hover:text-[#34483F] transition"
          }
        >
          About
        </NavLink>
      </div>

  

        <p className="mt-1 font-serif text-lg italic text-[#34483F]">
          Discover the World
        </p>
     
    </nav>
  );
}

export default Navbar;
