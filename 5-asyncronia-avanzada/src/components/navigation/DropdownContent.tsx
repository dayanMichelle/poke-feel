import { NavLink } from "react-router-dom";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { MenuIcon } from "@/components/icons";
import { navbarStyles } from "@/data";
import { ROUTES } from "@/utils";
import type { Theme } from "@/types";

type DropdownContentProps = {
  theme: Theme;
};

export const DropdownContent = ({ theme }: DropdownContentProps) => (
  <Dropdown
    backdrop="blur"
    className={`${theme} text-foreground bg-background min-w-[200px]`}
  >
    <DropdownTrigger>
      <Button variant="bordered" className="capitalize">
        <MenuIcon />
      </Button>
    </DropdownTrigger>
    <DropdownMenu aria-label="Dropdown Variants" variant="bordered">
      <DropdownItem key="create">
        <NavLink
          to={ROUTES.trainer}
          className={({ isActive }) =>
            `${
              isActive ? navbarStyles.activeLink : navbarStyles.link
            } flex w-full`
          }
        >
          Mi PokeEntrenador
        </NavLink>
      </DropdownItem>

      <DropdownItem key="questions">
        <NavLink
          to={ROUTES.questions}
          className={({ isActive }) =>
            `${
              isActive ? navbarStyles.activeLink : navbarStyles.link
            } flex w-full`
          }
        >
          Crear PokeFeel
        </NavLink>
      </DropdownItem>

      <DropdownItem key="feeling">
        <NavLink
          to={ROUTES.feeling}
          className={({ isActive }) =>
            `${
              isActive ? navbarStyles.activeLink : navbarStyles.link
            } flex w-full`
          }
        >
          Mi PokeFeel
        </NavLink>
      </DropdownItem>
    </DropdownMenu>
  </Dropdown>
);
