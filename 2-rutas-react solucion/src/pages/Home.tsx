import { NavLink } from "react-router-dom";

export const Home = () => {
  return (
    <main className="bg-orange-100 min-h-screen flex flex-col items-center justify-center w-full h-full space-y-4">
      <h1 className="text-md font-bold text-center text-gray-800 dark:text-gray-200">
        Home Page
      </h1>
      {/* // TODO: 3. cambia los <a></a> por etiquetas de react-router-dom */}
      <NavLink
        className="text-2xl font-medium text-blue-600 dark:text-blue-500 hover:underline"
        to="/poke-feel"
      >
        ir a /poke-feel
      </NavLink>
    </main>
  );
};
