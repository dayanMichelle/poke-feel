import { Outlet } from "react-router-dom";

import { NavbarHome } from "@/components/navigation";

export const Layout = () => {
  return (
    <main className={`text-foreground bg-background  min-h-screen min-w-80`}>
      <NavbarHome />
      <section>{<Outlet />}</section>
    </main>
  );
};
