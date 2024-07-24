import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductListingPage from "./pages/ProductListingPage.jsx";
import ProductViewPage from "./pages/ProductViewPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import App from "./App.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductListingPage />,
      },
      {
        path: "/products/:productId",
        element: <ProductViewPage />,
        loader: async ({ params }) => {
          return params.productId;
        },
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
