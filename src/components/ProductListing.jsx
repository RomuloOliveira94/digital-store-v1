import ProductCard from "./ProductCard";
import products from "../data/products.json";
import { Fragment } from "react";
const ProductListing = () => {
  return (
    <div className="flex justify-between flex-wrap">
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard
            image={product.image}
            name={product.name}
            price={product.price}
            priceDiscount={product.priceDiscount}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default ProductListing;
