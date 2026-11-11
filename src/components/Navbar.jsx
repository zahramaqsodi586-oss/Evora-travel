import { Link, NavLink } from "react-router-dom";
import { Compass } from "lucide-react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


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

  

        <p className="hidden md:flex mt-1 font-serif text-lg italic text-[#34483F]">
          Discover the World
        </p>

         <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle Menu"
          >
           
            {isOpen ? (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

         {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#f5f2eb] border-b border-[#dcd6c8] shadow-xl px-6 py-6 flex flex-col space-y-4">

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
      )}


     
    </nav>
  );
}

export default Navbar;