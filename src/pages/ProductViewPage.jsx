import { useLoaderData } from "react-router-dom";
import Gallery from "../components/Gallery";
import BuyBox from "../components/BuyBox";
import products from "../data/products.json";
import { useState } from "react";
import ProductOptions from "../components/ProductOptions";
import Section from "../components/Section";
import ProductListing from "../components/ProductListing";

const ProductViewPage = () => {
  const id = useLoaderData();
  const [product, setProduct] = useState(
    products.find((prod) => prod.id == id)
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-between flex-col md:flex-row gap-8 w-full">
        <Gallery images={product.images} width={1400} />
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
      <hr />
      <Section
        title="Produtos relacionados"
        titleAlign=""
        link={{ text: "Produtos", href: "/products" }}
      >
        <ProductListing products={products} />
      </Section>
    </div>
  );
};

export default ProductViewPage;
