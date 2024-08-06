import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import products from "../data/products.json";
import featured_products from "../data/featured_products.json";
import home_slide_images from "../data/home_slide.json";

const HomePage = () => {
  return (
    <div>
      <Gallery images={home_slide_images} />
      <Section
        title="Coleções em destaque"
        titleAlign={""}
        link={{ text: "Ver", href: "#" }}
      >
        <div className="flex items-center gap-4 flex-col md:flex-row">
          {featured_products.map((product) => (
            <div key={product.id} className="w-full">
              <img
                src={product.image}
                alt={product.name}
                className="rounded-md w-full"
              />
            </div>
          ))}
        </div>
      </Section>
      <Section
        title="Produtos em destaque"
        titleAlign=""
        link={{ text: "Produtos", href: "/products" }}
      >
        <ProductListing products={products} />
      </Section>
    </div>
  );
};

export default HomePage;
