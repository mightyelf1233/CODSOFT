import React, { useState } from "react";
import ProductListing from "./ProductListing";
import ShoppingCart from "./ShoppingCart";

function ProductCatalog() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <ProductListing addToCart={addToCart} />
      <ShoppingCart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
}

export default ProductCatalog;
