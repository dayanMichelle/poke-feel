import { Outlet } from "react-router-dom";

import { NavbarHome } from "@/components/navigation";
import { POKE_BALL } from "@/data";
import { useTheme } from "@/hooks";

export const Layout = () => {
  const [isDarkTheme, toggleTheme] = useTheme();

  const theme = isDarkTheme ? "dark" : "light";

  return (
    <main
      className={`${theme} text-foreground bg-background  min-h-screen min-w-80`}
    >
      <NavbarHome
        iconImage={POKE_BALL.image}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      <section>{<Outlet />}</section>
    </main>
  );
};
