import React from "react";
import "./ShoppingCart.css";

function ShoppingCart({ cartItems, removeFromCart }) {
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      {cartItems.map((item) => (
        <div className="cart-item" key={item.id}>
          <p>{item.name}</p>
          <p>
            ${item.price} x {item.quantity}
          </p>
          <button
            className="remove-from-cart-btn"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
      <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
      <button className="checkout-btn">Checkout</button>
    </div>
  );
}

export default ShoppingCart;
    