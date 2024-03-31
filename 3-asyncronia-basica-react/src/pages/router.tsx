import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout, Feeling, NotFound } from "@/pages";
import { ROUTES } from "@/utils";

export const router = createBrowserRouter([
  {
    path: ROUTES.home,
    element: <Layout />,
    children: [
      {
        path: ROUTES.home,
        element: <Navigate to={ROUTES.feeling} replace={true} />,
      },
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
