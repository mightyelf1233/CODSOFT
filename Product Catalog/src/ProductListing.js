import React from "react";
import "./ProductListing.css";

function ProductListing({ addToCart }) {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      image:
        "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      image:
        "https://fastly.picsum.photos/id/60/1920/1200.jpg?hmac=fAMNjl4E_sG_WNUjdU39Kald5QAHQMh-_-TsIbbeDNI",
    },
    {
      id: 3,
      name: "Product 3",
      price: 15,
      image:
        "https://fastly.picsum.photos/id/96/4752/3168.jpg?hmac=KNXudB1q84CHl2opIFEY4ph12da5JD5GzKzH5SeuRVM",
    },
    {
      id: 4,
      name: "Product 4",
      price: 25,
      image:
        "https://fastly.picsum.photos/id/250/4928/3264.jpg?hmac=4oIwzXlpK4KU3wySTnATICCa4H6xwbSGifrxv7GafWU",
    },
    {
      id: 5,
      name: "Product 5",
      price: 18,
      image:
        "https://fastly.picsum.photos/id/514/3179/4238.jpg?hmac=OmmsoWSTgOdsCjg94wlT1VqyJPSPBypTtr-wxfTeLLI",
    },
    // Add more products here with their respective image URLs
  ];

  return (
    <div className="product-listing-container">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img
            src={product.image}
            alt={product.name}
            className="product-image"
          />
          <p className="product-name">{product.name}</p>
          <p className="product-price">${product.price}</p>
          <button
            className="add-to-cart-btn"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
