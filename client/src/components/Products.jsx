import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((res) => res.json())
      .then((data) => setProducts(Array.isArray(data) ? data : []))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!products.length) return <p className="text-center">No products available</p>;

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          id={product.id}
          name={product.name}
          description={product.type}
          image={product.imageURL}
        />
      ))}
    </div>
  );
};

export default Products;
