import { Outlet } from "react-router-dom";
import Layout from "./layout/Layout";

function App() {
  return (
    <Layout>
      <main className="container">
        <Outlet />
      </main>
    </Layout>
  );
}

export default App;
