import { PageCart } from "./pages/PageCart";
import { PageHome } from "./pages/PageHome";
import { Layout } from "./components/Layout";
import { ContextApp } from "./context/Provider";
import { useContext } from "react";

function App() {
  const { showCart } = useContext(ContextApp);

  return <Layout>{showCart ? <PageCart /> : <PageHome />}</Layout>;
}

export default App;
