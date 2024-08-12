import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { Fragment } from "react";

const ProductListing = ({ products }) => {
  return (
    <div className="grid xl:grid-cols-5 sm:grid-cols-3 gap-4">
      {products.map((product) => (
        <Fragment key={product.id}>
          <ProductCard
            id={product.id}
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

ProductListing.propTypes = {
  products: PropTypes.array,
};

export default ProductListing;
