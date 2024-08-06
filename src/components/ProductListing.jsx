import ProductCard from "./ProductCard";
import PropTypes from "prop-types";
import { Fragment } from "react";

const ProductListing = ({ products }) => {
  return (
    <div className="flex justify-between flex-wrap gap-4 md:gap-0">
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
