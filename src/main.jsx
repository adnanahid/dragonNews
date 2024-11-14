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
import About from "./About";
import Career from "./Career";
import Middle from "./Middle";
import Login from "./Login";
import RegisterCard from "./Register";
import AuthProvider from "./Provider/AuthProvider";

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
            element: <Navigate to="/category/0"></Navigate>,
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
