import { convertToCurrency } from "../helpers/helpers";
import StarIcon from "./icons/StarIcon";

const BuyBox = ({
  name,
  reference,
  stars,
  rating,
  price,
  priceDiscount,
  description,
  children,
}) => {
  return (
    <div className="flex-1">
      <h1 className="text-4xl font-bold">{name}</h1>
      <p>{reference}</p>
      <div className="flex items-center gap-2">
        <span className="flex items-center gap-2">
          {stars} <StarIcon className="mb-0.5 stroke-warning h-4 w-4" />
        </span>
        <span>({rating} avaliações)</span>
      </div>
      <div className="flex items-center gap-3">
        <span
          className={`${
            priceDiscount
              ? "text-gray-500 line-through text-sm"
              : "font-semibold text-lg"
          }`}
        >
          {convertToCurrency(price)}
        </span>
        {priceDiscount && (
          <span className="font-semibold text-lg">
            {convertToCurrency(priceDiscount)}
          </span>
        )}
      </div>
      <p className="text-md font-normal">{description}</p>
      {children}
    </div>
  );
};

export default BuyBox;
