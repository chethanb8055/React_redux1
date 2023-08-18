import Navbar from "./components/Navbar";
import { Routes } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart/>}/>
      </Routes>
    </>
  );
};

export default App;
