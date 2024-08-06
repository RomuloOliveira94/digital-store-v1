import { Outlet } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <main className="container px-6 py-6 md:py-16">
        <Outlet />
      </main>
    </Layout>
  );
}

export default App;
