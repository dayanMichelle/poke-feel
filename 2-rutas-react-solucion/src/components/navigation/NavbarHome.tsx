import { NavLink } from "react-router-dom";

export const NavbarHome = () => {
  return (
    <nav className="bg-slate-500 p-4 flex justify-center space-x-4">
      <NavLink
        className="text-white hover:text-gray-500 hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className="text-white hover:text-gray-500 hover:bg-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 ease-in-out"
        to="/poke-feel"
      >
        Poke Feel
      </NavLink>
    </nav>
  );
};
