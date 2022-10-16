import React, { useState } from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(true)
  const [cartText, setAddCart] = useState(true)

  function addCart(){
    setInCart((inCart) => !inCart)
    setAddCart((cartText) => !cartText)
  }


  const liClass = inCart ? "" : "in-cart"
  const text = cartText ? "Add to Cart" : "Remove From Cart"


  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addCart}>{text}</button>
    </li>
  );
}

export default Item;
