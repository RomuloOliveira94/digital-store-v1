import { useLoaderData } from "react-router-dom";

const ProductViewPage = () => {
  const id = useLoaderData();
  return (
    <div>
      {id}
      <h1>Product</h1>
    </div>
  );
};

export default ProductViewPage;
