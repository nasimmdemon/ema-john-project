import React from "react";
import { useState } from "react";
import fakeData from "../../fakeData";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const firts10 = fakeData.slice(0, 10);
  const [products, setProducts] = useState(firts10);
  const [cart, setCart] = useState([]);
  const addingProduct = (product) => {
    console.log("product Added Successfully", product);
    const newCart=[...cart,product];
    setCart(newCart)

  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((pd) => (
          <Product addingProduct={addingProduct} product={pd}></Product>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
