import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout, Questions, Feeling, NotFound } from "@/pages";
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
        path: ROUTES.questions,
        element: <Questions />,
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
