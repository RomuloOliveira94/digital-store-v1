import PropTypes from "prop-types";

import Footer from "../components/Footer";
import Header from "../components/Header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="min-h-[80vh] text-darkgray bg-ligthgray pt-28">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
