import { NavLink } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
  Tooltip,
} from "@nextui-org/react";
import { DropdownContent } from "@/components/navigation";
import { navbarStyles } from "@/data";
import { ROUTES } from "@/utils";
import type { Theme } from "@/types";

type NavbarHomeProps = {
  theme: Theme;
  iconImage: string;
};

export const NavbarHome = ({ theme, iconImage }: NavbarHomeProps) => {
  return (
    <Navbar shouldHideOnScroll>
      <NavbarBrand>
        <Tooltip content="Cambiar tema">
          <Image
            alt="icono de la aplicacion"
            className="w-10 h-11 object-contain cursor-pointer"
            src={iconImage}
          />
        </Tooltip>
      </NavbarBrand>
      <NavbarContent justify="end" className="sm:hidden">
        <DropdownContent theme={theme} />
      </NavbarContent>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem isActive>
          <NavLink
            to={ROUTES.trainer}
            className={({ isActive }) =>
              `${isActive ? navbarStyles.activeLink : navbarStyles.link} `
            }
          >
            Mi PokeEntrenador
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={ROUTES.questions}
            className={({ isActive }) =>
              `${isActive ? navbarStyles.activeLink : navbarStyles.link} `
            }
          >
            Crear PokeFeel
          </NavLink>
        </NavbarItem>
        <NavbarItem>
          <NavLink
            to={ROUTES.feeling}
            className={({ isActive }) =>
              `${isActive ? navbarStyles.activeLink : navbarStyles.link} `
            }
          >
            Mi PokeFeel
          </NavLink>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
