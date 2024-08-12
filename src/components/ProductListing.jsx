import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { Fragment } from "react";

const ProductListing = ({ products }) => {
  return (
    <div className="flex items-center flex-wrap gap-6">
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
