import { createBrowserRouter, Navigate } from "react-router-dom";
import { Trainer, Layout, Questions, Feeling } from "@/pages";
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
        path: ROUTES.trainer,
        element: <Trainer />,
      },
      {
        path: ROUTES.questions,
        element: <Questions />,
      },
      {
        path: ROUTES.feeling,
        element: <Feeling />,
      },
    ],
  },
]);
