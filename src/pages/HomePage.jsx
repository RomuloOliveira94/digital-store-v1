import Section from "../components/Section";

const HomePage = () => {
  return (
    <div>
      <Section
        title="Produtos em destaque"
        titleAlign=""
        link={{ text: "Produtos", href: "/products" }}
      >
        <p>Produtos em destaque</p>
      </Section>
    </div>
  );
};

export default HomePage;
