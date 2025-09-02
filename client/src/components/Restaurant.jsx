import React, { useEffect, useState } from "react";
import Card from "./Card";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:3000/products"); // URL ของ JSON Server
        const data = await res.json();
        setProducts(Array.isArray(data) ? data : []); // ตรวจสอบว่าเป็น array
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
          image={product.img}
        />
      ))}
    </div>
  );
};

export default Products;
