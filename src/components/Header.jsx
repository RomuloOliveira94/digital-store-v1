import { useState } from "react";
import LogoHeader from "./icons/LogoHeader";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/products?search=${search}`);
  };

  return (
    <header className="py-6">
      <div className="container grid gap-10">
        <div className="flex items-center gap-6">
          <LogoHeader />
          <form onSubmit={handleSubmit} className="w-full">
            <label className="input input-bordered flex items-center gap-2">
              <input
                type="text"
                className="grow"
                placeholder="Pesquisar"
                onChange={(e) => setSearch(e.target.value)}
                name="search"
                autoFocus
              />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-6 w-6 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </label>
          </form>

          <div className="flex gap-2 items-center">
            <button className="btn btn-link text-gray-400">Cadastre-se</button>
            <button className="btn btn-primary btn-sm w-28">Entrar</button>
          </div>
          <button className="btn btn-ghost">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.42233 17.8203C5.84433 17.8203 6.18733 18.1633 6.18733 18.5853C6.18733 19.0073 5.84433 19.3493 5.42233 19.3493C5.00033 19.3493 4.65833 19.0073 4.65833 18.5853C4.65833 18.1633 5.00033 17.8203 5.42233 17.8203Z"
                stroke="#C92071"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.6747 17.8203C17.0967 17.8203 17.4397 18.1633 17.4397 18.5853C17.4397 19.0073 17.0967 19.3493 16.6747 19.3493C16.2527 19.3493 15.9097 19.0073 15.9097 18.5853C15.9097 18.1633 16.2527 17.8203 16.6747 17.8203Z"
                stroke="#C92071"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M0.749878 1.25L2.82988 1.61L3.79288 13.083C3.87088 14.018 4.65188 14.736 5.58988 14.736H16.5019C17.3979 14.736 18.1579 14.078 18.2869 13.19L19.2359 6.632C19.3529 5.823 18.7259 5.099 17.9089 5.099H3.16388"
                stroke="#C92071"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.1254 8.79504H14.8984"
                stroke="#C92071"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <nav>
          <ul className="flex gap-6 items-center text-gray-400">
            <li>
              <NavLink to="/home">Home</NavLink>
            </li>
            <li>
              <NavLink to="/products">Products</NavLink>
            </li>
            <li>
              <a href="#">Categorias</a>
            </li>
            <li>
              <a href="#">Meus pedidos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
