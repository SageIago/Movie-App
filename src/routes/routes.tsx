import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Movie from "../pages/Movie";
import Shows from "../pages/Shows";
import Search from "../pages/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/movies",
        element: <Movie />,
      },
      {
        path: "/shows",
        element: <Shows />,
      },
      {
        path: "/search",
        element: <Search />,
      },
    ],
  },
]);

export default router;
