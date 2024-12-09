import Header from "./components/header";
import Footer from "./components/footer";
import { Outlet } from "react-router-dom";
import Home from "./components/home";
function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
