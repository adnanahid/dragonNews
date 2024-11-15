import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./error-page";
import Root from "./Root";
import Home from "./Home";
import Career from "./Career";
import Middle from "./Middle";
import Login from "./Login";
import About from "./About";
import RegisterCard from "./Register";
import AuthProvider from "./Provider/AuthProvider";
import Details from "./Details";
import Private from "./PrivateRouter/Private";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: () => fetch("/news.json"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        children: [
          {
            path: "/",
            element: <Navigate to="/category/0"></Navigate>,
          },
          {
            path: "/category/0",
            loader: () => fetch("/news.json"),
            element: <Middle></Middle>,
          },
          {
            path: "/category/:id",
            loader: () => fetch("/news.json"),
            element: <Middle></Middle>,
          },
        ],
      },
      {
        path: "/details/:_id",
        loader: () => fetch("/news.json"),
        element: (
          <Private>
            <Details></Details>
          </Private>
        ),
      },
      {
        path: "/career",
        element: <Career></Career>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <RegisterCard></RegisterCard>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
