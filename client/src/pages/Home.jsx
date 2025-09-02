import React, { useState, useEffect } from "react";
import Products from "../components/Products";
import data from "../db.json"; // ✅ import db.json มาใช้ตรง ๆ

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const handleSearch = (keyword) => {
    if (keyword === "") {
      setFilteredProducts(products);
      return;
    }
    const result = products.filter((product) => {
  return (
    product.name.toLowerCase().includes(keyword.toLowerCase()) ||
    (product.type && product.type.toLowerCase().includes(keyword.toLowerCase()))
  );
});

    setFilteredProducts(result);
    console.log("keyword", keyword);
  };

  useEffect(() => {
  setProducts(data.products);          // <-- array จริง
  setFilteredProducts(data.products);  // <-- array จริง
}, []);

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="title justify-center text-3xl text-center m-5 gap-x-5">
          DIY Products
        </h1>
      </div>
      <div className="mb-5 flex justify-center items-center max-w">
        <label className="input flex items-center gap-2 w-5xl">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input
            type="search"
            name="keyword"
            onChange={(e) => handleSearch(e.target.value)}
            required
            placeholder="Search"
          />
        </label>
      </div>
      <Products products={filteredProducts} />
    </div>
  );
};

export default Home;
