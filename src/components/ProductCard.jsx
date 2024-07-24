import PropTypes from "prop-types";
import { convertToCurrency } from "../helpers/helpers";

const ProductCard = ({ image, name, price, priceDiscount }) => {
  return (
    <div className="grid gap-4">
      <div>
        <img
          src={image}
          alt={name}
          width={292}
          height={321}
          className="rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h3>{name}</h3>
        <div className="flex gap-4 items-center">
          {priceDiscount ? (
            <>
              <p className="text-ligthgray line-through">
                {convertToCurrency(price)}
              </p>
              <p className="text-darkgray">
                {convertToCurrency(priceDiscount)}
              </p>
            </>
          ) : (
            <p>{convertToCurrency(price)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
};

export default ProductCard;
