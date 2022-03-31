import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  const total = Math.round(cart.reduce((total, prd) => total + prd.price, 0));
  const tax = (total / 10).toFixed(2);
  let shiping = 0;
  if (total > 0 && total < 15) {
    shiping = 12.99;
  } else if (total > 15 && total < 100) {
    shiping = 6.99;
  } else if (total > 100) {
    shiping = 0;
  }
  return (
    <div>
      <h3>Cart Data</h3>
      <p>Total Products:{cart.length} </p>
      <p>Shiping Cost: ${shiping} </p>
      <p>Vat+Tax: ${tax} </p>
      <p>Total Price: ${total + shiping + Number(tax)} </p>
    </div>
  );
};

export default Cart;
