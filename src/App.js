import { useEffect, useMemo } from "react";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import ProductPage from "./components/ProductPage/ProductPage";

function App() {
  const [cartItems, setCartItems] = useState([]);

  useMemo(() => {
    if (cartItems.length !== 0) {
      localStorage.setItem("cartItemsList", JSON.stringify(cartItems));
    }
  }, [cartItems])

  useEffect(() => {
    const localData = JSON.parse(localStorage.getItem("cartItemsList")) || [];
    setCartItems(localData);
  }, []);

  return (
    <div className="App">
      <Navbar cartItems={cartItems} setCartItems={setCartItems} />
      <ProductPage cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default App;
