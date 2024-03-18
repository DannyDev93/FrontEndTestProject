import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Provider } from "react-redux";

import store from "./lib/state/store";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Cart from "./views/Cart/Cart";
import Error404 from "./views/404/Error404";

import Store from "./views/Store/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
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
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
