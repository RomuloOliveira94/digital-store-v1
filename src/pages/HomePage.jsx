import Gallery from "../components/Gallery";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";

const HomePage = () => {
  return (
    <div>
      <Section
        title="Produtos em destaque"
        titleAlign=""
        link={{ text: "Produtos", href: "/products" }}
      >
        <Gallery />
        <ProductListing />
      </Section>
    </div>
  );
};

export default HomePage;
