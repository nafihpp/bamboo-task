import { lazy } from "react";
import HomePage from "../pages/home";
const FavouritePage = lazy(() => import("../pages/favourites/index"));
const Error404 = lazy(() => import("../pages/404"));

const routes = [
  {
    path: "/",
    element: <HomePage />,
    title: "Home",
  },
  {
    path: "/favourites",
    element: <FavouritePage />,
    title: "Favourites",
  },
  {
    path: "*",
    element: <Error404 />,
    title: "404",
  },
];

export default routes;
