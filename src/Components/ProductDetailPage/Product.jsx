import React from "react";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 3000 },
  ];
  return (
    <>
      <h1>Product Page</h1>
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Product;
