import LogoFooter from "./icons/LogoFooter";
import Instagram from "./icons/Instagram";
import Twitter from "./icons/Twitter";
import Facebook from "./icons/Facebook";

/* const navLinks = [
  {
    text: "Sobre Drip Store",
    link: "/about",
  },
  {
    text: "Blog",
    link: "/blog",
  },
]; */

const Footer = () => {
  return (
    <footer className="bg-darkgray">
      <div className="container py-6">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-44 px-6">
          <div className="flex flex-col gap-8">
            <LogoFooter />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              quibusdam unde at cum deserunt consectetur nam minima maiores,
              laborum ea ut blanditiis numquam neque qui iure tenetur porro,
              corporis officia!
            </p>
            <div className="flex gap-6">
              <Instagram />
              <Twitter />
              <Facebook />
            </div>
          </div>
          <div className="flex gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-xl font-bold">Informação</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-gray-400">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400">
                    Novidades
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400">
                    Ofertas
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-white text-xl font-bold">Produtos</h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <a href="#" className="text-gray-400">
                    Produtos
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400">
                    Novidades
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400">
                    Ofertas
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-white text-xl font-bold mb-4">Contato</h2>
            <p>
              Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
              60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        </div>
        <hr className="my-6" />
        <h1 className="text-center">Digital Store 2024</h1>
      </div>
    </footer>
  );
};

export default Footer;
