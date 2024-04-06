import { Outlet } from "react-router-dom";

import { NavbarHome } from "@/components/navigation";
import { POKE_BALL } from "@/data";

export const Layout = () => {
  return (
    <main
      className={`dark text-foreground bg-background  min-h-screen min-w-80`}
    >
      <NavbarHome iconImage={POKE_BALL.image} theme="dark" />
      <section>{<Outlet />}</section>
    </main>
  );
};
