import PropTypes from "prop-types";
import { convertToCurrency } from "../helpers/helpers";
import { Link } from "react-router-dom";

const ProductCard = ({ image, name, price, priceDiscount, id }) => {
  return (
    <div className="grid gap-4">
      <Link to={`/products/${id}`}>
        <div>
          <img
            src={image}
            alt={name}
            width={292}
            height={321}
            className="rounded-md max-sm:w-full"
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
      </Link>
    </div>
  );
};

ProductCard.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  priceDiscount: PropTypes.string,
  id: PropTypes.number.isRequired,
};

export default ProductCard;
