import { createBrowserRouter } from "react-router-dom";
import { Layout, Home, NotFound, Feeling } from "@/pages";
import { ROUTES } from "@/utils";

// TODO: 2. cambia los paths de las rutas por el object de src/utils/routes.ts
export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <Home />,
      },
      // TODO: 1. añade la ruta de poke feel y usa el componente Feeling
      {
        path: ROUTES.feeling,
        element: <Feeling />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
