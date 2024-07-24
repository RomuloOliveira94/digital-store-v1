import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ProductViewPage from "./pages/ProductViewPage";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

function App() {
  return (
    <Layout>
      <main className="container">
        <RouterProvider router={router} />
      </main>
    </Layout>
  );
}

export default App;
