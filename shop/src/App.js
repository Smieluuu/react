import React, { useState, useEffect } from "react";
import "./App.css";
import "./reset.css";
import Products from "./components/products/Products";
import Cart from "./components/cart/Cart";
import Sort from "./components/sort/Sort";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartState, setCartState] = useState(false);
  const [promoPrice, setPromoPrice] = useState(0);
  const ref = React.createRef();

  useEffect(() => {
    const getData = async () => {
      const response = await fetch("./products.json");
      const data = await response.json();

      setProducts(data.products);
    };

    getData();
  }, []);

  const showCart = () => {
    setCartState(!cartState);
  };

  const rabatCode = () => {
    const input = ref.current.value;
    if (input === "test") {
      setPromoPrice(0.85);
    } else {
      alert("wrong code");
    }
  };

  const setCartDelegate = (product) => {
    setCart([...cart, product]);
  };

  const clearCart = () => {
    setCart([]);
  };

  const sortProducts = (sort) => {
    const sortedProducts = [...products];
    if (sort === "lowest") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sort === "highest") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else {
      sortedProducts.sort((a, b) => a.id - b.id);
    }
    setProducts(sortedProducts);
  };

  return (
    <div className="App">
      <div className="header">
        <h1>Spinning Shop</h1>
        <Sort sortProducts={sortProducts} />
        <img
          src="/img/shopCart.png"
          alt="shopCart"
          onClick={showCart}
          className="img"
        />
      </div>
      {cartState && (
        <Cart
          ref={ref}
          cart={cart}
          clearCart={clearCart}
          setCart={setCart}
          rabatCode={rabatCode}
          promoPrice={promoPrice}
        />
      )}
      <Products products={products} setCart={setCartDelegate} />
    </div>
  );
};

export default App;
