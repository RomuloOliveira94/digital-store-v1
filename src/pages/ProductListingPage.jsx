import { useEffect, useState } from "react";
import FilterGroup from "../components/FilterGroup";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import productsDb from "../data/products.json";
import { useSearchParams } from "react-router-dom";

const ProductListingPage = () => {
  const [products, setProducts] = useState(productsDb);
  const [showFilters, setShowFilters] = useState(false);
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setShowFilters(true);
      } else {
        setShowFilters(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (search) {
      setProducts(
        productsDb.filter(
          (product) =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.price.toString().includes(search)
        )
      );
    } else {
      setProducts(productsDb);
    }
  }, [search]);

  return (
    <div className="flex flex-col lg:flex-row lg:gap-12">
      <div className="flex flex-col mb-4 lg:mb-0 w-1/6">
        <div className="flex max-sm:items-center gap-4">
          <div className="flex flex-col w-full mb-6">
            <h1>Ordernar por</h1>
            <select className="select select-bordered w-full mt-2">
              <option value="1">Maior Preço</option>
              <option value="2">Menor Preço</option>
            </select>
          </div>
          <button
            className="btn btn-primary md:hidden mt-2"
            onClick={() => setShowFilters(!showFilters)}
          >
            <svg
              width="26"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.7858 1.25H1.21436L10.6429 13.075V21.25L15.3572 23.75V13.075L24.7858 1.25Z"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        {showFilters && (
          <div className="p-6 bg-white rounded-md">
            <h1 className="">Filtrar por</h1>
            <hr className="my-4" />
            <div className="grid gap-4">
              <FilterGroup
                title="Marca"
                inputType="checkbox"
                options={[
                  { id: 7, name: "Nike", value: "nike" },
                  { id: 8, name: "Adidas", value: "adidas" },
                  { id: 9, name: "Puma", value: "puma" },
                ]}
              />
              <FilterGroup
                title="Categoria"
                inputType="checkbox"
                options={[
                  { id: 1, name: "Roupas", value: "clothes" },
                  { id: 2, name: "Acessórios", value: "accessories" },
                  { id: 3, name: "Calçados", value: "shoes" },
                ]}
              />
              <FilterGroup
                title="Gênero"
                inputType="checkbox"
                options={[
                  { id: 10, name: "Masculino", value: "male" },
                  { id: 11, name: "Feminino", value: "female" },
                  { id: 12, name: "Unissex", value: "unisex" },
                ]}
              />
              <FilterGroup
                title="Estado"
                inputType="radio"
                options={[
                  { id: 13, name: "Novo", value: "new" },
                  { id: 14, name: "Usado", value: "used" },
                ]}
              />
            </div>
          </div>
        )}
      </div>
      <div>
        {products.length > 0 ? (
          <Section title="Produtos" style="flex">
            <ProductListing products={products} />
          </Section>
        ) : (
          <h1 className="text-center font-semibold my-6 text-2xl">
            Nenhum produto encontrado...
          </h1>
        )}
      </div>
    </div>
  );
};

export default ProductListingPage;
