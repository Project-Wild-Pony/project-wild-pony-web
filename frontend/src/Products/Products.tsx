import React, { useState, useEffect } from "react";
import axios from "axios";

type Product = {
  id: number;
  name: string;
  brand: string;
  price: number;
  rating: number;
  numberOfReviews: number;
  imageUrl: string;
};

const emptyProducts: Product[] = [];

function Products() {
  const [products, setProducts] = useState<Product[]>(emptyProducts);

  useEffect(() => {
    axios
      .get("http://localhost:5153/catalog", {
        headers: {
          Accept: "application/json", // request JSON
        },
      })
      .then((response) => {
        console.log("API RESPONSE:", response.data); // debugging
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("API error:", error);
      });
  }, []);

  return (
    <div className="content">
      <ul className="products">
        {products.map((product) => (
          <li key={product.id}> 
            <div className="product">
              <img
                className="product-image"
                src={product.imageUrl}
                alt="product"
              />
              <div className="product-name">
                {product.name}
              </div>
              <div className="product-brand">{product.brand}</div>
              <div className="product-price">${product.price}</div>
              <div className="product-rating">
                {product.rating} Stars ({product.numberOfReviews} reviews)
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;