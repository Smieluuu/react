import React from "react";
import "./Cart.css";

const Cart = React.forwardRef((props, ref) => {
  const items = props.cart;
  const itemsToDisplay = [];
  const itemsCount = {};
  let totalAmount = 0;
  let endPrice;
  const rabatCode = props.rabatCode;
  const promoPrice = props.promoPrice;

  items.forEach((item) => {
    totalAmount += item.promoPrice ? item.promoPrice : item.price;

    if ((totalAmount > 0) & (promoPrice > 0)) {
      endPrice = totalAmount * promoPrice;
    }

    if (!itemsCount[item.id]) {
      itemsCount[item.id] = 1;
      itemsToDisplay.push(item);
    } else {
      itemsCount[item.id] += 1;
    }
  });

  const deleteItem = (index) => {
    const newCart = [...items];
    newCart.splice(index, 1);
    props.setCart(newCart);
  };

  return (
    <div className="container">
      <h2>Koszyk</h2>
      {itemsToDisplay.map((item, index) => {
        return (
          <div key={index} className="cart-item">
            <p key={`${item.id}-${index}`}>
              {item.name}{" "}
              {itemsCount[item.id] ? `x${itemsCount[item.id]}` : null}{" "}
            </p>
            <button onClick={() => deleteItem(item)} className="delete-item">
              X
            </button>
          </div>
        );
      })}
      <p>
        <b>SUMA</b> {totalAmount}zł
      </p>
      <p>
        <b>SUMA PO RABACIE:</b> {endPrice}zł
      </p>
      <div className="rabat">
        <input type="text" ref={ref} />
        <button onClick={() => rabatCode()}>Apply</button>
      </div>
      <button className="clear-cart" onClick={() => props.clearCart()}>
        Wyczyść koszyk
      </button>
    </div>
  );
});

export default Cart;
