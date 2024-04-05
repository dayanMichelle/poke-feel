import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  Tooltip,
} from "@nextui-org/react";
import { ROUTES } from "@/utils";

export const NavbarHome = () => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Tooltip content="Cambiar tema">
          <Image
            alt="icono de la aplicacion"
            className="w-10 h-11 object-contain cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
          />
        </Tooltip>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <NavLink
            to={ROUTES.trainer}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom"
                  : "hover:bg-gradient-to-r hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500 hover:bg-[length:100%_3px] hover:bg-no-repeat hover:bg-bottom"
              } `
            }
          >
            Mi PokeEntrenador
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={ROUTES.questions}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom"
                  : "hover:bg-gradient-to-r hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500 hover:bg-[length:100%_3px] hover:bg-no-repeat hover:bg-bottom"
              }`
            }
          >
            Crear PokeFeel
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={ROUTES.feeling}
            className={({ isActive }) =>
              `${
                isActive
                  ? "bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500 bg-[length:100%_3px] bg-no-repeat bg-bottom"
                  : "hover:bg-gradient-to-r hover:from-rose-400 hover:via-fuchsia-500 hover:to-indigo-500 hover:bg-[length:100%_3px] hover:bg-no-repeat hover:bg-bottom"
              }`
            }
          >
            Mi PokeFeel
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
