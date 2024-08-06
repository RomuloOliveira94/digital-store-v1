import { useLoaderData } from "react-router-dom";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import products from "../data/products.json";
import { useState } from "react";
import ProductOptions from "../components/ProductOptions";

const ProductViewPage = () => {
  const id = useLoaderData();
  const [product, setProduct] = useState(
    products.find((prod) => prod.id == id)
  );

  return (
    <div className="flex justify-center gap-4">
      <Gallery images={product.images} />
      <BuyBox
        name={product.name}
        description={product.description}
        price={product.price}
        priceDiscount={product.priceDiscount}
        stars={product.stars}
        rating={product.rating}
      >
        {product.options.map((option) => (
          <ProductOptions
            key={option.id}
            option={option}
            shape={product.shape}
          />
        ))}
      </BuyBox>
    </div>
  );
};

export default ProductViewPage;
