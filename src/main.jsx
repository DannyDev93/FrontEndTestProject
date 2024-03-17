import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
// View imports
import Store from "./views/Store/Store";
import Cart from "./views/Cart/Cart";
import Error404 from "./views/404/Error404";
import NavBar from "./components/Layout/NavBar/NavBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Store />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  { path: "/404", element: <Error404 /> },
  {
    path: "*",
    element: <Navigate to="/404" replace />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NavBar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
