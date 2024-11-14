import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./Root";
import Home from "./Home";
import About from "./About";
import Career from "./Career";
import Middle from "./Middle";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("../public/news.json"),
            element: <Middle></Middle>,
          },
          {
            path: "/category/0",
            loader: () => fetch("../public/news.json"),
            element: <Middle></Middle>,
          },
          {
            path: "/category/:id",
            loader: () => fetch("../public/news.json"),
            element: <Middle></Middle>,
          },
        ],
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
