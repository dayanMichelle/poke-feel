import { createBrowserRouter } from "react-router-dom";
import { Layout, Home, NotFound } from "@/pages";

// TODO: 2. cambia los paths de las rutas por el object de src/utils/routes.ts
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // TODO: 1. añade la ruta de poke feel y usa el componente Feeling

      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
