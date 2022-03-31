import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import './Product.css';
const Product = (props) => {
  let {name,img,price,seller,stock} = props.product
  return (
    <div className="single-product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h4>{name}</h4>
        <p>
          <small>by:{seller}</small>
          <p>
            <strong>${price}</strong>
          </p>
          <p>only {stock} stocks left. Order now</p>
          <button
            onClick={() => props.addingProduct(props.product)}
            className="cartButton"
          >
            <FontAwesomeIcon icon={faCartShopping} /> Add to cart
          </button>
        </p>
      </div>
    </div>
  );
};

export default Product;
